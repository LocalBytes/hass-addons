import pako from 'pako';
import { VirtualComponent } from 'esphome-config-ts/dist/lib/index.js';
import { MatrixKeypadBinarySensor, PartitionLight, HomeassistantTextSensor, HomeassistantSensor } from 'esphome-config-ts/dist/components/index.js';
import { lambda } from 'esphome-config-ts/dist/yaml/index.js';

function encode(uint8array) {
  const output = [];
  for (let i = 0, { length } = uint8array; i < length; i++) {
    output.push(String.fromCharCode(uint8array[i]));
  }
  return btoa(output.join(""));
}
function decode(encoded) {
  const chars = atob(encoded);
  return Uint8Array.from(chars, (c) => c.charCodeAt(0));
}
function compress(editor) {
  const deflated = pako.deflate(JSON.stringify(editor));
  return encode(deflated);
}
function decompress(chars) {
  const deflated = decode(chars);
  const inflated = pako.inflate(deflated, { to: "string" });
  return JSON.parse(inflated);
}
function getEditorUrl(editor, printmode = false) {
  return `https://blog.mylocalbytes.com/tools/localdeck-configurator?config=${encodeURIComponent(compress(editor))}${printmode ? "&print=1" : ""}`;
}

const KEYS = "ABCDEFGHIJKLMNOPQRSTUVWX";
const BUTTON_NUMBERS = [
  19,
  20,
  21,
  22,
  23,
  24,
  13,
  14,
  15,
  16,
  17,
  18,
  7,
  8,
  9,
  10,
  11,
  12,
  1,
  2,
  3,
  4,
  5,
  6
];
const newConfiguredButtonOpts = (opts) => {
  var _a, _b, _c, _d, _e, _f, _g;
  return {
    num: opts.num,
    expose: (_a = opts.expose) != null ? _a : true,
    blip_on_press: (_b = opts.blip_on_press) != null ? _b : true,
    ha_entity: (_c = opts.ha_entity) != null ? _c : null,
    toggle: (_d = opts.toggle) != null ? _d : true,
    follow_state: (_e = opts.toggle) != null ? _e : true,
    follow_brightness: (_f = opts.follow_brightness) != null ? _f : true,
    follow_color: (_g = opts.follow_color) != null ? _g : true
  };
};
class ConfiguredButton extends VirtualComponent {
  synth() {
    var _a, _b, _c, _d;
    const c = this.config.component;
    const stack = [];
    if (this.config.label.text) {
      " " + this.config.label.text.replace(/[\n_]+/g, " ");
    }
    let sensor = new MatrixKeypadBinarySensor({
      id: `keypad_button_${c.num.toString().padStart(2, "0")}`,
      name: `Button ${c.num.toString().padStart(2, "0")}`,
      internal: !c.expose,
      keypad_id: "keypad",
      key: KEYS[c.num - 1],
      on_press: [],
      on_click: [],
      on_double_click: []
    });
    stack.push(sensor);
    let lightId = `keypad_button_${c.num.toString().padStart(2, "0")}_light`;
    stack.push(new PartitionLight({
      id: lightId,
      name: `Button ${c.num.toString().padStart(2, "0")} Light`,
      internal: !c.expose,
      // @ts-ignore - Segments expects single light id for some reason
      segments: [{
        id: "ledstrip",
        from: c.num - 1,
        to: c.num - 1
      }]
    }));
    if (c.ha_entity && c.toggle) {
      let service = "homeassistant.toggle";
      if (c.ha_entity.startsWith("scene.")) {
        service = "scene.turn_on";
      }
      (_a = sensor.config.on_press) == null ? void 0 : _a.push({
        "homeassistant.service": {
          service,
          data: { entity_id: c.ha_entity }
        }
      });
    }
    if (c.ha_entity && c.follow_state) {
      stack.push(new HomeassistantTextSensor({
        id: `keypad_button_${c.num}_hass`,
        entity_id: c.ha_entity,
        on_value: [{
          "light.turn_on": {
            id: lightId,
            red: lambda('return (x == "on")?id(brightness):0;'),
            green: lambda('return (x == "on")?id(brightness):0;'),
            blue: lambda('return (x == "on")?id(brightness):0;'),
            white: lambda('return (x == "on")?id(brightness):0;')
          }
        }]
      }));
    } else if (c.blip_on_press) {
      (_b = sensor.config.on_press) == null ? void 0 : _b.push({ "script.execute": { id: "blip_light", led_index: c.num - 1 } });
    }
    if (c.ha_entity && c.follow_brightness) {
      const lambdaBright = lambda("return (x/255) * id(brightness);");
      stack.push(new HomeassistantSensor({
        id: `keypad_button_${c.num}_hass_brightness`,
        entity_id: c.ha_entity,
        attribute: "brightness",
        on_value: [{
          "light.turn_on": {
            id: lightId,
            red: lambdaBright,
            green: lambdaBright,
            blue: lambdaBright,
            white: lambdaBright
          }
        }]
      }));
    }
    if (c.ha_entity && c.follow_color) {
      stack.push(new HomeassistantTextSensor({
        id: `keypad_button_${c.num}_hass_color`,
        entity_id: c.ha_entity,
        attribute: "rgb_color",
        on_value: [{
          "script.execute": {
            id: "set_led_rgb",
            led_index: c.num - 1,
            color: lambda("return x;")
          }
        }]
      }));
    }
    const lambdaIeee = lambda("return id(wifi_info_mac_address).state;");
    const eventData = {
      "button": c.num.toString(),
      "ieee_address": lambdaIeee,
      "label": this.config.label.text
    };
    (_d = (_c = sensor.config).on_multi_click) != null ? _d : _c.on_multi_click = [];
    sensor.config.on_multi_click.push({
      timing: [
        "ON for at most 1s",
        "OFF for at least 0.5s"
      ],
      then: [
        {
          "homeassistant.event": {
            "event": "esphome.localdeck_button",
            "data": { ...eventData, "type": "single" }
          }
        }
      ]
    });
    sensor.config.on_multi_click.push({
      timing: [
        "ON for at most 1s",
        "OFF for at most 0.5s",
        "ON for at most 1s"
      ],
      then: [
        {
          "homeassistant.event": {
            "event": "esphome.localdeck_button",
            "data": { ...eventData, "type": "double" }
          }
        }
      ]
    });
    return stack;
  }
}

const newButton = (num, options = {}) => Object.assign({
  keyNum: num,
  component: newConfiguredButtonOpts({ num }),
  label: { icon: "", text: "", fontSize: 12 }
}, options);
const newPadEditor = () => ({
  title: "LocalDeck",
  buttons: BUTTON_NUMBERS.reduce(
    (acc, num) => {
      acc[num] = newButton(num);
      return acc;
    },
    {}
  )
});

export { ConfiguredButton as C, KEYS as K, decompress as d, getEditorUrl as g, newPadEditor as n };
//# sourceMappingURL=PadCfg.mjs.map

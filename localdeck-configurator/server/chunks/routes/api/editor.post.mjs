import { d as defineEventHandler, u as useRuntimeConfig, g as getQuery, r as readBody, c as createError } from '../../runtime.mjs';
import * as fs from 'fs/promises';
import _ from 'lodash';
import { VirtualComponent, EsphomeComponent, Configuration } from 'esphome-config-ts/dist/lib/index.js';
import espHomeYaml, { lambda } from 'esphome-config-ts/dist/yaml/index.js';
import { MatrixKeypadBinarySensor, PartitionLight, HomeassistantTextSensor, HomeassistantSensor, Globals, TemplateNumber, Esphome, Esp32, Wifi, TemplateOutput, Esp32Improv, ImprovSerial, WifiInfoTextSensor, Esp32RmtLedStripLight, MatrixKeypad, GpioBinarySensor, Script } from 'esphome-config-ts/dist/components/index.js';
import { g as getEditorUrl } from '../../_/compression.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'pako';

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
      stack.push(new HomeassistantSensor({
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

class SliderNumber extends VirtualComponent {
  synth() {
    var _a;
    return [
      new Globals({
        id: this.config.id,
        type: this.config.type,
        initial_value: this.config.initial_value.toString(),
        restore_value: (_a = this.config.restore_value) != null ? _a : true
      }),
      new TemplateNumber({
        name: "Brightness",
        set_action: [
          { "globals.set": { id: this.config.id, value: lambda("return x;") } }
        ],
        max_value: this.config.max,
        min_value: this.config.min,
        step: this.config.step,
        lambda: lambda("return id(brightness);")
      })
    ];
  }
}

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, key + "" , value);
  return value;
};
class Substitutions extends EsphomeComponent {
  constructor() {
    super(...arguments);
    __publicField$1(this, "componentName", "substitutions");
  }
}

const PINS_ROWS = [21, 20, 3, 7];
const PINS_COLS = [0, 1, 10, 4, 5, 6];
function newConfig(opts = {
  withDefaults: true,
  stopBeforeCustom: false
}) {
  const config = new Configuration();
  if (opts.withDefaults) {
    config.addDefaults();
    config.updateComponent(new Substitutions({
      name: "localdeck",
      friendly_name: "LocalBytes LocalDeck"
    }));
    config.updateComponent(new Esphome({
      name: "${name}",
      friendly_name: "${friendly_name}",
      name_add_mac_suffix: true,
      platformio_options: {
        "board_build.flash_mode": "dio"
      },
      on_boot: [
        {
          "light.turn_on": {
            id: "ledstrip",
            brightness: "25%",
            effect: "Addressable Rainbow"
          }
        },
        { "delay": "5s" },
        { "light.turn_off": { id: "ledstrip" } }
      ]
    })).updateComponent(new Esp32({
      board: "esp32-c3-devkitm-1",
      framework: {
        type: "esp-idf",
        sdkconfig_options: {}
      }
    })).updateComponent(new Wifi({
      ap: { ssid: "${friendly_name}" }
    })).updateComponent(new TemplateOutput({
      id: "improv_status",
      type: "binary",
      write_action: [
        {
          "light.control": {
            id: "keypad_button_01_light",
            state: lambda("return state;")
          }
        }
      ]
    })).updateComponent(new Esp32Improv({
      status_indicator: "improv_status",
      authorizer: "keypad_button_01"
    })).updateComponent(new ImprovSerial({}));
  }
  if (opts.stopBeforeCustom) {
    return { config };
  }
  config.addComponent(new WifiInfoTextSensor({
    mac_address: {
      id: "wifi_info_mac_address"
    }
  }));
  let ledstrip = new Esp32RmtLedStripLight({
    name: "Ledstrip",
    id: "ledstrip",
    rgb_order: "GRB",
    pin: "GPIO8",
    //@ts-ignore
    rmt_channel: 0,
    num_leds: 24,
    chipset: "SK6812",
    restore_mode: "RESTORE_AND_OFF",
    effects: [
      { "addressable_rainbow": { name: "Addressable Rainbow" } }
    ]
  }).addTo(config);
  let keypad = new MatrixKeypad({
    id: "keypad",
    keys: KEYS,
    //@ts-ignore
    rows: PINS_ROWS.map((pin) => ({ pin: { number: `GPIO${pin}`, allow_other_uses: true } })),
    columns: PINS_COLS.map((pin) => ({ pin: `GPIO${pin}` }))
  }).addTo(config);
  config.addComponent([
    ...PINS_ROWS
  ].map((pin) => new GpioBinarySensor({
    id: `keypad_row_${pin.toString().padStart(2, "0")}`,
    //@ts-ignore
    pin: { number: `GPIO${pin}`, allow_other_uses: true }
  })));
  const blip_light = new Script({
    id: "blip_light",
    parameters: { led_index: "int" },
    mode: "parallel",
    then: Array.from({ length: 20 }, (_, i) => i).map((i) => Math.max(100 - i * 5, 0)).flatMap((brightness2) => [{
      "light.addressable_set": {
        id: ledstrip.config.id,
        range_from: lambda("return led_index;"),
        range_to: lambda("return led_index;"),
        red: `${brightness2}%`,
        green: `${brightness2}%`,
        blue: `${brightness2}%`,
        white: `${brightness2}%`
      }
    }, {
      "delay": "25ms"
    }])
  }).addTo(config);
  new Script({
    id: "set_led_rgb",
    parameters: { led_index: "int", color: "string" },
    mode: "queued",
    then: [{
      lambda: `ESP_LOGD("set_led_rgb", "Index %d, Input: %s", led_index, color.c_str());

int firstComma = color.find(',');
int secondComma = color.find(',', firstComma + 1);

ESP_LOGD("set_led_rgb", "Commas are: %d, %d", firstComma, secondComma);

auto rs = color.substr(1, firstComma);
auto gs = color.substr(firstComma + 1, secondComma);
auto bs = color.substr(secondComma + 1, color.length() - 1);

ESP_LOGD("set_led_rgb", "%s-%s-%s", rs.c_str(), gs.c_str(), bs.c_str());
ESP_LOGD("set_led_rgb", "%d, %d, %d", stoi(rs), stoi(gs), stoi(bs));

auto light = ((AddressableLight*)id(ledstrip).get_output());
light->get(led_index).set(Color(stoi(rs), stoi(gs), stoi(bs)));
light->schedule_show();
`
    }]
  }).addTo(config);
  const brightness = new SliderNumber({
    id: "brightness",
    name: "Brightness",
    min: "0",
    max: "1",
    step: "0.01",
    initial_value: "1",
    type: "float"
  }).addTo(config);
  return { config, keypad, ledstrip, blip_light, brightness };
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

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const ObjectUtil = {
  get: (obj, path) => {
    let val = obj;
    for (let p of path) {
      val = val[p];
      if (typeof val == "undefined")
        return;
    }
    return val;
  },
  set: (obj, path, value) => {
    let val = obj;
    for (let p of path.slice(0, -1)) {
      if (typeof val[p] == "undefined" || val[p] == null)
        val[p] = {};
      val = val[p];
    }
    val[path[path.length - 1]] = value;
  },
  unset: (obj, path) => {
    const key = path[0];
    if (path.length === 1) {
      delete obj[key];
    } else {
      ObjectUtil.unset(obj[key], path.slice(1));
      if (Object.keys(obj[key]).length === 0)
        delete obj[key];
    }
  }
};
const proxyHandler = (path = [], configUtil, notify) => ({
  path,
  get(target, key) {
    var _a;
    if (key == "isProxy")
      return true;
    const prop = target[key];
    if (typeof prop == "undefined")
      return;
    if (typeof prop === "object" && prop != null && !prop.isProxy)
      target[key] = new Proxy(prop, proxyHandler([...path, key], configUtil, notify));
    if (typeof prop === "object" && prop != null)
      return target[key];
    return (_a = ObjectUtil.get(configUtil.changes, [...path, key])) != null ? _a : target[key];
  },
  set(target, key, value) {
    ObjectUtil.set(configUtil.changes, [...path, key], value);
    notify(path);
    return true;
  }
});
class ConfigUtil {
  constructor() {
    __publicField(this, "changes", {});
    __publicField(this, "defaultConfig", newPadEditor());
    __publicField(this, "notify", () => {
    });
  }
  editor() {
    return new Proxy(this.defaultConfig, proxyHandler([], this, this.notify));
  }
  getChanges() {
    return this.changes;
  }
  setChanges(changes) {
    this.changes = changes;
    this.notify([]);
  }
  resetChanges(path = "") {
    if (path === "") {
      this.changes = {};
      return true;
    }
    ObjectUtil.unset(this.changes, path.split("."));
    return true;
  }
}

function smartlyMerge(newCfg, originalContent) {
  const allowlist = ["substitutions", "wifi", "captive_portal", "logger", "web_server", "api", "ota"];
  const content = espHomeYaml.parse(originalContent);
  for (const [key, value] of Object.entries(content)) {
    if (allowlist.includes(key)) {
      newCfg[key] = _.merge(newCfg[key], value);
    }
  }
  return newCfg;
}
const editor_post = defineEventHandler(async (event) => {
  const { filesDir } = useRuntimeConfig();
  const { filename } = getQuery(event);
  const body = await readBody(event);
  const configUtil = new ConfigUtil();
  configUtil.setChanges(body.editor);
  const editor = configUtil.editor();
  if (!editor) {
    throw createError({
      statusCode: 400,
      statusMessage: "No editor found"
    });
  }
  const path = `${filesDir}/${filename}`;
  let originalContent = "";
  let fileContent = "";
  try {
    const search = "changes will be lost!";
    originalContent = await fs.readFile(path, "utf8");
    let pos = originalContent.indexOf(search);
    if (pos > 0) {
      fileContent = originalContent.substring(0, pos + search.length);
    }
  } catch (e) {
  }
  if (fileContent === "") {
    fileContent += "# This file was generated by the LocalBytes LocalDeck Configurator\n";
    let newCfg = newConfig({
      withDefaults: true,
      stopBeforeCustom: true
    }).config.synth();
    if (originalContent !== "")
      newCfg = smartlyMerge(newCfg, originalContent);
    fileContent += espHomeYaml.dump(newCfg);
    fileContent += "\n# Anything below this line will be removed when saving.\n";
    fileContent += "# To change this, navigate to the LocalBytes LocalDeck Configurator.\n";
    fileContent += "# Your changes will be lost!";
  }
  fileContent = fileContent.replace(/friendly_name: (.*)/, `friendly_name: ${editor.title}`);
  fileContent += `
# Edit: ${getEditorUrl(configUtil.getChanges())}

`;
  let { config } = newConfig({ withDefaults: false });
  Object.entries(editor.buttons).forEach(([num, b]) => config.addComponent(new ConfiguredButton(b)));
  fileContent += config.synthYaml();
  await fs.writeFile(path, fileContent, "utf8");
  return { filename, path };
});

export { editor_post as default };
//# sourceMappingURL=editor.post.mjs.map

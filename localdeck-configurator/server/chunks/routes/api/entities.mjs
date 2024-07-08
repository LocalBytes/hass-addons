import { d as defineEventHandler, u as useRuntimeConfig } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const example = [
  { entity_id: "light.livingroom_bulb", attributes: { friendly_name: "Livingroom Bulb" } },
  { entity_id: "light.bedroom_light", attributes: { friendly_name: "Bedroom Bulb" } },
  {
    entity_id: "sensor.bedroom_light_last_restart_time",
    attributes: { friendly_name: "Bedroom Bulb Last Restart Time" }
  },
  {
    entity_id: "sensor.bedroom_light_wifi_connect_count",
    attributes: { friendly_name: "Bedroom Bulb WiFi Connect Count" }
  },
  {
    entity_id: "sensor.bedroom_light_mqtt_connect_count",
    attributes: { friendly_name: "Bedroom Bulb MQTT Connect Count" }
  },
  { entity_id: "sensor.bedroom_light_restart_reason", attributes: { friendly_name: "Bedroom Bulb Restart Reason" } },
  { entity_id: "switch.bed_heater", attributes: { friendly_name: "Bed Heater" } },
  { entity_id: "scene.evening_warm", attributes: { friendly_name: "Orange Glow" } },
  { entity_id: "scene.warm_glow", attributes: {} }
];
const entities = defineEventHandler(async (event) => {
  const { api_url, api_token } = useRuntimeConfig();
  let response;
  if (api_url && api_token) {
    response = await fetch(api_url + "/states", {
      headers: { authorization: `Bearer ${api_token}` }
    }).then((response2) => response2.json());
  } else {
    response = example;
  }
  return response.map((state) => {
    var _a;
    const id = state.entity_id;
    let name = (_a = state.attributes.friendly_name) != null ? _a : id.split(".")[1].split("_").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
    return { name, id };
  });
});

export { entities as default };
//# sourceMappingURL=entities.mjs.map

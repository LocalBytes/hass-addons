import { d as defineEventHandler, u as useRuntimeConfig, g as getQuery } from '../../runtime.mjs';
import * as fs from 'fs/promises';
import _ from 'lodash';
import { d as decompress } from '../../_/compression.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'pako';

const editor_get = defineEventHandler(async (event) => {
  const { filesDir } = useRuntimeConfig();
  const { filename } = getQuery(event);
  const content = await fs.readFile(`${filesDir}/${filename}`, "utf8");
  const configMatch = content.match(/configurator\?config=(.*)/);
  const configStr = configMatch ? decodeURIComponent(configMatch[1]) : null;
  const config = configStr ? decompress(configStr) : newPadEditor();
  let matchName = content.match(/name: (.*)/);
  if (matchName)
    config.title = matchName[1];
  let matchFriendly = content.match(/friendly_name: (.*)/);
  if (matchFriendly)
    config.title = matchFriendly[1];
  config.buttons = _(config.buttons).sortBy("keyNum").keyBy("keyNum").value();
  return { configStr, config, content };
});

export { editor_get as default };
//# sourceMappingURL=editor.get.mjs.map

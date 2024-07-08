import { d as defineEventHandler, u as useRuntimeConfig, c as createError } from '../../runtime.mjs';
import * as fs from 'fs/promises';
import _ from 'lodash';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

var FileType = /* @__PURE__ */ ((FileType2) => {
  FileType2["Import"] = "import";
  FileType2["LocalDeck"] = "localDeck";
  FileType2["Other"] = "other";
  return FileType2;
})(FileType || {});

const indexFiles = defineEventHandler(async (event) => {
  const { filesDir } = useRuntimeConfig(event);
  const fileNames = await fs.readdir(filesDir);
  if (!fileNames) {
    throw createError({
      statusCode: 400,
      statusMessage: "No files found"
    });
  }
  const filesPromise = fileNames.filter((filename) => filename.endsWith(".yaml") || filename.endsWith(".yml")).map(async (filename) => {
    const path = `${filesDir}/${filename}`;
    const content = await fs.readFile(path, "utf8");
    let name = filename.replace(".yaml", "").replace(".yml", "");
    let type = FileType.Other;
    if (content.includes("packages:") && content.includes("localbytes.localdeck"))
      type = FileType.Import;
    if (content.includes("localdeck-configurator?config="))
      type = FileType.LocalDeck;
    const matchName = content.match(/name: (.*)/);
    if (matchName)
      name = matchName[1];
    const matchFriendly = content.match(/friendly_name: (.*)/);
    if (matchFriendly)
      name = matchFriendly[1];
    return { path, filename, type, name };
  });
  return {
    files: _(await Promise.all(filesPromise)).sortBy("type").groupBy("type")
  };
});

export { indexFiles as default };
//# sourceMappingURL=index-files.mjs.map

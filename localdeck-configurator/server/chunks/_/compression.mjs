import pako from 'pako';

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

export { decompress as d, getEditorUrl as g };
//# sourceMappingURL=compression.mjs.map

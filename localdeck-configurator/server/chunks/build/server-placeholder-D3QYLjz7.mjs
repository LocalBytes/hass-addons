import { v as vueExports } from './server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'fs';
import 'path';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import 'vue';
import '@unhead/shared';

const serverPlaceholder = vueExports.defineComponent({
  name: "ServerPlaceholder",
  render() {
    return vueExports.createElementBlock("div");
  }
});

export { serverPlaceholder as default };
//# sourceMappingURL=server-placeholder-D3QYLjz7.mjs.map

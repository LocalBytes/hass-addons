import { v as vueExports, s as ssrRenderAttrs_1, i as ssrRenderList_1, b as ssrRenderComponent_1, a as ssrInterpolate_1, l as useRouter } from './server.mjs';
import { u as useFetch } from './fetch-CSLK68c_.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DashboardItem",
  __ssrInlineRender: true,
  props: {
    file: {}
  },
  setup(__props) {
    const props = __props;
    useRouter();
    vueExports.computed(() => ({
      name: "editor",
      query: {
        filename: props.file.filename
      }
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs_1(vueExports.mergeProps({ class: "card border h-full text-start" }, _attrs))}><div class="text-start card-body cursor-pointer" role="link"><div class="card-header">${ssrInterpolate_1(_ctx.file.name)}</div><p>${ssrInterpolate_1(_ctx.file.filename)}</p></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DashboardItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var FileType = /* @__PURE__ */ ((FileType2) => {
  FileType2["Import"] = "import";
  FileType2["LocalDeck"] = "localDeck";
  FileType2["Other"] = "other";
  return FileType2;
})(FileType || {});
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, error } = ([__temp, __restore] = vueExports.withAsyncContext(() => useFetch("/api/index-files", "$QdkyuMY9pK")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_DashboardItem = _sfc_main$1;
      _push(`<div${ssrRenderAttrs_1(vueExports.mergeProps({ class: "container py-5 mx-auto" }, _attrs))}><h1>LocalDeck Files</h1><!--[-->`);
      ssrRenderList_1((_a = vueExports.unref(data)) == null ? void 0 : _a.files, (files, group) => {
        _push(`<div class="my-5"><div class="my-1">`);
        if (group == vueExports.unref(FileType).Import) {
          _push(`<h2>Ready for Import!</h2>`);
        } else if (group == vueExports.unref(FileType).LocalDeck) {
          _push(`<h2>Your LocalDeck&#39;s</h2>`);
        } else {
          _push(`<h2>Other files</h2>`);
        }
        _push(`</div><div class="grid md:grid-cols-3 lg:grid-cols-5 gap-2">`);
        if (vueExports.unref(data)) {
          _push(`<!--[-->`);
          ssrRenderList_1(files, (file) => {
            _push(ssrRenderComponent_1(_component_DashboardItem, {
              key: file.filename,
              file
            }, null, _parent));
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--><div>${ssrInterpolate_1(vueExports.unref(error))}</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Db1RrYL5.mjs.map

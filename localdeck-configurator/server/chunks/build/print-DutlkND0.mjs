import { _ as __nuxt_component_0 } from './nuxt-link-DZUf5cAy.mjs';
import { n as newPadEditor, i as isPrintingSymbol, _ as __nuxt_component_1 } from './PadCfg-DeSNzKGo.mjs';
import { v as vueExports, l as useRouter, m as useRoute$1, s as ssrRenderAttrs_1, b as ssrRenderComponent_1, a as ssrInterpolate_1 } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "print",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRouter();
    const route = useRoute$1();
    const { data, status } = ([__temp, __restore] = vueExports.withAsyncContext(() => useFetch("/api/editor", { query: { filename: route.query.filename } }, "$Ord54dy9bH")), __temp = await __temp, __restore(), __temp);
    const editor = vueExports.reactive(newPadEditor());
    vueExports.provide(isPrintingSymbol, true);
    vueExports.watch(status, () => {
      var _a;
      if (status.value !== "success")
        return;
      if (!((_a = data.value) == null ? void 0 : _a.config))
        return;
      Object.assign(editor, data.value.config);
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_DeckPad = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs_1(vueExports.mergeProps({ class: "container py-5 mx-auto printmode" }, _attrs))}><div class="my-2 text-sm">`);
      _push(ssrRenderComponent_1(_component_nuxt_link, { to: "/" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Configurator`);
          } else {
            return [
              vueExports.createTextVNode("Configurator")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` \u2192 `);
      _push(ssrRenderComponent_1(_component_nuxt_link, {
        to: { name: "editor", query: { filename: vueExports.unref(route).query.filename } }
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate_1(vueExports.unref(route).query.filename)}`);
          } else {
            return [
              vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(route).query.filename), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` \u2192 Print </div><h1>LocalDeck Configurator</h1><h2>${ssrInterpolate_1(vueExports.unref(editor).title)} - Printable Version</h2><a href="/">Back</a>`);
      _push(ssrRenderComponent_1(_component_DeckPad, {
        modelValue: vueExports.unref(editor),
        "onUpdate:modelValue": ($event) => vueExports.isRef(editor) ? editor.value = $event : null
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/print.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=print-DutlkND0.mjs.map

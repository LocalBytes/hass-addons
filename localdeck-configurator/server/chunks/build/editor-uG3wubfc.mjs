import { _ as __nuxt_component_0 } from './nuxt-link-DZUf5cAy.mjs';
import { n as newPadEditor, _ as __nuxt_component_1 } from './PadCfg-DeSNzKGo.mjs';
import { v as vueExports, l as useRouter, m as useRoute$1, s as ssrRenderAttrs_1, b as ssrRenderComponent_1, a as ssrInterpolate_1, d as ssrRenderAttr_1, e as ssrIncludeBooleanAttr, f as ssrLooseContain_1, g as ssrRenderSlot_1, h as ssrRenderClass_1, i as ssrRenderList_1, j as ssrGetDirectiveProps_1, k as ssrGetDynamicModelProps_1, c as useNuxtApp } from './server.mjs';
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

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const clientOnlySymbol = Symbol.for("nuxt:client-only");
vueExports.defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = vueExports.ref(false);
    vueExports.provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return vueExports.createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const ATTR_KEY = "data-n-ids";
const SEPARATOR = "-";
function useId(key) {
  var _a;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [useId] key must be a string.");
  }
  key = `n${key.slice(1)}`;
  const nuxtApp = useNuxtApp();
  const instance = vueExports.getCurrentInstance();
  if (!instance) {
    throw new TypeError("[nuxt] `useId` must be called within a component setup function.");
  }
  nuxtApp._id || (nuxtApp._id = 0);
  instance._nuxtIdIndex || (instance._nuxtIdIndex = {});
  (_a = instance._nuxtIdIndex)[key] || (_a[key] = 0);
  const instanceIndex = key + SEPARATOR + instance._nuxtIdIndex[key]++;
  {
    const ids = JSON.parse(instance.attrs[ATTR_KEY] || "{}");
    ids[instanceIndex] = key + SEPARATOR + nuxtApp._id++;
    instance.attrs[ATTR_KEY] = JSON.stringify(ids);
    return ids[instanceIndex];
  }
}
const _sfc_main$6 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "RippleUiCollapse",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ vueExports.mergeModels({
    title: { type: String, default: null }
  }, {
    "modelValue": {
      type: Boolean,
      default: false
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = vueExports.useModel(__props, "modelValue");
    const isOpen = vueExports.ref(model.value);
    vueExports.watch(model, (v) => isOpen.value = v);
    vueExports.watch(isOpen, (v) => model.value = v);
    const id = useId("$dQcX7pmGiU");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs_1(vueExports.mergeProps({
        class: [vueExports.unref(isOpen) && "overflow-visible", "accordion shadow"]
      }, _attrs))}><input${ssrRenderAttr_1("id", vueExports.unref(id))}${ssrIncludeBooleanAttr(Array.isArray(vueExports.unref(isOpen)) ? ssrLooseContain_1(vueExports.unref(isOpen), null) : vueExports.unref(isOpen)) ? " checked" : ""} class="accordion-toggle" type="checkbox"><label${ssrRenderAttr_1("for", vueExports.unref(id))} class="accordion-title px-4 bg-transparent">`);
      ssrRenderSlot_1(_ctx.$slots, "title", {}, () => {
        _push(`${ssrInterpolate_1(__props.title)}`);
      }, _push, _parent);
      _push(`</label><div class="${ssrRenderClass_1([vueExports.unref(isOpen) && "overflow-visible", "accordion-content"])}"><div class="min-h-0">`);
      ssrRenderSlot_1(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../localdeck-components/src/components/RippleUiCollapse.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DeckButtonConfigTypeahead",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ vueExports.mergeModels({
    typeahead: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const inputRef = vueExports.ref();
    const isOpen = vueExports.ref(false);
    const modelValue = vueExports.useModel(__props, "modelValue");
    const filtered = vueExports.computed(() => {
      var _a;
      return (_a = props.typeahead) == null ? void 0 : _a.filter(
        (e) => {
          var _a2, _b;
          return e.id.includes((_a2 = modelValue.value) != null ? _a2 : "") || e.name.includes((_b = modelValue.value) != null ? _b : "");
        }
      );
    });
    const renderString = (item, query) => {
      const text = item == null ? void 0 : item.replace(/[&<>"']/g, (m) => {
        var _a;
        return (_a = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        }[m]) != null ? _a : m;
      });
      if (!text || !query)
        return text;
      const index = text.toLowerCase().indexOf(query == null ? void 0 : query.toLowerCase());
      if (index < 0)
        return text;
      return text.substring(0, index) + '<span class="font-extrabold">' + text.substring(index, index + query.length) + "</span>" + text.substring(index + query.length);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs_1(vueExports.mergeProps({
        ref_key: "inputRef",
        ref: inputRef,
        class: [{ "dropdown dropdown-open": vueExports.unref(isOpen) }, "w-full"]
      }, _attrs))}><input${ssrRenderAttr_1("value", modelValue.value)} class="input w-full" type="text"><div class="dropdown-menu dropdown-menu-bottom-right gap-1 w-auto max-h-[400px] overflow-y-auto"><!--[-->`);
      ssrRenderList_1(vueExports.unref(filtered), (item) => {
        var _a, _b;
        _push(`<div class="dropdown-item"><span class="text-lg">${(_a = renderString(item.name, modelValue.value)) != null ? _a : ""}</span><span>${(_b = renderString(item.id, modelValue.value)) != null ? _b : ""}</span></div>`);
      });
      _push(`<!--]-->`);
      if (vueExports.unref(filtered).length == 0) {
        _push(`<div class="dropdown-item disabled"><span class="text-lg">No results</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../localdeck-components/src/components/DeckButtonConfigTypeahead.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DeckButtonConfigActions",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ vueExports.mergeModels({
    typeahead: {
      type: Array,
      default: null
    }
  }, {
    "modelValue": {
      required: true
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    vueExports.useModel(__props, "modelValue");
    const hassOpen = vueExports.ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RippleUiCollapse = _sfc_main$6;
      const _component_DeckButtonConfigTypeahead = _sfc_main$5;
      const _directive_maska = vueExports.resolveDirective("maska");
      let _temp0;
      _push(`<div${ssrRenderAttrs_1(vueExports.mergeProps({ class: "p-2 gap-2 flex flex-col" }, _attrs))}><p>Actions</p><label class="flex gap-2"><input${ssrIncludeBooleanAttr(Array.isArray(__props.modelValue.component.expose) ? ssrLooseContain_1(__props.modelValue.component.expose, null) : __props.modelValue.component.expose) ? " checked" : ""} class="checkbox" type="checkbox"><span>Expose to HomeAssistant</span></label><label class="flex gap-2"><input${ssrIncludeBooleanAttr(Array.isArray(__props.modelValue.component.blip_on_press) ? ssrLooseContain_1(__props.modelValue.component.blip_on_press, null) : __props.modelValue.component.blip_on_press) ? " checked" : ""}${ssrIncludeBooleanAttr(__props.modelValue.component.ha_entity && __props.modelValue.component.follow_state) ? " disabled" : ""} class="checkbox" type="checkbox"><span>Flash LED on press</span></label>`);
      _push(ssrRenderComponent_1(_component_RippleUiCollapse, {
        modelValue: vueExports.unref(hassOpen),
        "onUpdate:modelValue": ($event) => vueExports.isRef(hassOpen) ? hassOpen.value = $event : null,
        title: "HomeAssistant Integration"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-2"${_scopeId}><label class="form-field"${_scopeId}><span class="label-text"${_scopeId}>Entity</span>`);
            if (__props.typeahead) {
              _push2(ssrRenderComponent_1(_component_DeckButtonConfigTypeahead, {
                modelValue: __props.modelValue.component.ha_entity,
                "onUpdate:modelValue": ($event) => __props.modelValue.component.ha_entity = $event,
                typeahead: __props.typeahead
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<input${ssrRenderAttrs_1((_temp0 = vueExports.mergeProps({
                value: __props.modelValue.component.ha_entity,
                class: "input input-bordered",
                "data-maska": "D.E",
                "data-maska-tokens": "D:[a-zA-Z0-9]:multiple|E:[a-zA-Z0-9_]:multiple",
                placeholder: "eg: light.livingroom_light",
                type: "text"
              }, ssrGetDirectiveProps_1(_ctx, _directive_maska)), vueExports.mergeProps(_temp0, ssrGetDynamicModelProps_1(_temp0, __props.modelValue.component.ha_entity))))}${_scopeId}>`);
            }
            _push2(`</label><label class="flex gap-2"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(__props.modelValue.component.toggle) ? ssrLooseContain_1(__props.modelValue.component.toggle, null) : __props.modelValue.component.toggle) ? " checked" : ""}${ssrIncludeBooleanAttr(!__props.modelValue.component.ha_entity) ? " disabled" : ""}${ssrIncludeBooleanAttr(true) ? " checked" : ""} class="checkbox" type="checkbox"${_scopeId}><span${_scopeId}>Toggle Entity</span></label><label class="flex gap-2"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(__props.modelValue.component.follow_state) ? ssrLooseContain_1(__props.modelValue.component.follow_state, null) : __props.modelValue.component.follow_state) ? " checked" : ""}${ssrIncludeBooleanAttr(!__props.modelValue.component.ha_entity) ? " disabled" : ""}${ssrIncludeBooleanAttr(true) ? " checked" : ""} class="checkbox" type="checkbox"${_scopeId}><span${_scopeId}>Follow State (On/Off)</span></label><label class="flex gap-2"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(__props.modelValue.component.follow_brightness) ? ssrLooseContain_1(__props.modelValue.component.follow_brightness, null) : __props.modelValue.component.follow_brightness) ? " checked" : ""}${ssrIncludeBooleanAttr(!__props.modelValue.component.ha_entity || !__props.modelValue.component.follow_state) ? " disabled" : ""}${ssrIncludeBooleanAttr(true) ? " checked" : ""} class="checkbox" type="checkbox"${_scopeId}><span${_scopeId}>Follow Brightness</span></label><label class="flex gap-2"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(__props.modelValue.component.follow_color) ? ssrLooseContain_1(__props.modelValue.component.follow_color, null) : __props.modelValue.component.follow_color) ? " checked" : ""}${ssrIncludeBooleanAttr(!__props.modelValue.component.ha_entity || !__props.modelValue.component.follow_state) ? " disabled" : ""}${ssrIncludeBooleanAttr(true) ? " checked" : ""} class="checkbox" type="checkbox"${_scopeId}><span${_scopeId}>Follow Color</span></label></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "flex flex-col gap-2" }, [
                vueExports.createVNode("label", { class: "form-field" }, [
                  vueExports.createVNode("span", { class: "label-text" }, "Entity"),
                  __props.typeahead ? (vueExports.openBlock(), vueExports.createBlock(_component_DeckButtonConfigTypeahead, {
                    key: 0,
                    modelValue: __props.modelValue.component.ha_entity,
                    "onUpdate:modelValue": ($event) => __props.modelValue.component.ha_entity = $event,
                    typeahead: __props.typeahead
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "typeahead"])) : vueExports.withDirectives((vueExports.openBlock(), vueExports.createBlock("input", {
                    key: 1,
                    "onUpdate:modelValue": ($event) => __props.modelValue.component.ha_entity = $event,
                    class: "input input-bordered",
                    "data-maska": "D.E",
                    "data-maska-tokens": "D:[a-zA-Z0-9]:multiple|E:[a-zA-Z0-9_]:multiple",
                    placeholder: "eg: light.livingroom_light",
                    type: "text"
                  }, null, 8, ["onUpdate:modelValue"])), [
                    [vueExports.vModelText, __props.modelValue.component.ha_entity],
                    [_directive_maska]
                  ])
                ]),
                vueExports.createVNode("label", { class: "flex gap-2" }, [
                  vueExports.withDirectives(vueExports.createVNode("input", {
                    "onUpdate:modelValue": ($event) => __props.modelValue.component.toggle = $event,
                    disabled: !__props.modelValue.component.ha_entity,
                    checked: true,
                    class: "checkbox",
                    type: "checkbox"
                  }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                    [vueExports.vModelCheckbox, __props.modelValue.component.toggle]
                  ]),
                  vueExports.createVNode("span", null, "Toggle Entity")
                ]),
                vueExports.createVNode("label", { class: "flex gap-2" }, [
                  vueExports.withDirectives(vueExports.createVNode("input", {
                    "onUpdate:modelValue": ($event) => __props.modelValue.component.follow_state = $event,
                    disabled: !__props.modelValue.component.ha_entity,
                    checked: true,
                    class: "checkbox",
                    type: "checkbox"
                  }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                    [vueExports.vModelCheckbox, __props.modelValue.component.follow_state]
                  ]),
                  vueExports.createVNode("span", null, "Follow State (On/Off)")
                ]),
                vueExports.createVNode("label", { class: "flex gap-2" }, [
                  vueExports.withDirectives(vueExports.createVNode("input", {
                    "onUpdate:modelValue": ($event) => __props.modelValue.component.follow_brightness = $event,
                    disabled: !__props.modelValue.component.ha_entity || !__props.modelValue.component.follow_state,
                    checked: true,
                    class: "checkbox",
                    type: "checkbox"
                  }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                    [vueExports.vModelCheckbox, __props.modelValue.component.follow_brightness]
                  ]),
                  vueExports.createVNode("span", null, "Follow Brightness")
                ]),
                vueExports.createVNode("label", { class: "flex gap-2" }, [
                  vueExports.withDirectives(vueExports.createVNode("input", {
                    "onUpdate:modelValue": ($event) => __props.modelValue.component.follow_color = $event,
                    disabled: !__props.modelValue.component.ha_entity || !__props.modelValue.component.follow_state,
                    checked: true,
                    class: "checkbox",
                    type: "checkbox"
                  }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                    [vueExports.vModelCheckbox, __props.modelValue.component.follow_color]
                  ]),
                  vueExports.createVNode("span", null, "Follow Color")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../localdeck-components/src/components/DeckButtonConfigActions.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0_lazy = vueExports.defineAsyncComponent(() => import('./server-placeholder-D3QYLjz7.mjs').then((c) => c.default || c));
const _sfc_main$3 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DeckButtonConfigLabel",
  __ssrInlineRender: true,
  props: {
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const modelValue = vueExports.useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LazyDeckIconPicker = __nuxt_component_0_lazy;
      _push(`<div${ssrRenderAttrs_1(vueExports.mergeProps({ class: "rounded p-2 shadow grow flex flex-col gap-2" }, _attrs))}><h3 class="pb-2">Label</h3><div class="flex">`);
      _push(ssrRenderComponent_1(_component_LazyDeckIconPicker, {
        modelValue: modelValue.value.label,
        "onUpdate:modelValue": ($event) => modelValue.value.label = $event,
        class: "flex-grow"
      }, null, _parent));
      if (modelValue.value.label.icon) {
        _push(`<button class="btn btn-outline-danger" type="button"> X </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><textarea class="textarea" placeholder="Type here" rows="3" type="text">${ssrInterpolate_1(modelValue.value.label.text)}</textarea><label> Size <span class="flex gap-2"><input${ssrRenderAttr_1("value", modelValue.value.label.fontSize)}${ssrIncludeBooleanAttr(!modelValue.value.label.text) ? " disabled" : ""} class="input" max="20" min="4" type="range"><input${ssrRenderAttr_1("value", modelValue.value.label.fontSize)}${ssrIncludeBooleanAttr(!modelValue.value.label.text) ? " disabled" : ""} class="input w-[5rem]" max="20" min="4" type="number"></span></label></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../localdeck-components/src/components/DeckButtonConfigLabel.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DeckButtonConfig",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ vueExports.mergeModels({
    typeahead: {
      type: Array,
      default: null
    }
  }, {
    "modelValue": {
      required: true
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const input = vueExports.useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DeckButtonConfigActions = _sfc_main$4;
      const _component_DeckButtonConfigLabel = _sfc_main$3;
      _push(`<!--[--><div class="grow"><h3 class="pb-2">Editing button ${ssrInterpolate_1(__props.modelValue.keyNum)}</h3>`);
      _push(ssrRenderComponent_1(_component_DeckButtonConfigActions, {
        modelValue: input.value,
        "onUpdate:modelValue": ($event) => input.value = $event,
        typeahead: __props.typeahead
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent_1(_component_DeckButtonConfigLabel, {
        modelValue: input.value,
        "onUpdate:modelValue": ($event) => input.value = $event
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../localdeck-components/src/components/DeckButtonConfig.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "RippleUiModal",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ vueExports.mergeModels({
    title: { type: String, default: null },
    isDismissible: { type: Boolean, default: true }
  }, {
    "modelValue": {
      type: Boolean,
      default: true
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const isOpen = vueExports.useModel(__props, "modelValue");
    const id = useId("$RHP0JLa5QA");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs_1(_attrs)}><input${ssrRenderAttr_1("id", vueExports.unref(id))}${ssrIncludeBooleanAttr(Array.isArray(isOpen.value) ? ssrLooseContain_1(isOpen.value, null) : isOpen.value) ? " checked" : ""}${ssrIncludeBooleanAttr(!__props.isDismissible) ? " disabled" : ""} class="modal-state" type="checkbox"><div class="modal"><label${ssrRenderAttr_1("for", vueExports.unref(id))} class="modal-overlay"></label><div class="modal-content flex flex-col gap-5">`);
      if (__props.isDismissible) {
        _push(`<label${ssrRenderAttr_1("for", vueExports.unref(id))} class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">\u2715</label>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot_1(_ctx.$slots, "title", {}, () => {
        _push(`<h2 class="text-xl">${ssrInterpolate_1(__props.title)}</h2>`);
      }, _push, _parent);
      ssrRenderSlot_1(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../localdeck-components/src/components/RippleUiModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
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
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "editor",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRouter();
    const route = useRoute$1();
    const { data, status } = ([__temp, __restore] = vueExports.withAsyncContext(() => useFetch("/api/editor", { query: { filename: route.query.filename } }, "$m9W7Ywy1Ad")), __temp = await __temp, __restore(), __temp);
    const { data: entities } = ([__temp, __restore] = vueExports.withAsyncContext(() => useFetch("/api/entities", { server: false }, "$H0zmqLdjAr")), __temp = await __temp, __restore(), __temp);
    const config = new ConfigUtil();
    const saving = vueExports.ref(
      2
      /* IDLE */
    );
    const resetting = vueExports.ref(false);
    const editor = vueExports.ref(config.editor());
    const editing = vueExports.ref();
    config.notify = () => vueExports.triggerRef(editor);
    vueExports.watch(status, () => {
      var _a;
      if (status.value !== "success")
        return;
      if ((_a = data.value) == null ? void 0 : _a.config)
        config.setChanges(data.value.config);
    }, { immediate: true });
    const reset = () => {
      if (!confirm("Are you sure you want to reset?"))
        return;
      config.resetChanges();
      resetting.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_DeckPad = __nuxt_component_1;
      const _component_DeckButtonConfig = _sfc_main$2;
      const _component_RippleUiModal = _sfc_main$1;
      _push(`<div${ssrRenderAttrs_1(vueExports.mergeProps({ class: "container py-5 mx-auto" }, _attrs))}><div class="my-2 text-sm">`);
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
      _push(` \u2192 ${ssrInterpolate_1(vueExports.unref(route).query.filename)}</div><h1 class="mb-2">LocalDeck Configurator</h1><div class="form-control my-2"><input${ssrRenderAttr_1("value", vueExports.unref(editor).title)} class="input border-secondary inline-block" pattern="[a-zA-Z0-9]+" placeholder="Project Name" type="text"><button class="btn btn-primary" type="button">Save</button><button class="btn btn-secondary" type="button">Reset</button><button class="btn btn-outline-primary" type="button">Print</button></div><div class="flex flex-wrap justify-center gap-10 py-2"><div><h2>GUI</h2>`);
      if (vueExports.unref(editor)) {
        _push(ssrRenderComponent_1(_component_DeckPad, {
          modelValue: vueExports.unref(editor),
          "onUpdate:modelValue": ($event) => vueExports.isRef(editor) ? editor.value = $event : null,
          editing: vueExports.unref(editing),
          "onUpdate:editing": ($event) => vueExports.isRef(editing) ? editing.value = $event : null,
          class: "mx-auto"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (vueExports.unref(editing)) {
        _push(ssrRenderComponent_1(_component_DeckButtonConfig, {
          modelValue: vueExports.unref(editing),
          "onUpdate:modelValue": ($event) => vueExports.isRef(editing) ? editing.value = $event : null,
          typeahead: vueExports.unref(entities)
        }, null, _parent));
      } else {
        _push(`<div class="basis-2 grow"></div>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent_1(_component_RippleUiModal, {
        modelValue: vueExports.unref(resetting),
        "onUpdate:modelValue": ($event) => vueExports.isRef(resetting) ? resetting.value = $event : null,
        title: "Are you sure?"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}> This will reset all button configurations to their default values.<br${_scopeId}> It will <b${_scopeId}>not</b> save your changes by itself, so you will need to click the save button after resetting! </p><div class="flex justify-end gap-2"${_scopeId}><button class="btn btn-outline-error"${_scopeId}>Reset</button><button class="btn btn-primary"${_scopeId}>Cancel</button></div>`);
          } else {
            return [
              vueExports.createVNode("p", null, [
                vueExports.createTextVNode(" This will reset all button configurations to their default values."),
                vueExports.createVNode("br"),
                vueExports.createTextVNode(" It will "),
                vueExports.createVNode("b", null, "not"),
                vueExports.createTextVNode(" save your changes by itself, so you will need to click the save button after resetting! ")
              ]),
              vueExports.createVNode("div", { class: "flex justify-end gap-2" }, [
                vueExports.createVNode("button", {
                  class: "btn btn-outline-error",
                  onClick: reset
                }, "Reset"),
                vueExports.createVNode("button", {
                  class: "btn btn-primary",
                  onClick: ($event) => resetting.value = false
                }, "Cancel", 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent_1(_component_RippleUiModal, {
        "is-dismissible": vueExports.unref(saving) == 1,
        "model-value": vueExports.unref(saving) != 2,
        title: "Saving...",
        "onUpdate:modelValue": (value) => saving.value = value ? 1 : 2
        /* IDLE */
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (vueExports.unref(saving) == 0) {
              _push2(`<div${_scopeId}><div class="spinner-simple"${_scopeId}></div><p${_scopeId}> Please wait while your changes are being saved. </p></div>`);
            } else {
              _push2(`<div${_scopeId}><p${_scopeId}> Your changes have been saved, please go to ESPHome to install! </p></div>`);
            }
          } else {
            return [
              vueExports.unref(saving) == 0 ? (vueExports.openBlock(), vueExports.createBlock("div", { key: 0 }, [
                vueExports.createVNode("div", { class: "spinner-simple" }),
                vueExports.createVNode("p", null, " Please wait while your changes are being saved. ")
              ])) : (vueExports.openBlock(), vueExports.createBlock("div", { key: 1 }, [
                vueExports.createVNode("p", null, " Your changes have been saved, please go to ESPHome to install! ")
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/editor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=editor-uG3wubfc.mjs.map

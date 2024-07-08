import { v as vueExports, s as ssrRenderAttrs_1, a as ssrInterpolate_1, h as ssrRenderClass_1, n as ssrRenderStyle_1, i as ssrRenderList_1, b as ssrRenderComponent_1, _ as _export_sfc } from './server.mjs';

const isPrintingSymbol = Symbol("isPrinting");
const useIsPrinting = () => vueExports.inject(isPrintingSymbol, vueExports.ref(false));
const fontSizesSymbol = Symbol("fontSizes");
const useFontSizes = () => vueExports.inject(fontSizesSymbol, vueExports.reactive({
  devicePixelRatio: 1,
  rootFontSize: 14,
  scaleFactor: 1
}));
const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DeckButtonItem",
  __ssrInlineRender: true,
  props: {
    container: { required: true, type: Object },
    editing: { type: Boolean, default: false }
  },
  setup(__props) {
    const padGridItem = vueExports.ref();
    const print = useIsPrinting();
    const props = __props;
    const sizes = useFontSizes();
    const fontSize = vueExports.computed(() => {
      var _a2;
      var _a;
      return (_a2 = (_a = props.container) == null ? void 0 : _a.label.fontSize) != null ? _a2 : 14;
    });
    const fontSizeScaled = vueExports.computed(() => fontSize.value * sizes.scaleFactor);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs_1(vueExports.mergeProps({
        ref_key: "padGridItem",
        ref: padGridItem,
        class: [{ "shadow-lg shadow-yellow-300": __props.editing, "printmode": vueExports.unref(print) }, "pad-grid-item"]
      }, _attrs))} data-v-6e139dc0>`);
      if (!vueExports.unref(print)) {
        _push(`<p class="position-fixed keynum" data-v-6e139dc0>${ssrInterpolate_1(__props.container.keyNum)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.container.label.icon) {
        _push(`<p class="${ssrRenderClass_1([{ "material-symbols-outlined": __props.container.label.icon.startsWith("mdi:") }, "text-center icon"])}" data-v-6e139dc0>${ssrInterpolate_1(__props.container.label.icon.replace("mdi:", ""))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p style="${ssrRenderStyle_1({ fontSize: (vueExports.unref(print) ? vueExports.unref(fontSize) : vueExports.unref(fontSizeScaled)) + "px" })}" class="label-bottom" data-v-6e139dc0>${ssrInterpolate_1(__props.container.label.text)}</p></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../localdeck-components/src/components/DeckButtonItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6e139dc0"]]);
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
function tryOnScopeDispose(fn) {
  if (vueExports.getCurrentScope()) {
    vueExports.onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : vueExports.unref(r);
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = void 0;
function useMounted() {
  const isMounted = vueExports.ref(false);
  vueExports.getCurrentInstance();
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return vueExports.computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useResizeObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow, ...observerOptions } = options;
  let observer;
  const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = vueExports.computed(() => Array.isArray(target) ? target.map((el) => unrefElement(el)) : [unrefElement(target)]);
  const stopWatch = vueExports.watch(
    targets,
    (els) => {
      cleanup();
      if (isSupported.value && window2) {
        observer = new ResizeObserver(callback);
        for (const _el of els)
          _el && observer.observe(_el, observerOptions);
      }
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DeckPad",
  __ssrInlineRender: true,
  props: {
    "modelValue": { type: Object, required: true },
    "modelModifiers": {},
    "editing": { type: Object },
    "editingModifiers": {}
  },
  emits: ["update:modelValue", "update:editing"],
  setup(__props) {
    const gridRef = vueExports.ref();
    const editor = vueExports.useModel(__props, "modelValue");
    const editing = vueExports.useModel(__props, "editing");
    const isPrinting = useIsPrinting();
    if (!editor.value)
      throw new Error("Pad model is required");
    const orderedButtons = vueExports.computed(() => {
      const buttons = Object.values(editor.value.buttons);
      buttons.sort((a, b) => BUTTON_NUMBERS.indexOf(a.keyNum) - BUTTON_NUMBERS.indexOf(b.keyNum));
      return buttons;
    });
    const click = (container) => {
      var _a;
      if (!container || ((_a = editing.value) == null ? void 0 : _a.keyNum) === container.keyNum)
        return editing.value = void 0;
      editing.value = container;
    };
    const sizes = vueExports.reactive({
      devicePixelRatio: 1,
      rootFontSize: 14,
      scaleFactor: 1
    });
    useResizeObserver(gridRef, () => {
      var _a;
      sizes.devicePixelRatio = 1;
      sizes.rootFontSize = (_a = Number(void 0)) != null ? _a : 14;
      sizes.scaleFactor = 14 * sizes.devicePixelRatio * (96 / 25.4) / (4 * sizes.rootFontSize);
    });
    vueExports.provide(fontSizesSymbol, sizes);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DeckButtonItem = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs_1(vueExports.mergeProps({
        ref_key: "gridRef",
        ref: gridRef,
        class: [{ "printmode": vueExports.unref(isPrinting) }, "pad-grid"]
      }, _attrs))} data-v-a486a9b1><!--[-->`);
      ssrRenderList_1(vueExports.unref(orderedButtons), (container) => {
        var _a;
        _push(ssrRenderComponent_1(_component_DeckButtonItem, {
          key: container.keyNum,
          container,
          "data-keynum": container.keyNum,
          editing: ((_a = editing.value) == null ? void 0 : _a.keyNum) === container.keyNum && !vueExports.unref(isPrinting),
          class: "pad-grid-item",
          onClick: ($event) => click(container)
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../localdeck-components/src/components/DeckPad.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a486a9b1"]]);
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

export { __nuxt_component_1 as _, isPrintingSymbol as i, newPadEditor as n };
//# sourceMappingURL=PadCfg-DeSNzKGo.mjs.map

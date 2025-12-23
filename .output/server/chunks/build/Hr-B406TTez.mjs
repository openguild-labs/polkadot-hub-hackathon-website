import { computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { b as useAppConfig, t as tv } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'tailwindcss/colors';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const theme = {
  "base": "border-t border-default my-12"
};
const _sfc_main = {
  __name: "ProseHr",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.hr || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<hr${ssrRenderAttrs(mergeProps({
        class: ui.value({ class: props.class })
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.2.1_embla-carousel@8.6.0_typescript@5.9.3_vite@7.3.0_vue-router@4.6.4_vue@3.5.26/node_modules/@nuxt/ui/dist/runtime/components/prose/Hr.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Hr-B406TTez.mjs.map

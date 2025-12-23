import { computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
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
  "base": "py-3 px-4 text-sm text-left align-top border-e border-b first:border-s border-muted [&_code]:text-xs/5 [&_p]:my-0 [&_p]:leading-6 [&_ul]:my-0 [&_ol]:my-0 [&_ul]:ps-4.5 [&_ol]:ps-4.5 [&_li]:leading-6 [&_li]:my-0.5"
};
const _sfc_main = {
  __name: "ProseTd",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.td || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<td${ssrRenderAttrs(mergeProps({
        class: ui.value({ class: props.class })
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</td>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.2.1_embla-carousel@8.6.0_typescript@5.9.3_vite@7.3.0_vue-router@4.6.4_vue@3.5.26/node_modules/@nuxt/ui/dist/runtime/components/prose/Td.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Td-C4TiC35A.mjs.map

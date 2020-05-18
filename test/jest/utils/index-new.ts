import VueCompositionApi from '@vue/composition-api';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import { Cookies, Quasar, QuasarPluginOptions } from 'quasar';
import Vue, { ComponentOptions } from 'vue';

const mockSsrContext = () => ({
  req: {
    headers: {},
  },
  res: {
    setHeader: () => undefined,
  },
});

// https://eddyerburgh.me/mock-vuex-in-vue-unit-tests
// TODO: add typings
// We cannot infer component type from `shallowMount` using `Parameters<typeof shallowMount>`
//  because it has overloads but the last signature isn't the most general one, while `Parameters<...>`
//  will automatically resolve to the last signature thinking it's the most generic one.
// See https://github.com/Microsoft/TypeScript/issues/24275#issuecomment-390701982
export const mountQuasar = <V extends Vue>(
  component: ComponentOptions<V>,
  options: {
    quasar?: Partial<QuasarPluginOptions>;
    ssr?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cookies?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    propsData?: any;
  } = {},
) => {
  const localVue = createLocalVue();
  const app = {};

  // TODO: Vuex and VueRouter not available on localVue instance, must be reported
  // See https://forum.quasar-framework.org/topic/3461/quasar-testing-vue-warn-error-in-render-typeerror-cannot-read-property-lang-of-undefined/7
  // localVue.use(Vuex);
  // localVue.use(VueRouter);
  localVue.use(Quasar, options.quasar);
  localVue.use(VueCompositionApi);
  // const store = new Vuex.Store({});
  // const router = new VueRouter();

  if (options) {
    const ssrContext = options.ssr ? mockSsrContext() : null;

    if (options.cookies) {
      const cookieStorage = ssrContext ? Cookies.parseSSR(ssrContext) : Cookies;
      const { cookies } = options;
      Object.keys(cookies).forEach((key) => {
        cookieStorage.set(key, cookies[key]);
      });
    }

    if (options.plugins) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      options.plugins.forEach((plugin: any) => {
        plugin({
          app,
          // store,
          // router,
          Vue: localVue,
          ssrContext,
        });
      });
    }
  }

  // mock vue-i18n
  const $t = jest.fn();
  const $tc = jest.fn();
  const $n = jest.fn();
  const $d = jest.fn();

  // Works both with Vue file and TS file because of some underlying black magic
  // See https://github.com/vuejs/vue-jest/issues/188
  return shallowMount(component, {
    propsData: options.propsData,
    localVue,
    // store,
    // router,
    mocks: {
      $t, $tc, $n, $d,
    },
    // Injections for Components with a QPage root Element
    provide: {
      pageContainer: true,
      layout: {
        header: {},
        right: {},
        footer: {},
        left: {},
      },
    },
  });
};

export function mountFactory(
  ...[component, options]: Parameters<typeof mountQuasar>
) {
  // TODO: add prop typings based on component
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (propsData?: any) => mountQuasar(component, { ...options, propsData });
}

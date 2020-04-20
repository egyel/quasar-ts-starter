import Vue from 'vue';
import { boot } from 'quasar/wrappers';
import VueI18n from 'vue-i18n';
import messages from 'src/i18n';

declare module 'vue/types/vue' {
  interface Vue {
    i18n: VueI18n;
  }
}

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en-us',
  fallbackLocale: 'en-us',
  messages,
});

export default boot(({ app }) => {
  // Set i18n instance on app
  // eslint-disable-next-line no-param-reassign
  app.i18n = i18n;
});

export { i18n };

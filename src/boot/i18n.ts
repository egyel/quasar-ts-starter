import Vue from 'vue';
import { boot } from 'quasar/wrappers';
import VueI18n from 'vue-i18n';
import messages from 'src/i18n';
import dateTimeFormats from 'src/i18n/formats';
import Quasar, { Cookies } from 'quasar';

declare module 'vue/types/vue' {
  interface Vue {
    i18n: VueI18n;
  }
}

Vue.use(VueI18n);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let langIso: string = (Quasar as any).lang.getLocale();

if (!Cookies.has('lang')) {
  Cookies.set('lang', langIso);
} else {
  langIso = Cookies.get('lang');
}

const i18n = new VueI18n({
  locale: langIso,
  fallbackLocale: 'en-us',
  dateTimeFormats,
  messages,
});

export default boot(({ app }) => {
  // Set i18n instance on app
  // eslint-disable-next-line no-param-reassign
  app.i18n = i18n;
});

export { i18n };

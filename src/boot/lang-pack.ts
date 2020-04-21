import { boot } from 'quasar/wrappers';
import Quasar, { Cookies } from 'quasar';

export default boot(async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const q = (Quasar as any);
  let langIso: string = q.lang.getLocale();

  if (!Cookies.has('lang')) {
    Cookies.set('lang', langIso);
  } else {
    langIso = Cookies.get('lang');
  }

  try {
    await import(/* webpackInclude: /(de|en-us)\.js$/ */ `quasar/lang/${langIso}`).then(
      (l) => { q.lang.set(l.default); },
    );
  } catch (err) {
    console.error('Requested Quasar Language Pack does not exist');
  }
});

import en from './en';
import cn from './cn';
import Vue from 'vue';
import VueI18n from '@/wxcomponents/vue-i18n/vue-i18n.min';

Vue.use(VueI18n);

let cur_lang = uni.getSystemInfoSync().language;
uni.setStorageSync('system_info', cur_lang);
cur_lang = cur_lang === 'en' ? 'en' : 'cn';

const i18n = new VueI18n({
  locale: cur_lang,
  messages: {
    en,
    cn,
  },
});
export default i18n;

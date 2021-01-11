import en from './en';
import cn from './cn';
import Vue from 'vue';
import VueI18n from '@/wxcomponents/vue-i18n/vue-i18n.min';

Vue.use(VueI18n);
const system_info = uni.getStorageSync('system_info');
if (!system_info) {
  // 获取设备信息
  uni.getSystemInfo({
    success: function (res) {
      uni.setStorageSync('system_info', res);
    },
  });
}
const cur_lang = system_info.language == 'en' ? 'en' : 'cn';
const i18n = new VueI18n({
  locale: cur_lang || 'cn', // 默认选择的语言
  messages: {
    en,
    cn,
  },
});
export default i18n;

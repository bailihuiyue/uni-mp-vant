import Vue from 'vue'
import App from './App'
import store from './store'
import i18n from './locales'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype._i18n = i18n

const app = new Vue({
    ...App,
    store,
    i18n
})
app.$mount()

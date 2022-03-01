import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n';

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store/index'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueI18n)

import { data } from './lang/index.js'

const i18n = new VueI18n({
  locale: 'en', // デフォルト言語設定
  fallbackLocale: 'ja', // 選択中の言語に対応する文字列が存在しない場合はこの言語の文字列を使用する
  messages: data
});

new Vue({
  vuetify: new Vuetify(),
  store,
  i18n: i18n,
  router,
  render: h => h(App),
}).$mount('#app')

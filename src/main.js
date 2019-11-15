import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/css/swiper.css'
import axios from 'axios'


// import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import animated from 'animate.css'
import VueI18n from 'vue-i18n'

import 'simplebar'; 
import 'simplebar/dist/simplebar.css';

// import 'vue-happy-scroll/docs/happy-scroll.css'
import './components/Bar/Bar.css'
import {HappyScroll} from 'vue-happy-scroll'
Vue.component('Bar', HappyScroll)

import vueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(vueAwesomeSwiper);

import GeminiScrollbar from 'vue-gemini-scrollbar'

Vue.use(GeminiScrollbar)

Vue.prototype.$axios = axios
Vue.use(VueI18n)
Vue.use(animated)
Vue.use(ElementUI)
// Vue.use(ViewUI);
Vue.config.productionTip = false

Vue.prototype.EventBus = new Vue()

const i18n = new VueI18n({
  locale: 'zh-CN', // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./common/lang/zh'), // 中文语言包
    'en-US': require('./common/lang/en') // 英文语言包
  }
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
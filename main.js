import App from './App'
import store from './store'
import config from '@/app.config.js'

// 引入 uView UI
// import uView from './uni_modules/vk-uview-ui';
// 引入 vk框架前端
import vk from './uni_modules/vk-unicloud';

// #ifndef VUE3
import Vue from 'vue'

// 引入 uView UI
// Vue.use(uView);

// 引入 vk框架前端
Vue.use(vk, config);

Vue.config.productionTip = false

// main.js
import uView from "uview-ui";
Vue.use(uView);

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
});

app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'

export function createApp() {
  const app  = createSSRApp(App)
  
  // 引入vuex
  app.use(store)
  
  // 引入 uView UI
  // app.use(uView)
  
  // 引入 vk框架前端
  app.use(vk, config);
  
  return { app }
}
// #endif
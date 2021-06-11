/*
 * @Author: songsunny
 * @Date: 2021-06-07 16:22:42
 * @LastEditors: songsunny
 * @LastEditTime: 2021-06-11 10:35:40
 * @Description:
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Chr from './packages/index.js'
Vue.use(Chr)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

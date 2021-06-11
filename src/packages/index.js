/*
 * @Author: songsunny
 * @Date: 2021-06-07 17:55:34
 * @LastEditors: songsunny
 * @LastEditTime: 2021-06-08 17:55:52
 * @Description: 所有组件入口
 */
import Chr from './chr.vue'

const install = (Vue) => {
  Vue.component(Chr.name, Chr)
}

if (typeof window !== 'undefined' && window.Vue) { // 这个判断条件这样写是因为Vue只有用script标签的方式导入才会挂载到window上，import的方式导入是挂载不到window上的，而是在当前的模块内
  // 当前全局window下有Vue实例的话，直接调用install把Vue传进去
  install(window.Vue) // 全局直接通过script引用的方式会默认调用install方法
}
export default {
  install
}

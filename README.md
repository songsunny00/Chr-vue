<!--
 * @Author: songsunny
 * @Date: 2021-06-11 10:29:05
 * @LastEditors: songsunny
 * @LastEditTime: 2021-06-11 11:45:42
 * @Description: 
-->
# chr-vue

## Project setup
```
yarn add chr-vue
npm install chr-vue -s
```

### Import
```
import Chr from 'chr-vue'
import 'chr-vue/dist/chr-vue.css'
Vue.use(Chr)
```

### Usage
```
<div class="example-wrap">
  <h1>普通染色体-Chr1-带图例</h1>
  <div class="cnv-box">
    <Chr :height="20" :width="1400" type="Chr1"/>
  </div>
  <h1>普通染色体-Chr1-不带图例</h1>
  <div class="cnv-box">
    <Chr :height="20" :width="1400" type="Chr1" :isShowLegend="false"/>
  </div>
  <h1>普通染色体-Chr1-带框选位置</h1>
  <div class="cnv-box">
    <Chr :height="20" :width="1400" type="Chr1" :selectRange="[2300000,5400000]" :isShowLegend="false"/>
  </div>
  <h1>普通染色体-Chr1-标记异常位点</h1>
  <div class="cnv-box">
    <Chr :height="20" :width="1400" type="Chr1" :errorData="[[2300000,5400000],[9400000,10400000]]" :isShowError="true"/>
  </div>
  <h1>普通染色体-动态数据</h1>
  <div class="cnv-box">
    <Chr :height="20" :width="1400" :data="data" />
  </div>
</div>
```

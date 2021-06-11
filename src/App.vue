<!--
 * @Author: songsunny
 * @Date: 2021-06-07 16:22:42
 * @LastEditors: songsunny
 * @LastEditTime: 2021-06-10 17:24:27
 * @Description: 染色体示例
-->
<template>
  <div id="app">
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
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      data: [{ 'chrBelong': 'hsY', 'chrRegion': 'p11.32', 'createTime': null, 'createUser': null, 'id': 876, 'location': 'p11.32', 'regionStyle': 'gneg', 'start': 0, 'stop': 2500000, 'type': 'band' }, { 'chrBelong': 'hsY', 'chrRegion': 'p11.31', 'createTime': null, 'createUser': null, 'id': 877, 'location': 'p11.31', 'regionStyle': 'gpos50', 'start': 2500000, 'stop': 3000000, 'type': 'band' }, { 'chrBelong': 'hsY', 'chrRegion': 'p11.2', 'createTime': null, 'createUser': null, 'id': 878, 'location': 'p11.2', 'regionStyle': 'gneg', 'start': 3000000, 'stop': 11600000, 'type': 'band' }, { 'chrBelong': 'hsY', 'chrRegion': 'p11.1', 'createTime': null, 'createUser': null, 'id': 879, 'location': 'p11.1', 'regionStyle': 'acen', 'start': 11600000, 'stop': 12500000, 'type': 'band' }, { 'chrBelong': 'hsY', 'chrRegion': 'q11.1', 'createTime': null, 'createUser': null, 'id': 880, 'location': 'q11.1', 'regionStyle': 'acen', 'start': 12500000, 'stop': 13400000, 'type': 'band' }, { 'chrBelong': 'hsY', 'chrRegion': 'q11.21', 'createTime': null, 'createUser': null, 'id': 881, 'location': 'q11.21', 'regionStyle': 'gneg', 'start': 13400000, 'stop': 15100000, 'type': 'band' }, { 'chrBelong': 'hsY', 'chrRegion': 'q11.221', 'createTime': null, 'createUser': null, 'id': 882, 'location': 'q11.221', 'regionStyle': 'gpos50', 'start': 15100000, 'stop': 19800000, 'type': 'band' }, { 'chrBelong': 'hsY', 'chrRegion': 'q11.222', 'createTime': null, 'createUser': null, 'id': 883, 'location': 'q11.222', 'regionStyle': 'gneg', 'start': 19800000, 'stop': 22100000, 'type': 'band' }, { 'chrBelong': 'hsY', 'chrRegion': 'q11.223', 'createTime': null, 'createUser': null, 'id': 884, 'location': 'q11.223', 'regionStyle': 'gpos50', 'start': 22100000, 'stop': 26200000, 'type': 'band' }, { 'chrBelong': 'hsY', 'chrRegion': 'q11.23', 'createTime': null, 'createUser': null, 'id': 885, 'location': 'q11.23', 'regionStyle': 'gneg', 'start': 26200000, 'stop': 28800000, 'type': 'band' }, { 'chrBelong': 'hsY', 'chrRegion': 'q12', 'createTime': null, 'createUser': null, 'id': 886, 'location': 'q12', 'regionStyle': 'gvar', 'start': 28800000, 'stop': 59373566, 'type': 'band' }]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style lang="scss" scoped>
.example-wrap{
  width: 80%;
  margin: auto;
  h1{
    font-size: 20px;
  }
}
.cnv-box {
  padding: 0px 30px;
  border: 1px solid #CDCDCD;
  box-shadow: 0 11px 18px 5px rgba(204,225,244,0.37);
  white-space: nowrap;
}
</style>

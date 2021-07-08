<!--
 * @Author: songsunny
 * @Date: 2021-06-07 17:37:08
 * @LastEditors: songsunny
 * @LastEditTime: 2021-07-08 15:48:50
 * @Description: 染色体组件
-->
<template>
  <!--自定义染色体-->
  <div class="cnv-container">
    <ul
      v-if="chrData.length"
      class="chr-wrap">
      <template v-for="(item,idx) in chrData">
        <li
          :class="item.regionStyle+' '+(item.error?'mark':'')"
          :key="idx"
          :title="item.chrRegion"
          :style="`width:${liWidth(item)}px;height:${height}px;line-height:${height}px`"><span :style="liWidth(item)>30?'':'color:transparent;'">{{ item.chrRegion }}</span><i /></li>
      </template>
    </ul>
    <div
      v-if="selectRange && selectRange.length"
      :style="`left:${block_x}px;width:${block_w}px;height:${height+20}px`"
      class="block"/>
    <!--图标示例-->
    <div
      v-if="isShowLegend"
      class="legend-wrap">
      <div class="legend-item"><span class="bg stalk"/>stalk</div>
      <div class="legend-item"><span class="bg gvar"/>gvar</div>
      <div class="legend-item"><span class="bg acen"/>acen</div>
      <div class="legend-item"><span class="bg gneg"/>gneg</div>
      <div class="legend-item"><span class="bg gpos100"/>gpos 100%</div>
      <div class="legend-item"><span class="bg gpos75"/>gpos 75%</div>
      <div class="legend-item"><span class="bg gpos50"/>gpos 50%</div>
      <div class="legend-item"><span class="bg gpos25"/>gpos 25%</div>
    </div>
  </div>
</template>

<script>
import {chrData} from './data'
export default {
  name: 'Chr',
  props: {
    // 自定义染色体数据
    data: {
      type: Array,
      default() {
        return []
      }
    },
    // 染色体图高度，默认20
    height: {
      type: Number,
      default: 20
    },
    // 染色体图长度,默认1200
    width: {
      type: Number,
      default: 1200
    },
    // 染色体类型，如果没有传入自定义染色体数据，则根据传入染色体类型加载本地染色体数据
    type: {
      type: String,
      default: 'Chr1'
    },
    // 是否显示图例
    isShowLegend: {
      type: Boolean,
      default: true
    },
    // 框选范围
    selectRange: {
      type: Array,
      default() {
        return []
      }
    },
    // 是否标红异常染色体，默认否
    isShowError: {
      type: Boolean,
      default: false
    },
    // 异常染色体位点数据
    errorData: Array
  },
  data() {
    return {
      chrData: [],
      max: 800, // this.data[this.data.length - 1].stop, // 染色体最后位点位置
      block_x: 0, // 滑块起始位置x轴，默认0
      block_w: 0 // 滑块宽度，默认0
    }
  },
  computed: {
    dataObj() { return chrData }
  },
  watch: {
    isShowError(val) {
      if (val) {
        this.handleErr()
      }
    },
    errorData() {
      this.handleErr()
    }
  },
  created() {
    try {
      if (!this.data.length) {
        this.chrData = JSON.parse(this.dataObj[this.type])
      } else {
        this.chrData = JSON.parse(JSON.stringify(this.data))
      }
      this.max = this.chrData[this.chrData.length - 1].stop
      this.init()
      if (this.isShowError) this.handleErr()
    } catch (error) {
      console.log(error)
    }
  },
  mounted() {
  },
  methods: {
    init() {
      // 计算滑块起始位置x及宽度w
      if (this.selectRange) {
        const start = this.selectRange[0]
        const end = this.selectRange[1]
        this.block_w = (((end - start) / this.max) * this.width).toFixed(2)
        this.block_x = ((start / this.max) * this.width).toFixed(2)
      }
    },
    liWidth(item) {
      return (((item.stop - item.start) / this.max) * this.width).toFixed(2)
    },
    handleErr() {
      this.errorData.map(range => {
        this.chrData.map(item => {
          if (range[0] >= item.start && range[0] < item.stop) {
            item.error = true
          }
        })
      })
      this.chrData = JSON.parse(JSON.stringify(this.chrData))
      console.log(this.chrData)
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color:#7EADF6;
$border-radius:10px;
.cnv-container {
  display: inline-block;
  position:relative;
  padding-top: 20px;
  padding-bottom: 25px;
  white-space: nowrap;
  .block{
    position: absolute;
    top: 10px;
    background: rgba(0, 149, 255,0.4);
    border: 2px solid #0095FF;
  }
}
.chr-wrap {
  display: inline-block;
  padding: 0;
  margin: 0;
  color: #fff;
  font-size: 12px;
  border-radius: $border-radius;
  li{
    box-sizing:border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    border-top:1px solid $border-color;
    border-bottom:1px solid $border-color;
    position: relative;
    &.mark {
      span::before{
        content:"";
        position: absolute;
        width: 20px;
        height: 30px;
        left:50%;
        margin-left: -10px;
        top: -44px;
        background: #FFD4D2;
        border: 1px solid #FC6761;
        border-bottom: 0;
        box-shadow: 0 2px 5px 0 rgba(252,103,97,0.30);
        box-sizing:border-box;
      }
      i::after{
        content:"";
        position: absolute;
        width: 0;
        height: 0;
        left:50%;
        margin-left: -9px;
        top: -14px;
        border: 9px solid #FC6761;
        border-color: #FFD4D2 transparent transparent transparent;
      }
      i::before{
        content:"";
        position: absolute;
        width: 0;
        height: 0;
        left:50%;
        margin-left: -10px;
        top: -14px;
        border: 10px solid #FC6761;
        border-color: #FC6761 transparent transparent transparent;
      }
    }
    &.acen{
      background: transparent;
      position: relative;
      border-width: 0;
      &::before{
        position:absolute;
        content: "";
        width:45%;
        height: 100%;
        background: #FFD4D2;
        left: 0;
        top:-1px;
        border-top:1px solid $border-color;
        border-bottom:1px solid $border-color;
        border-right:1px solid $border-color;
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
        box-sizing:border-box;
      }
      &::after{
        position:absolute;
        content: "";
        width:45%;
        height: 100%;
        background: #FFD4D2;
        right: 0;
        top:-1px;
        border-top:1px solid $border-color;
        border-bottom:1px solid $border-color;
        border-left:1px solid $border-color;
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
        box-sizing:border-box;
      }
    }
    &:nth-child(1) {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
      border-left:1px solid $border-color;
    }
    &:nth-last-child(1) {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
      border-right:1px solid $border-color;
    }
  }
}
.gneg{
  background: #CDD8F5;
}
.gpos100 {
  background: rgba(85, 151, 210, 1);
}
.gpos75 {
  background: rgba(85, 151, 210, 0.75);
}
.gpos50 {
  background: rgba(85, 151, 210, 0.5);
}
.gpos25 {
  background: rgba(85, 151, 210, 0.25);
}
.stalk {
  background: linear-gradient(
    -45deg,
    rgba(127, 215, 224, 0.6) 0, rgba(127, 215, 224, 0.6) 25%, #7FD7E0 25%, #7FD7E0 50%,
    rgba(127, 215, 224, 0.6) 50%, rgba(127, 215, 224, 0.6) 75%, #7FD7E0 75%, #7FD7E0
  );
  background-size: 5px 10px;
}
.gvar {
  background: linear-gradient(
    45deg,
    rgba(237, 237, 237, 0.75) 0, rgba(237, 237, 237, 0.75) 25%, #EDEDED 25%, #EDEDED 50%,
    rgba(237, 237, 237, 0.75) 50%, rgba(1237, 237, 237, 0.75) 75%, #EDEDED 75%, #EDEDED
  );
  background-size: 5px 10px;
}

.legend-wrap{
  position: absolute;
  left: 0;
  margin-top: 5px;
  transform: scale(0.5);
  transform-origin:0% 0%;
  .legend-item{
    display: inline-block;
    font-size: 20px;
    color: #666666;
    margin-right: 20px;
    span{
      display: inline-block;
      width: 32px;
      height: 12px;
      border-radius: 6px;
      margin-right: 10px;
    }
  }
  .acen {
    background: #FFD4D2;
  }
}
</style>


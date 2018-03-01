<template>
  <div class="echarts">
   
    <IEcharts
      :option="option"
      @ready="onReadyMap"
    />
  
  </div>
</template>

<script>
import IEcharts from "../../util/echarts/full";

// 随机数据
function randomData() {
  return Math.round(Math.random() * 1000);
}

const symbolSize = 20;
const data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];
export default {
  name: "Demo01",
  components: {
    IEcharts
  },
  data() {
    // const that = this
    return {
      ins: null,
      echarts: null,
      loading: true,
      option: {}
    };
  },
  mounted() {
    // console.log(this);
  },
  methods: {
    onReady(instance, echarts) {
      const that = this;
      that.ins = instance;
      that.echarts = echarts;
      const updatePosition = function() {
        that.ins.setOption({
          graphic: that.echarts.util.map(data, function(item, dataIndex) {
            return {
              position: that.ins.convertToPixel("grid", item)
            };
          })
        });
      };
      const showTooltip = function(dataIndex) {
        that.ins.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: dataIndex
        });
      };
      const hideTooltip = function(dataIndex) {
        that.ins.dispatchAction({
          type: "hideTip"
        });
      };
      const onPointDragging = function(dataIndex, dx, dy) {
        data[dataIndex] = that.ins.convertFromPixel("grid", this.position);
        // Update data
        that.ins.setOption({
          series: [
            {
              id: "a",
              data: data
            }
          ]
        });
      };
      setTimeout(function() {
        // Add shadow circles (which is not visible) to enable drag.
        that.ins.setOption({
          graphic: that.echarts.util.map(data, function(item, dataIndex) {
            return {
              type: "circle",
              position: that.ins.convertToPixel("grid", item),
              shape: {
                cx: 0,
                cy: 0,
                r: symbolSize / 2
              },
              invisible: true,
              draggable: true,
              ondrag: that.echarts.util.curry(onPointDragging, dataIndex),
              onmousemove: that.echarts.util.curry(showTooltip, dataIndex),
              onmouseout: that.echarts.util.curry(hideTooltip, dataIndex),
              z: 100
            };
          })
        });
      }, 0);

      window.addEventListener("resize", updatePosition);
      that.ins.on("dataZoom", updatePosition);
    },
    onReadyMap(instance, echarts) {
      const that = this;
      that.ins = instance;
      that.echarts = echarts;

      function randomData() {
        return Math.round(Math.random() * 1000);
      }

      const updataReady = function() {
        console.log("object");
        that.ins.setOption({
          title: {
            text: "企业销量",
            subtext: "纯属虚构",
            left: "center"
          },
          tooltip: {
            trigger: "item"
          },
          // legend: {
          //   orient: "vertical",
          //   left: "left"
          // },
          visualMap: {
            min: 0,
            max: 3000,
            left: "left",
            top: "bottom",
            text: ["高", "低"], // 文本，默认为数值文本
            calculable: true
          },
          toolbox: {
            show: true,
            orient: "vertical",
            left: "right",
            top: "center",
            feature: {
              dataView: { readOnly: false },
              restore: {},
              saveAsImage: {}
            }
          },
          series: [
            {
              name: "扫码量",
              type: "map",
              mapType: "china",
              roam: false,
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: true
                }
              },
              data: [
                { name: "北京", value: randomData() },
                { name: "天津", value: randomData() },
                { name: "上海", value: randomData() },
                { name: "重庆", value: randomData() },
                { name: "河北", value: randomData() },
                { name: "河南", value: randomData() },
                { name: "云南", value: randomData() },
                { name: "辽宁", value: randomData() },
                { name: "黑龙江", value: randomData() },
                { name: "湖南", value: randomData() },
                { name: "安徽", value: randomData() },
                { name: "山东", value: randomData() },
                { name: "新疆", value: randomData() },
                { name: "江苏", value: randomData() },
                { name: "浙江", value: randomData() },
                { name: "江西", value: randomData() },
                { name: "湖北", value: randomData() },
                { name: "广西", value: randomData() },
                { name: "甘肃", value: randomData() },
                { name: "山西", value: randomData() },
                { name: "内蒙古", value: randomData() },
                { name: "陕西", value: randomData() },
                { name: "吉林", value: randomData() },
                { name: "福建", value: randomData() },
                { name: "贵州", value: randomData() },
                { name: "广东", value: randomData() },
                { name: "青海", value: randomData() },
                { name: "西藏", value: randomData() },
                { name: "四川", value: randomData() },
                { name: "宁夏", value: randomData() },
                { name: "海南", value: randomData() },
                { name: "台湾", value: randomData() },
                { name: "香港", value: randomData() },
                { name: "澳门", value: randomData() }
              ]
            }
          ]
        });
      };

      // updataReady();

      setTimeout(function() {
        updataReady();
      }, 1000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/partial/_variables";
.echarts {
  width: 800px;
  height: 800px;
  margin: 0 auto;
  color: $color-bg;
}
</style>
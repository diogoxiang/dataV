<template>
  <div class="echarts">
    <h2><router-link to="/">Go Back</router-link></h2>
    <!-- <IEcharts
      :option="option"
      @ready="onReady"
    /> -->

 
    <!-- <div id="main_geo" style="width: 1000px;height:600px;"></div> -->

  </div>
</template>

<script>
import IEcharts from "../util/echarts/full";

import * as echarts from "echarts";

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
    console.log(this);

    // let mainGeo = echarts.init(document.getElementById("main_geo"));
    // mainGeo.showLoading();
    // let geoOption = {
    //   title: {
    //     text: "扫码量布图",
    //     subtext: "模拟数据",
    //     left: "center",
    //     textStyle: {
    //       color: "#fff"
    //     }
    //   },
    //   backgroundColor: "#010b43",
    //   layoutCenter: ["30%", "30%"],
    //   tooltip: {
    //     trigger: "item"
    //   },
    //   // 数据
    //   // legend: {
    //   //   orient: 'vertical',
    //   //   left: 'left',
    //   //   data: ['扫码量']
    //   // },
    //   visualMap: {
    //     min: 0,
    //     max: 2500,
    //     left: "left",
    //     top: "bottom",
    //     text: ["高", "低"], // 文本，默认为数值文本
    //     calculable: false,
    //     textStyle: {
    //       color: "#fff"
    //     },
    //     show: false
    //   },
    //   geo: {
    //     type: "map",
    //     map: "china",
    //     regions: [
    //       {
    //         name: "南海诸岛",
    //         value: 0,
    //         itemStyle: { normal: { opacity: 0, label: { show: false } } }
    //       }
    //     ],
    //     label: {
    //       normal: {
    //         textStyle: {
    //           color: "#fff"
    //         },
    //         show: false
    //       },
    //       emphasis: {
    //         textStyle: {
    //           color: "#C6A300"
    //         },
    //         show: false
    //       }
    //     },
    //     itemStyle: {
    //       normal: {
    //         show: false,
    //         areaColor: "rgba(0,0,0,0)",
    //         borderColor: "#126cc4",
    //         borderWidth: 1.3
    //       },
    //       emphasis: {
    //         show: false,
    //         areaColor: "rgba(233,0,200,0.3)"
    //       }
    //     }
    //   },
    //   series: [
    //     {
    //       name: "扫码量",
    //       type: "map",
    //       mapType: "china",
    //       roam: false,
    //       label: {
    //         normal: {
    //           show: false
    //         },
    //         emphasis: {
    //           show: true
    //         }
    //       },
    //       data: [
    //         {
    //           name: "南海诸岛",
    //           value: 0,
    //           itemStyle: {
    //             normal: { opacity: 0, label: { show: false } }
    //           }
    //         },
    //         { name: "北京", value: randomData() },
    //         { name: "天津", value: randomData() },
    //         { name: "上海", value: randomData() },
    //         { name: "重庆", value: randomData() },
    //         { name: "河北", value: randomData() },
    //         { name: "河南", value: randomData() },
    //         { name: "云南", value: randomData() },
    //         { name: "辽宁", value: randomData() },
    //         { name: "黑龙江", value: randomData() },
    //         { name: "湖南", value: randomData() },
    //         { name: "安徽", value: randomData() },
    //         { name: "山东", value: randomData() },
    //         { name: "新疆", value: randomData() },
    //         { name: "江苏", value: randomData() },
    //         { name: "浙江", value: randomData() },
    //         { name: "江西", value: randomData() },
    //         { name: "湖北", value: randomData() },
    //         { name: "广西", value: randomData() },
    //         { name: "甘肃", value: randomData() },
    //         { name: "山西", value: randomData() },
    //         { name: "内蒙古", value: randomData() },
    //         { name: "陕西", value: randomData() },
    //         { name: "吉林", value: randomData() },
    //         { name: "福建", value: randomData() },
    //         { name: "贵州", value: randomData() },
    //         { name: "广东", value: randomData() },
    //         { name: "青海", value: randomData() },
    //         { name: "西藏", value: randomData() },
    //         { name: "四川", value: randomData() },
    //         { name: "宁夏", value: randomData() },
    //         { name: "海南", value: randomData() },
    //         { name: "台湾", value: randomData() },
    //         { name: "香港", value: randomData() },
    //         { name: "澳门", value: randomData() }
    //       ]
    //     }
    //   ]
    // };

    // setTimeout(() => {
    //   mainGeo.setOption(geoOption);
    //   mainGeo.hideLoading();
    //   // reload();
    // }, 2000);

    // function reload() {
    //   setInterval(function() {
    //     console.log("object");
    //     // mainGeo.dispatchAction({
    //     //   type: 'selectDataRange',
    //     //   // 选取 20 到 40 的值范围
    //     //   selected: [20, randomData()]
    //     // })
    //     let newOption = {
    //       series: [
    //         {
    //           name: "扫码量",
    //           type: "map",
    //           mapType: "china",
    //           roam: false,
    //           label: {
    //             normal: {
    //               show: false
    //             },
    //             emphasis: {
    //               show: true
    //             }
    //           },
    //           data: [
    //             {
    //               name: "南海诸岛",
    //               value: 0,
    //               itemStyle: {
    //                 normal: { opacity: 0, label: { show: false } }
    //               }
    //             },
    //             { name: "北京", value: randomData() },
    //             { name: "天津", value: randomData() },
    //             { name: "上海", value: randomData() },
    //             { name: "重庆", value: randomData() },
    //             { name: "河北", value: randomData() },
    //             { name: "河南", value: randomData() },
    //             { name: "云南", value: randomData() },
    //             { name: "辽宁", value: randomData() },
    //             { name: "黑龙江", value: randomData() },
    //             { name: "湖南", value: randomData() },
    //             { name: "安徽", value: randomData() },
    //             { name: "山东", value: randomData() },
    //             { name: "新疆", value: randomData() },
    //             { name: "江苏", value: randomData() },
    //             { name: "浙江", value: randomData() },
    //             { name: "江西", value: randomData() },
    //             { name: "湖北", value: randomData() },
    //             { name: "广西", value: randomData() },
    //             { name: "甘肃", value: randomData() },
    //             { name: "山西", value: randomData() },
    //             { name: "内蒙古", value: randomData() },
    //             { name: "陕西", value: randomData() },
    //             { name: "吉林", value: randomData() },
    //             { name: "福建", value: randomData() },
    //             { name: "贵州", value: randomData() },
    //             { name: "广东", value: randomData() },
    //             { name: "青海", value: randomData() },
    //             { name: "西藏", value: randomData() },
    //             { name: "四川", value: randomData() },
    //             { name: "宁夏", value: randomData() },
    //             { name: "海南", value: randomData() },
    //             { name: "台湾", value: randomData() },
    //             { name: "香港", value: randomData() },
    //             { name: "澳门", value: randomData() }
    //           ]
    //         }
    //       ]
    //     };
    //     mainGeo.setOption(newOption);
    //   }, 2000);
    // }
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/partial/_variables";
.echarts {
  width: 800px;
  height: 800px;
  margin: 0 auto;
  color: $color-bg;
}
</style>
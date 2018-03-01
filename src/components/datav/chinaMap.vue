<template>
  <div class="imapContainer is-clearfix">
    <div class="mainTop">
        <span class="headtip">二维码运营数据中心</span>
    </div>
  
    <div class="columns imapDiv">

      <!-- left  -->
      <div class="column is-4 is-clearfix leftControl">
        <!--今日区域扫码量前十  -->
       <div class="lineDiv h60 leftUp">
          <!-- 今日区域扫码量前十 -->
          <div class="leftContent">
           
            <div class="txtTip is-clearfix mt20">
              今日区域扫码量前十
            </div>

            <div class="txtContent is-clearfix">
              leftContent
            </div>
             
          </div>
        </div>
        <!--今日区域扫码量前十 end  -->

        <!-- 每日扫码量对比 -->
        <div class="lineDiv h40 mt5 leftDown">
         
            <div class="leftContent2">
              
              <div class="txtTip is-clearfix">
                每日扫码量对比
              </div>
              <div class="txtContent is-clearfix">
                <IEcharts
                    :option="option"
                    @ready="onLeftReady"
                    :loading="loading"
                  /> 

              </div>

            </div>

        </div>
        <!-- 每日扫码量对比 end -->
      </div>

      <!-- left end -->

      <!-- right  -->
      <div class="column is-8 is-clearfix rightControl pl0">

        <div class="lineDiv h70 columns mgnone">
          <!-- 扫码区域 start -->
          <div class="column is-9 pl0 chinaMapDiv pt0">
              <!-- 扫码区域分布图 -->

              <div class="imapContext">
                    <div class="txtTipPart2 is-clearfix fl-left">
                      扫码量区域分布图
                    </div>
                    <div class="imapChina" id="imapChina">
          
                       <IEcharts
                        :option="optionMap"
                        @ready="onimapChina"
                        :loading="loadingMap"
                        />  


                    </div>


              </div>


          </div>
          <!-- 扫码区域 end -->
          <!-- 生码量 start -->
          <div class="column is-3 pl0 rightUp pt20 pr0">
               <div class="rightContent">

                <div class="countDiv fn-center">
                  <p class="color-yellow numberDiv">1321321313213213</p>  
                  <p class="color-blue"> 印刷厂总生产码量 </p>
                </div> 
                
                 <div class="countDiv fn-center mt20">
                  <p class="color-yellow numberDiv">1321321313213213</p>  
                  <p class="color-blue"> 已激活码数量 </p>
                </div> 

                <div  class="rightPie mt20">
                    <IEcharts
                    :option="option"
                    @ready="onReady"
                    :loading="loading"
                  /> 
                </div>
               

              </div>
          </div>
          <!-- 生码量 end -->
 
        </div>

        <!-- footDiv start -->
        <div class="lineDiv h30 mt5 footDiv">
          
            <div class="footContent">
              
              <div class="txtTip is-pulled-right">
                规格扫码量对比 <span class="color-yellow1">(云南中烟)</span>
              </div>
              <div class="footTxtContent">
                    <IEcharts
                    :option="option"
                    @ready="onFootReady"
                    :loading="loading"
                  /> 
              </div>

            </div>

        </div>
        <!-- footDiv end -->

      </div>
        <!-- right end -->
  
    </div>

    <!-- <IEcharts
      :option="option"
      @ready="onReady"
      :loading="loading"
    /> -->
 
  </div>
</template>


<script>
import IEcharts from "../../util/echarts/full";
import Util from "../../util";
// --
import * as echarts from "echarts";

// common
const doc = document;
const win = window;
// 随机数据
function randomData() {
  return Math.round(Math.random() * 1000);
}

export default {
  name: "chinaMap",
  components: {
    IEcharts
  },
  data() {
    return {
      // part1
      ins: null, //每日扫码量 ins
      echarts: null, //每日扫码量 echarts
      option: {
        title: {
          show: false
        },
        color: ["#11d8b7", "#ffb300"]
      },
      // part2
      insMap: null, //扫码量区域分布图 ins
      echartsMap: null, //扫码量区域分布图 echarts
      loadingMap: true,
      optionMap: {
        title: {
          show: false
        },
        color: ["#11d8b7", "#ffb300"]
      },
      //  part3
      insPat1: null, //生码量 ins
      echartsPat1: null, //生码量 echarts
      optionPat1: {
        title: {
          show: false
        },
        color: ["#11d8b7", "#ffb300"]
      },
      // pat 4
      insPat2: null, //规格对比  ins
      echartsPat2: null, //规格对比   echarts
      optionPat2: {
        title: {
          show: false
        },
        color: ["#11d8b7", "#ffb300"]
      },

      loading: true,

      stime: new Date(),
      config: {}
    };
  },
  mounted() {
    const that = this;
    // console.log(global);
    // console.log(Util.isEmpty(""));
    // console.log(Util.screen.listenKeyDown());
    // console.log(Util);
    // console.log(Util.screen.listenResize());

    console.log(that.$store);
    // this.$store.dispatch("setLoading", "true");
  },
  methods: {
    // 生码量
    onReady(instance, echarts) {
      const that = this;
      that.ins = instance;
      that.echarts = echarts;

      that.loading = false;
      //   console.log(that);
      //   console.log(instance);
      const updatePosition = function() {
        that.ins.setOption({
          series: {
            type: "pie",
            radius: ["30%", "86%"],
            hoverAnimation: false,
            label: {
              normal: {
                formatter: "{b}\n {d}%",
                fontSize: 14,
                // backgroundColor: "#eee",
                position: "inside",
                verticalAlign: "middle"
              }
            },

            data: [
              {
                name: "激活数量",
                value: 3500
              },
              {
                name: "生码数量",
                value: 2000
              }
            ]
          }
        });
      };
      updatePosition();

      //   console.log(instance.setOption({}));
      // console.log(that.ins.getWidth());
      //   console.log(echarts);
      console.log(that);
    },
    // 每日扫码量
    onLeftReady(instance, echarts) {
      const that = this;
      that.insPat1 = instance;
      that.echartsPat1 = echarts;

      that.loading = false;

      const updataReady = function() {
        // console.log("object");
        that.insPat1.setOption({
          xAxis: {
            type: "category",

            data: ["1日", "2日", "3日", "4日", "5日", "6日", "7日"],
            axisLine: {
              lineStyle: {
                color: "#9de9ff"
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: true
            }
            // boundaryGap: false
          },
          yAxis: {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#9de9ff"
              }
            },
            splitLine: {
              show: false
            }
          },
          series: [
            {
              name: "扫码量",
              data: [1820, 2932, 3901, 3234, 2290, 3330, 1320],
              type: "line",
              color: ["#f1e531"],
              symbolSize: 10,
              label: {
                normal: {
                  show: true,
                  position: "top",
                  color: "#fff"
                }
              },
              lineStyle: {
                normal: {
                  color: "#f1e531"
                }
              },
              itemStyle: {
                normal: {
                  borderWidth: 2,
                  borderColor: ["#ffb300"]
                }
              }
            }
          ]
        });
      };

      updataReady();
      console.log(that);
    },
    // 规格扫码量
    onFootReady(instance, echarts) {
      // console.log("object");
      const that = this;
      that.insPat2 = instance;
      that.echartsPat2 = echarts;

      that.loading = false;

      const updataReady = function() {
        // console.log("object");
        that.insPat2.setOption({
          grid: {
            top: 20,
            left: "6%",
            right: "2%",
            bottom: 20
          },
          xAxis: {
            type: "category",

            data: [
              "玉溪(硬)",
              "云烟",
              "红塔山",
              "玉溪(软)",
              "玉溪(透明)",
              "玉溪(田园)",
              "云烟(细支)",
              "云烟(细支)"
            ],
            axisLine: {
              lineStyle: {
                color: "#9de9ff"
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: true
            }
            // boundaryGap: false
          },
          yAxis: {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#9de9ff"
              }
            },
            splitLine: {
              show: false
            }
          },
          series: [
            {
              name: "扫码量",
              data: [18210, 29023, 17901, 26234, 12290, 3330, 9320, 5201],
              type: "line",
              label: {
                normal: {
                  show: true,
                  position: "top",
                  color: "#fff"
                }
              },
              itemStyle: {
                normal: {
                  borderWidth: 2,
                  borderColor: ["#fff"]
                }
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "rgb(239, 144, 22)"
                    },
                    {
                      offset: 1,
                      color: "rgb(235, 224, 15)"
                    }
                  ])
                }
              }
            }
          ]
        });
      };

      updataReady();
    },
    // 扫码区域分布图
    onimapChina(instance, echarts) {
      const that = this;
      that.insMap = instance;
      that.echartsMap = echarts;

      that.loadingMap = false;

      const updataReadye = function() {
        // console.log(that);

        that.insMap.setOption({
          title: {
            show: false
          },
          // backgroundColor: "#010b43",
          layoutCenter: ["30%", "30%"],
          tooltip: {
            trigger: "item"
          },
          visualMap: {
            min: 0,
            max: 2500,
            left: "left",
            top: "bottom",
            text: ["高", "低"], // 文本，默认为数值文本
            calculable: false,
            // seriesIndex: [1],
            inRange: {
              color: ["#f9eaa2", "#bb8f3e"]
            },
            textStyle: {
              color: "#fff"
            },
            show: false
          },
          geo: {
            type: "map",
            map: "china",
            regions: [
              {
                name: "南海诸岛",
                value: 0,
                itemStyle: { normal: { opacity: 0, label: { show: false } } }
              }
            ],
            label: {
              normal: {
                textStyle: {
                  color: "#fff"
                },
                show: false
              },
              emphasis: {
                textStyle: {
                  color: "#C6A300"
                },
                show: false
              }
            },
            itemStyle: {
              normal: {
                show: false,
                areaColor: "rgba(0,0,0,0)",
                borderColor: "#126cc4",
                borderWidth: 1.3
              },
              emphasis: {
                show: false,
                areaColor: "rgba(233,0,200,0.3)"
              }
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
                {
                  name: "南海诸岛",
                  value: 0,
                  itemStyle: {
                    normal: { opacity: 0, label: { show: false } }
                  }
                },
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
      // updataReadye();
      setTimeout(() => {
        updataReadye();
      }, 100);

      // that.ins.on("dataZoom", updataReadye);
      console.log(that.insMap);
      // console.log(that.ins.getOption());
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/partial/_variables";
// .echarts {
//   width: 500px;
//   height: 500px;
//   margin: 0 auto;
//   // border: 1px solid $color-bg;
// }
</style>

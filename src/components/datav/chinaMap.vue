<template>
  <div class="imapContainer">
    <div class="mainTop">
        <span class="headtip">二维码运营数据中心</span>
    </div>
  
    <div class="columns imapDiv">

      <!-- left  -->
      <div class="column is-4 is-clearfix leftControl">
        <!--今日区域扫码量前十  -->
       <div class="lineDiv h60 leftUp">
          今日区域扫码量前十
          <div class="leftContent">
           
            <div class="txtTip is-clearfix">
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
          <div class="column is-9 pl0 chinaMapDiv pt0">
            
              扫码区域分布图
          </div>
          <!-- 生码量 -->
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

export default {
  name: "chinaMap",
  components: {
    IEcharts
  },
  data() {
    return {
      ins: null,
      echarts: null, //引入
      loading: true,
      option: {
        title: {
          show: false
        },
        color: ["#11d8b7", "#ffb300"]
      },
      stime: new Date(),
      config: {}
    };
  },
  mounted() {
    console.log(global);
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
    },
    // 每日扫码量
    onLeftReady(instance, echarts) {
      const that = this;
      that.ins = instance;
      that.echarts = echarts;

      that.loading = false;

      const updataReady = function() {
        console.log("object");
        that.ins.setOption({
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
    },
    // 规格扫码量
    onFootReady(instance, echarts) {
      console.log("object");
      const that = this;
      that.ins = instance;
      that.echarts = echarts;

      that.loading = false;

      const updataReady = function() {
        console.log("object");
        that.ins.setOption({
          grid: {
            top: 20,
            left: "5%",
            right: "2%",
            bottom: 20
          },
          xAxis: {
            type: "category",

            data: ["玉溪(硬)", "云烟", "红塔山", "玉溪(软)", "玉溪(透明)", "玉溪(田园)", "云烟(细支)", "云烟(细支)"],
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
              data: [18210, 29232, 7901, 6234, 12290, 3330, 9320, 5201],
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
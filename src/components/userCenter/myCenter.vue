<template>
      <div class="userContainer is-clearfix">
        <div class="mainTop">
            <span class="headtip">用户运营数据中心</span>
        </div>   
        <div class="userDiv ">
            <!-- userDiv -->
            <div class="columns  is-gapless cDiv">
                <div class="column  is-6 userMap">
                         <div class="txtTip is-clearfix mt20">
                         注册区域分布图
                        </div>
                        <!-- userVisualMap -->
                        <div class="userVisualMap">
                            <div class="pic">
                                <img src="../../assets/img/user_visualMap.png" alt="">
                            </div>
                            <div class="smallTxt"> <span class="fl-left">&nbsp;&lt; 100 </span>  <span class="fl-right">&nbsp; &gt; 1000000 &nbsp;</span>   </div>
                        </div>
                        <!-- userVisualMap end -->
                        <div class="userMapContent">
                            <!-- userMapContent -->
                             <IEcharts
                        :option="optionMap"
                        @ready="onimapChina"
                        :loading="loadingMap"
                        />  
                        </div>
                        <!-- userTotalContext -->
                        <div class="userTotalContext">
                            <!-- userTotalContext -->
                            <div class="totalTxt">
                                总注册用户数量
                                <div class="totalNum text-right">
                                    {{regCount | formatCash}}
                                </div>
                            </div>

                            <div class="totalTxt">
                                注册率:<br/>
                                注册用户/单品扫码量
                                <div class="totalNum text-right totalPie">
                                   
                                    <div class="fl-left cleft">
                                    {{regPercent}}
                                    </div>
                                    <div class="fl-right cright">
                                        <IEcharts
                                        :option="option"
                                        @ready="onRegReady"
                                        :loading="loading"
                                    /> 
                                    </div>
                                </div>
                            </div>
                            <!-- end -->

                            <div class="totalTxt">
                                今日扫码数量
                                <div class="totalNum text-right">
                                    {{regCount | formatCash}}
                                </div>
                            </div>

                        </div>
                        <!-- userTotalContext -->
                        <!-- userProvinces -->
                        <div class="userProvinces">
                            <!-- userProvinces -->
                            <div class="pTitle">
                                总注册用户数量
                            </div>
                            <div class="pDiv">
                               <ul>
                                    <li>四川省      <span class="fl-right">1000</span>      </li>   
                                     <li>四川省      <span class="fl-right">1000</span>      </li>   
                              
                               <li>四川省      <span class="fl-right">1000</span>      </li>   
                              
                               <li>四川省      <span class="fl-right">1000</span>      </li>   
                              
                               <li>四川省      <span class="fl-right">1000</span>      </li>   
                              
                                </ul>      


                            </div>
                        </div>
                        <!-- userProvinces end -->
                </div>
                 
                 <div class="column  is-6 userData">
                    
                        <div class="userDataTop">
                            <!-- userDiv right -->
                            <div class="userDataTopTitle columns">
                               
                                <div class="column ft24 fn-pt20">
                                     云南中烟
                                </div>
                                <div class="column ft24 ">
                                    用户量对比
                                </div>
                            </div>

                            <div class="userDataTopContent">
                                    <!-- userDataTopContent -->

                                    <div class="itemDiv columns "  >
                                        <div class="itemName column is-2 text-right">
                                            用户量对 
                                        </div>
                                        <div class="itemProgress column is-8">
                                            <div class="ProgressBg">
                                            &nbsp;
                                            </div>
                                            <div class="ProgressValue" style="width:10%" >
                                            &nbsp;
                                            </div>
                                        </div>
                                        <div class="itemNumber column is-2 text-left">
                                           2222
                                        </div>
                                    </div>


                            </div>


                        </div>

                </div>
            </div>
            
            <!-- myfootDiv -->
 
            <div class="myfootDiv is-clearfix">
                    <div class="contentDiv columns is-gapless">
                        <div class="column is-8 bgLine03">
                            <div class="contentDiv  columns">
                             
                        <div class="column">
                                <!-- left -->
                                <div class="pTitle">
                                    今日活跃度占比
                                </div>
                                <div class="pContent">
                                    <IEcharts
                                        :option="optionActive"
                                        @ready="onActiveReady"
                                        :loading="loadingActive"
                                    /> 
                                </div>


                        </div>

                        <div class="column">
                            <!-- right -->
                                <div class="pTitle text-right">
                                    7日注册用户走势
                                </div>

                                <div class="pContent">
                                   
                                    <IEcharts
                                    :option="optionSeven"
                                    @ready="onSevenReady"
                                    :loading="loadingSeven"
                                /> 


                                </div>

                        </div>

                            </div>

                        </div>
                        <div class="column is-4 bgLine04 isRelative">
                          <div class="txtTip is-clearfix mt5">
                          各种中烟注册用户占比
                          </div>
                          <div class="pContent isAbsolute">
                                    <!-- pContent -->
                                     <IEcharts
                                    :option="optionSort"
                                    @ready="onSortReady"
                                    :loading="loadingSort"
                                /> 
                          </div>


                        </div>

                    </div>
               
    


            </div>
            <!-- myfootDiv end -->
        </div>

        
      </div>
</template>
<script>
// 接口
import api from "../../server/api";

import IEcharts from "../../util/echarts/full";
import Util from "../../util";

// common
const doc = document;
const win = window;

// 随机数据
function randomData() {
  return Math.round(Math.random() * 1000);
}

export default {
  name: "uCenter",
  components: { IEcharts },
  data() {
    return {
      config: 0,
      endVal: 2017,
      comId: "", //公司id 标识,目前取值（163、164、166）
      // part1
      insMap: null, //注册区域分布图 ins
      echartsMap: null, //注册区域分布图 echarts
      loadingMap: true,
      optionMap: {
        title: {
          show: false
        },
        color: ["#fff78b", "#ffb402"]
      },
      //   part2
      ins: null, // 注册用户/单品扫码量 ins
      echarts: null, // 注册用户/单品扫码量 echarts
      loading: true,
      option: {
        title: {
          show: false
        },
        color: ["#11d8b7", "#ffb300"]
      },
      //   part3 今日活跃占比
      insActive: null,
      echartsActive: null,
      loadingActive: true,
      optionActive: {
        title: {
          show: false
        },
        color: ["#60ccf9", "#ffb300"]
      },
      // part 4 7日注册用户走势
      insSeven: null,
      echartsSeven: null,
      loadingSeven: true,
      optionSeven: {
        title: {
          show: false
        },
        color: ["#60ccf9", "#ffb300"]
      },
      // part 5 各中烟注册用户占比
      insSort: null,
      echartsSort: null,
      loadingSort: true,
      optionSort: {
        title: {
          show: false
        },
        color: ["#60ccf9", "#ffb300"]
      },
      //   totalCount
      regCount: 5452, //注册人员
      regPercent: "32%"
    };
  },
  mounted() {
    console.log(Util);
  },
  methods: {
    // 注册区域分布图
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
            top: "4%",
            left: "15%",
            zoom: 1.1,
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
              name: "注册量",
              type: "map",
              mapType: "china",
              top: "4%",
              left: "15%",
              zoom: 1.1,
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
      // console.log(that.insMap);
      // console.log(that.ins.getOption());
    },
    // 注册用户/单品扫码量
    onRegReady(instance, echarts) {
      const that = this;
      that.ins = instance;
      that.echarts = echarts;

      that.loading = false;
      const updataReadye = function() {
        console.log("object");
        that.ins.setOption({
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: "70%",
              center: ["50%", "50%"],
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [{ value: 335, name: "注册用户" }, { value: 610, name: "单品扫码量" }],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                }
              }
            }
          ]
        });
      };
      updataReadye();
    },
    // 今日活跃度占比
    onActiveReady(instance, echarts) {
      const that = this;
      that.insActive = instance;
      that.echartsActive = echarts;
      let scale = 1;
      that.loadingActive = false;

      const upActiveReady = function() {
        that.insActive.setOption({
          series: [
            {
              name: "访问来源",
              type: "pie",
              selectedMode: "single",
              hoverAnimation: false,
              legendHoverLink: false,
              radius: "55%",
              silent: true,
              minAngle: 35,
              label: {
                normal: {
                  position: "innter"
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              tooltip: {
                show: false
              },
              data: [{ value: 3215642, name: "", selected: true }, { value: 2215642, name: "" }]
            },
            {
              name: "访问来源",
              type: "pie",
              selectedMode: "single",
              radius: "3%",
              silent: true,
              minAngle: 35,
              label: {
                normal: {
                  position: "outside",
                  // formatter: ["{a|{b}: } {c|{c}} \n{a|占比: }{c| {d}%} ", "{hr|}"].join("\n"),

                  formatter: function(params) {
                    // console.log(params);

                    let vpercent = Util.tool.formatCash(params.value);

                    return (
                      "{a|" +
                      params.name +
                      ": }" +
                      "{c|" +
                      vpercent +
                      "}\n" +
                      "{e|占比: " +
                      params.percent +
                      "%}"
                    );
                  },

                  rich: {
                    a: {
                      //   color: "#ffb300",
                      lineHeight: 1,
                      fontSize: 16,
                      align: "left",
                      padding: [5, 0, 0, 0]
                    },
                    c: {
                      fontSize: 22,
                      align: "left",
                      padding: [5, 0, 0, 0],
                      verticalAlign: "bottom"
                    },
                    e: {
                      fontSize: 16,
                      align: "left",
                      padding: [26, 0, 0, 0],
                      verticalAlign: "bottom"
                    },
                    hr: {
                      width: "110%",
                      backgroundColor: {
                        image: "./static/split_line.png"
                      },
                      height: 1,
                      lineHeight: 10
                    }
                  }
                }
              },
              labelLine: {
                normal: {
                  show: true,
                  length: 80 * scale,
                  //   length: 0,
                  length2: 20,
                  lineStyle: {
                    color: "#0b5263",
                    width: 2
                  }
                }
              },
              data: [
                {
                  value: 3215642,
                  name: "活动用户",
                  selected: true,
                  itemStyle: {
                    normal: {
                      color: "#60ccf9"
                    }
                  }
                },
                {
                  value: 2215642,
                  name: "注册用户",
                  itemStyle: {
                    normal: {
                      color: "#ffb300"
                    }
                  }
                }
              ]
            }
          ]
        });
      };

      upActiveReady();
    },
    // 7日用户注册手势
    onSevenReady(instance, echarts) {
      const that = this;
      that.insSeven = instance;
      that.echartsSeven = echarts;

      that.loadingSeven = false;
      const upSevenReady = function() {
        that.insSeven.setOption({
          grid: {
            top: 20
          },
          xAxis: {
            type: "category",
            data: [
              "2018-03-01",
              "2018-03-02",
              "2018-03-03",
              "2018-03-04",
              "2018-03-05",
              "2018-03-06",
              "2018-03-07"
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
            },
            axisLabel: {
              interval: 0
            },
            axisLabel: {
              rotate: 40
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

      upSevenReady();
    },
    // 各中烟注册用户占比
    onSortReady(instance, echarts) {
      const that = this;
      that.insSort = instance;
      that.echartsSort = echarts;

      that.loadingSort = false;
      const upSortReady = function() {
        that.insSort.setOption({
          series: [
            {
              name: "各市违法违规比例",
              type: "pie",
              radius: ["30%", "45%"],
              center: ["50%", "60%"],
              silent: true,
              minAngle: 35,
              color: ["#e86bff", "#00ffda", "#ffb400", "#fff600"],
              label: {
                normal: {
                  // formatter: "{a|{c}}\n{e|{b} {d}%}",
                  formatter: function(params) {
                    // console.log(params);

                    let vpercent = Util.tool.formatCash(params.value);

                    return "{a|" + vpercent + "}\n{e|" + params.name + " " + params.percent + "%}";
                  },
                  rich: {
                    a: {
                      //   color: "#ffb300",
                      lineHeight: 3,
                      fontSize: 24,
                      align: "left",
                      padding: [48, 0, 0, 0]
                    },
                    e: {
                      fontSize: 16,
                      lineHeight: 2,
                      align: "left",
                      padding: [0, 0, 10, 0],
                      verticalAlign: "bottom"
                    }
                  }
                }
              },
              labelLine: {
                normal: {
                  show: true,
                  length: 40,
                  //   length: 0,
                  length2: 20
                }
              },
              data: [
                { value: 322533, name: "吉林中烟" },
                { value: 322323, name: "陕西中烟" },
                { value: 334313, name: "安徽中烟" },
                { value: 133313, name: "云南中烟" }
              ]
            }
          ]
        });
      };

      upSortReady();
    }
  }
};
</script>
<style  lang="scss">
@import "../../assets/scss/partial/_variables";
</style>

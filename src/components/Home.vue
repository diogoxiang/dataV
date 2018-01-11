<template>
  <section class="container">
    <h1 class="title">云数据</h1>
    <!-- <p>{{ stime | fullDate}}</p> -->
    <a @click="doDialog">
      dialog
    </a>

    <a @click="showLoading">
      打开loading
    </a>
    <a @click="sendAjax">
      sendAjax
    </a>

    <a @click="showToast">showToast</a>

    <dio-dialog :config.sync="config"></dio-dialog>

    <!-- <div id="main_pie" style="width: 600px;height:400px;"></div> -->
      <div id="main_geo" style="width: 1000px;height:600px;"></div>
  </section>
</template>

<script>
import api from "../server/api";
import DioDialog from "./common/dialog";

import * as types from "../store/mutation-types";

import util from "./util";

// echarts global
import * as echarts from "echarts";
import * as chinaGeo from "../../static/echarts/china";

// 随机数据
function randomData() {
  return Math.round(Math.random() * 1000);
}

var geoCoordMap = {
  北京: [116.39737, 39.939502],
  天津: [117.133262, 39.256321],
  上海: [121.29, 31.14],
  重庆: [106.32485, 29.895013],
  河北: [114.336873, 38.21885],
  河南: [113.453802, 34.895028],
  云南: [102.599397, 25.248948],
  辽宁: [123.241164, 41.948112],
  黑龙江: [126.479088, 45.985284],
  湖南: [112.800698, 28.474291],
  安徽: [117.170056, 31.99595],
  山东: [116.912494, 36.812038],
  新疆: [87.476819, 43.894927],
  江苏: [118.715429, 32.246466],
  浙江: [120.040035, 30.350837],
  江西: [115.808656, 28.774611],
  湖北: [114.116105, 30.764814],
  广西: [108.265765, 23.020403],
  甘肃: [103.66644, 36.218003],
  山西: [112.349964, 38.044464],
  内蒙古: [111.614073, 40.951504],
  陕西: [108.780889, 34.408508],
  吉林: [125.228072, 43.894927],
  福建: [119.156964, 26.182279],
  贵州: [106.499624, 26.844365],
  广东: [113.233035, 23.224606],
  青海: [101.605943, 36.752842],
  西藏: [90.972306, 29.838888],
  四川: [103.924003, 30.796585],
  宁夏: [106.094884, 38.624116],
  海南: [110.179083, 19.921006],
  台湾: [121.36464, 25.248948],
  香港: [114.1529, 22.542716],
  澳门: [113.417008, 22.337477]
};

export default {
  name: "Home",
  components: {
    DioDialog
  },
  data() {
    return {
      stime: new Date(),
      config: {}
    };
  },
  mounted() {
    // this.$store.commit(types.TITLE, 'Login');
    console.log(geoCoordMap);
    // 饼状图
    // let mainPie = echarts.init(document.getElementById("main_pie"));

    // mainPie.setOption({
    //   series: {
    //     type: "pie",
    //     radius: ["50%", "70%"],
    //     data: [{ name: "A", value: 112 }, { name: "B", value: 2323 }, { name: "C", value: 1919 }]
    //   }
    // });
    // 地图
    let mainGeo = echarts.init(document.getElementById("main_geo"));
    mainGeo.showLoading();
    let geoOption = {
      title: {
        text: "扫码量布图",
        subtext: "模拟数据",
        left: "center",
        textStyle: {
          color: "#fff"
        }
      },
      backgroundColor: "#010b43",
      layoutCenter: ["30%", "30%"],
      tooltip: {
        trigger: "item"
      },
      // 数据
      // legend: {
      //   orient: 'vertical',
      //   left: 'left',
      //   data: ['扫码量']
      // },
      visualMap: {
        min: 0,
        max: 2500,
        left: "left",
        top: "bottom",
        text: ["高", "低"], // 文本，默认为数值文本
        calculable: true,
        textStyle: {
          color: "#fff"
        }
      },
      geo: {
        type: "map",
        map: "china",
        regions: [
          { name: "南海诸岛", value: 0, itemStyle: { normal: { opacity: 0, label: { show: false } } } }
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
    };

    setTimeout(() => {
      mainGeo.setOption(geoOption);
      mainGeo.hideLoading();
      // reload()
    }, 2000);

    function reload() {
      setInterval(function() {
        console.log("object");
        // mainGeo.dispatchAction({
        //   type: 'selectDataRange',
        //   // 选取 20 到 40 的值范围
        //   selected: [20, randomData()]
        // })
        let newOption = {
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
        };
        mainGeo.setOption(newOption);
      }, 2000);
    }

    //  ---
  },
  methods: {
    doDialog() {
      this.config = {
        visible: true,
        text: "确定要兑换吗？",
        sureText: "确定",
        cancelText: undefined,
        callback: () => {
          console.log("object");
          // let a = this.deleteUserInfo()
          // if (a) {
          //   this.setTip({
          //     text: '注销成功'
          //   })
          //   this.setMenu(false)
        }
      };
    },
    showLoading() {
      console.log("dd");
      // console.log(this.$store);

      // this.$store.commit(types.SET_LOADING, true);
    },
    showToast() {
      console.log("dd");
      // console.log(this.$store);

      // this.$store.commit(types.SET_TIP, { text: '加载成功' });

      // this.$store.dispatch("setTip", { text: "加载成功" });
    },
    sendAjax() {
      console.log("object");
      // this.$store.dispatch('setLoading', 'true')

      console.log(this.$store);
      this.axios
        .get(api.getlist, {
          params: {
            level: 1
          }
        })
        .then(response => {
          this.list = response.data;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

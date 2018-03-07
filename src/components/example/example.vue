<template>
    <div class="exampleDiv">
        <IEcharts
      :option="option"
      @ready="onReady"
    />
    </div>
</template>
<script>
import IEcharts from "../../util/echarts/full";
import Util from "../../util";
// --
// import * as echarts from "echarts";

// common
const doc = document;
const win = window;
// 随机数据
function randomData() {
  return Math.round(Math.random() * 1000);
}

export default {
  name: "example",
  components: {
    IEcharts
  },
  data() {
    // const that = this
    return {
      ins: null,
      echarts: null,
      loading: true,
      option: {
        title: {
          show: false
        },
        color: ["#fff78b", "#ffb402"]
      }
    };
  },
  mounted() {
    console.log(this);
  },
  methods: {
    onReady(instance, echarts) {
      const that = this;
      that.ins = instance;
      that.echarts = echarts;
      const updatePosition = function() {
        that.ins.setOption({
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
                  //   formatter: "{a|{c}}\n{e|{b} {d}%}",
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
      updatePosition();
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/partial/_variables";
.exampleDiv {
  width: 800px;
  height: 600px;
}
</style>
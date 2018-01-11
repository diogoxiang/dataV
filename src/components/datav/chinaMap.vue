<template>
  <div class="echarts">
    <h2><router-link to="/">Go Back</router-link></h2>
    
    <IEcharts
      :option="option"
      @ready="onReady"
      :loading="loading"
    />

 
  </div>
</template>


<script>
import IEcharts from "../../util/echarts/full";

export default {
  name: "Children",
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
          text: "Try Dragging these Points"
        }
      },
      stime: new Date(),
      config: {}
    };
  },
  mounted() {
    console.log("object");
  },
  methods: {
    onReady(instance, echarts) {
      const that = this;
      that.ins = instance;
      that.echarts = echarts;

      that.loading = false;
      //   console.log(that);
      //   console.log(instance);
      that.ins.setOption({
        series: {
          type: "pie",
          radius: ["50%", "70%"],
          data: [{ name: "A", value: 112 }, { name: "B", value: 2323 }, { name: "C", value: 1919 }]
        }
      });
      //   console.log(instance.setOption({}));
      console.log(that.ins.getWidth());
      //   console.log(echarts);
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.echarts {
  width: 800px;
  height: 800px;
  margin: 0 auto;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
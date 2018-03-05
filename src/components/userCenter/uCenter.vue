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

                        <div class="userMapContent">
                            userMapContent
                        </div>
 
                </div>
                 
                 <div class="column  is-6 userData">
                userDiv right
                </div>
            </div>
            
            <!-- footDIV -->
 
            <div class="footDiv is-clearfix">
                    1000
            </div>
            <!-- foot end -->
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

export default {
  name: "uCenter",
  components: { IEcharts },
  data() {
    return {
      config: 0,
      endVal: 2017
    };
  },
  mounted() {
    console.log(Util);
  },
  methods: {}
};
</script>
<style  lang="scss">
@import "../../assets/scss/partial/_variables";
</style>

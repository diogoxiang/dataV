<template>
  <section class="container">
    <h1 class="title">云南恭贺新喜</h1>
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

  </section>
</template>

<script>
import api from "../server/api";
import DioDialog from "./common/dialog";

import * as types from "../store/mutation-types";

import util from "./util";
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

<template>
  <div id="dio-dialog">
    <!--基本弹窗  -->
    <transition name="fade">
      <div v-if="config.visible">
        <div class="dialog-mask"></div>
        <div class="dialog">
          <div class="text">
            {{ config.text }}
          </div>
          <div class="btn-wrap">
            <a @click="sure" class="btn-sure">{{config.sureText}}</a>
            <a @click="close" v-if="config.cancelText != undefined ">取消</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
@import '../../assets/scss/partial/variables';
@import '../../assets/scss/common/dialog.scss';
.dialog {
  background: url('../../assets/img/dialog_bg.png');
  background-size: 100% 100%;
  min-height: 25rem;
  min-width: 70%;
  color: $color-font-white;
  padding: 3rem 3rem;
  font-size: 1.5rem;
  .text {
    min-height: 13rem;
    margin-top: 3rem;
    text-align: center;
    display: block;
  }
  .btn-wrap {
    line-height: 3rem;
    width: 80%;
    margin: 0 auto;
    background: url('../../assets/img/btn_bg.jpg');
    background-size: 100% 100%;
    text-align: center;
    a {
      color: $color-font-white;
      &:active {
        background: none
      }
    }
  }
}
</style>


<script>
export default {
  name: 'dio-dialog',
  props: {
    config: {
      type: Object,
      default: {
        visible: false,
        text: '',
        sureText: '确定',
        cancelText: '',
        callback: null
      }
    }
  }
  ,
  methods: {
    sure() {
      if (this.config.callback) {
        this.config.callback();
        this.close();
      }
    }
    ,
    close() {
      this.config.visible = false
    }
  }
}
</script>
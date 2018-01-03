<template>
    <div id="dio-tip">
        <transition name="fade">
            <div v-if="tipVisible" class="tip">
                <div class="tip-wrap">
                    <p>{{ tip.text }}</p>
                </div>
            </div>
        </transition>
    </div>
</template>
 

<script>
import Util from '../util'

export default {
    name: 'dio-tip',
    data() {
        return {
            tipVisible: false
        }
    },
    computed: {
        tip() {
            return this.$store.state.docState.tip
        }
    },
    watch: {
        tip: 'tipShow'
    },
    methods: {
        tipShow() {
            let self = this
            self.tipVisible = true
            setTimeout(function () {
                self.tipVisible = false
                if (self.tip.callback) {
                    self.tip.callback()
                }
            }, self.tip.time)
        }
    }
}
</script>

<style lang="scss" scoped>
// 阻止其他点击事件
.tip {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    width: 100%;
    height: 100%;
    .tip-wrap {
        box-sizing: border-box;
        position: fixed;
        left: 50%;
        top: 50%;
        width: 80%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, .7);
        text-align: center;
        color: #fff;

        border-radius: 0.5rem;
        line-height: 3;
        p {
            display: inline-block;
            line-height: 2;
        }
    }
}
</style>


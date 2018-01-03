
<template>
    <div id="dio-loading">
        <div v-if="vshow" class="loading-wrap">
            <!-- <i class="icon i-loading"></i> -->
            <img src="../../assets/img/loading.svg" alt="" class="i-img">
            <p class="i-text">正在加载...</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import "../../assets/scss/common/loading.scss";
</style>

<script>
import Util from '../util'
export default {
    name: 'dio-loading',
    data() {
        return {
            // vshow: 1
        }
    },
    computed: {
        vshow() {
            return this.$store.state.docState.loadingState
        }
    }
}
</script>

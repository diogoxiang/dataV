import {
    SET_DOC_MENU,
    SET_LOADING,
    SET_TIP
} from '../mutation-types'

import actions from '../actions/docActions'

const state = {
    // 保存第一页数据
    menuState: false,
    tip: {
        text: '',
        time: 2000,
        callback: null
    },
    loadingState: false
}



const mutations = {
    // 设置侧边栏显示状态
    [SET_DOC_MENU](state, tag) {
        state.menuState = tag
    },
    // 提示文字
    [SET_TIP](state, tip) {
        if (!tip.time) tip.time = 2000;
        state.tip = tip
    },
    // loading
    [SET_LOADING](state, loading) {
        state.loadingState = loading
    }
}

export default {
    state,
    mutations,
    actions
}
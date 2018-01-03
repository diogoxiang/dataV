import * as types from '../mutation-types'


// export const setTip = ({
//     dispatch
// }, tip) => {
//     if (!tip.time) tip.time = 2000 // 默认tip展现时间
//     dispatch(types.SET_TIP, tip)
// }
// export const setLoading = ({
//     dispatch
// }, state) => {
//     dispatch(types.SET_LOADING, state)
// }

export const actions = {
    // loading
    setLoading({
        commit
    }, state) {
        commit(types.SET_LOADING, state)
    },
    // toast显示
    setTip({
        commit
    }, tip) {
        if (!tip.time) tip.time = 2000;
        commit(types.SET_TIP, tip)
    }
}


export default actions
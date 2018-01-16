import {
    type,
    extend
} from './utils'
import {
    ruleFn
} from './rules'
import Vue from 'vue'


export default {
    name: "dio-validator",
    render(h) {
        const tagOptions = this.tagOptions || null
        return h(this.tag || 'span', {
            tagOptions
        }, this.$slots.default || [])
    },
    data() {
        return Object.freeze({
            initFormsData: {}
        })
    },
    props: {
        forms: {
            type: Array,
            required: true,
            'default': function () {
                return [
                    // {
                    //     key: '',//必须唯一
                    //     value: '',
                    //     rules: [
                    //         {
                    //             rule: 'required', tip: '请输入活动名称',
                    //         },
                    //         {
                    //             rule: (value, rule, item, cb) => {
                    //                 item.msg = ''
                    //                 item.timerId = setTimeout(() => {
                    //                     item.timerId = null
                    //                     cb(() => {
                    //                         item.state = 1
                    //                         item.msg = 'wahahahahh'
                    //                     })
                    //                 }, 1000)
                    //             }
                    //         }
                    //     ],//必须调用cb
                    //     resetCb(item, i){
                    //          if(item.timerId){  //clearTimeout
                    //              clearTimeout(item.timerId)
                    //              item.timerId = null
                    //          }
                    //     },//reset回调
                    //     errorCb(e, item, i){
                    //         console.log(e, item, i)
                    //     },//errorCb回调
                    //     state: 0,//0: 没有验证过, 1: 通过, 2: 不通过, 3: 验证中
                    //     msg: '',//提示信息
                    //     tip: '',//替代默认规则的提示信息
                    //     deep: false,//value是对象时候 true
                    // },
                ]
            }
        },
        tag: {
            type: String,
            'default': 'span'
        },
        tagOptions: {
            type: Object
        },
    },
    watch: {
        //TODO
    },
    created() {
        //TODO

    },
    destroyed() {
        //TODO
    },
    methods: {
        //TODO
    }

}
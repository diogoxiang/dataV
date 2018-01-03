<template>
    <div id="Fromval">
        <div class="container">
            <h1>
                vue-validator例子
            </h1>
            <dio-validator ref="leoForm" tag="div">
                <h1>表单1(动态添加表单)</h1>
            </dio-validator>
        </div>
    </div>
</template>

<script>
import validator from "./util/validator/validator"
export default {
    name: 'Fromval',
    components: {
        'dio-validator': validator,
    },
    data() {
        return {
            name: ""
        }
    }
}
</script>
 
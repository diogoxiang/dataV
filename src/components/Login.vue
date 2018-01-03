<template>
    <div class="container">
    
        login
    
        <button @click="getRepository()"> getRepository</button>
        <button @click="login()"> Login</button>
        <ol>
            <li v-for="(val, key) in list">{{key}}-{{ val }}</li>
        </ol>
    </div>
</template>

 <script type="application/ecmascript">
import api from '../server/api'
import * as types from '../store/mutation-types'
export default {
    name: 'Login',
    data() {
        return {
            msg: '',
            password: '123213',
            list: []
        }
    },
    mounted() {
        this.$store.commit(types.TITLE, 'Login');
    },
    methods: {
        login() {
            //TODO 登录方法
            if (this.password) {
                this.$store.commit(types.LOGIN, this.password)
                let redirect = decodeURIComponent(this.$route.query.redirect || '/');
                this.$router.push({
                    path: redirect
                })
            }
        },
        getRepository() {
            let params = {
                sort: 'updated'
            }
            this.axios.get(api.repo_list, params)
                .then(response => {
                    this.list = response.data;
                })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss' rel="stylesheet/scss" type="text/css">
.login-form {
    width: 400px;
    margin: 50px auto;
}
</style>
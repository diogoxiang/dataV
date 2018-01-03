<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Store</h1>
        <div v-if="loading">
          Loading...
        </div>
        <div v-else>
          <h2 class="subtitle">Friends</h2>
          <div class="tags has-addons">
            <span class="tag">Number of Friends</span>
            <span class="tag is-info">{{ friends.length }}</span>
          </div>
          <ol>
            <li v-for="f in friends">{{ f.name }}</li>
          </ol>
          <button class="button is-warning" v-on:click="addMoreFriends()">
            Add more friends
          </button>
        </div>
        <div>
          <button class="button is-warning" v-on:click="doconlog()" ref="abc">kwg</button>
        </div>
        <!-- <div class="imglist">
                                  <img v-lazy="imgUrl" />
                                  <img v-lazy="imgUrl" />
                                  <img v-lazy="imgUrl" />
                                  <img v-lazy="imgUrl" />
                                  <img v-lazy="imgUrl" />
                                  <img v-lazy="imgUrl" />
                                </div>
                           -->
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  name: 'Store',
  metaInfo: {

    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Default Title',
    // all titles will be injected into this template
    titleTemplate: '%s | My Awesome Webapp'
  },
  created() {
    this.$store.dispatch('getFriends')
      .then(_ => {
        this.$data.loading = false
      })


    // vueResponse 用法
    // this.$http.get('/api/someUrl').then(response => {

    //   // get body data
    //   // this.someData = response.body;
    //   console.log(200);

    // }, response => {
    //   // error callback
    //   console.log(301);
    // });
  },

  data() {
    return {
      loading: true,
      name: "",
      someDate: new Date().getTime(),
      imgUrl: "http://www.scfood.net/uploads/attachments/2013-07-08/20130708100742_75175.png"
    }
  },
  computed: {
    friends() {
      return this.$store.getters.friends
    }
  },

  methods: {
    addMoreFriends() {
      this.$store.dispatch('addMoreFriends')
    },

    doconlog() {
      this.$store.dispatch('editTitle')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imglist {
  background: black
}
</style>

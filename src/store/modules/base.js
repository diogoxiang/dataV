import * as types from '../mutation-types'

const state = {
  friends: [],
  user: {}, //用户数据
  token: null, //token
  title: '',
  loading: false
}

const mutations = {
  [types.GET_FRIENDS](state, {
    friends
  }) {
    state.friends = friends
  },

  [types.ADD_FRIENDS](state, {
    friend
  }) {
    state.friends.push(friend)
  },

  // [types.GET_FRIENDS]: (state, friends) => {
  //   state.friends = friends
  // },
  // [types.ADD_FRIENDS]: (state, friend) => {
  //   state.friends.push(friend)
  // },
  [types.LOGIN]: (state, data) => {
    localStorage.setItem('token', data);
    state.token = data;
  },
  [types.TITLE]: (state, data) => {
    state.title = data;
  },
  [types.LOGOUT]: (state) => {
    localStorage.removeItem('token');
    state.token = null
  },
  [types.SHOW_LOADING]: (state) => {
    state.loading = true
  },
  [types.HIDE_LOADING]: (state) => {
    state.loading = false
  }

}

const actions = {
  getFriends({
    commit
  }) {
    return new Promise((resolve, reject) => {
      let friends = [{
        name: 'KIM'
      }, {
        name: 'JO'
      }]

      setTimeout(() => {
        commit(types.GET_FRIENDS, {
          friends
        })

        resolve(friends)
      }, 1000)
    })
  },

  addMoreFriends({
    commit
  }) {
    let friends = [{
      name: 'JANG'
    }, {
      name: 'PARK'
    }, {
      name: 'YUM'
    }, {
      name: 'JEONG'
    }]

    commit(types.ADD_FRIENDS, {
      friend: friends[Math.ceil(Math.random() * 4) - 1]
    })
  },

  editTitle({
    commit
  }) {

    commit(types.TITLE, "newTitle")
  }



}

const getters = {
  friends: state => state.friends,
  token: state => state.token,
  title: state => state.title,
  loading: state => state.loading
}

export default {
  state,
  mutations,
  getters,
  actions
}
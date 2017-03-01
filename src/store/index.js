import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentChoose: {},
    contentIndex: 0,
    chatContents: [
      {
        time: '9:50',
        from: 0,
        avatar: '//localhost:3000/img/user/bu.jpg',
        username: '不觉细雨',
        message: '怎么了'
      },
      {
        time: '9:52',
        from: 1,
        avatar: '//localhost:3000/img/user/xi.jpg',
        username: '方圆',
        message: '没事'
      }
    ],
    currentContact: {},
    contact: {
      id: 'undrizzle',
      username: '不觉细雨',
      sex: 'male',
      region: '浙江 杭州',
      avatar: '//localhost:3000/img/user/bu.jpg',
      signature: '母的鸡遇上公的鸡恰恰好生小鸡'
    }
  },

  actions: {


  },

  mutations: {
    SET_USER: (state, { user }) => {
      Vue.set(state.users, user.id, user)
    },

    CHOOSE_CONTACT: (state, item) => {
      state.currentChoose = item
    },

    CLICK_CONTACT: (state, item) => {
      state.contentIndex = item
    },

    REGISTER_SUCCESS: (state, item) => {
      state.contact.id = item
    },

    OPEN_CHAT: (state, item) => {
      state.contentIndex = 0
      state.currentContact.members = item
    }
  },

  getters: {

  }
})

export default store

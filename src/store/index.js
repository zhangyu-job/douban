import Vue from 'vue'
import Vuex from 'vuex'
import jsonp from 'jsonp'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存放公共数据的地方
    title: '', // 当前的标题
    list: [], // 当前的电影列表
    detail: null // 详情的数据
  },
  mutations: {
    // 用来更新state的title和list
    // state是当前的状态对象  payload提交mutation传过来的参数
    updateListAndTitle (state, payload) {
      // 直接对state的数据进行赋值即可
      state.title = payload.title
      state.list = payload.list
    },
    // 专门更新detail数据
    updateDetail (state, payload) {
      state.title = payload.title
      state.detail = payload.detail
    }
  },
  // action可以作异步请求
  actions: {
    getList (store, type) {
      // 请求豆瓣数据
      jsonp(`http://api.douban.com/v2/movie/${type}?apikey=0df993c66c0c636e29ecbb5344252a4a`, function (err, data) {
        if (err) return false
        console.log(data)
        // 如果action中的数据想要改state  必须通过mutations
        store.commit('updateListAndTitle', {
          title: data.title,
          list: data.subjects
        })
      })
    },
    // 定义一个action获取详情数据
    getDetail (store, id) {
      //
      jsonp(`http://api.douban.com/v2/movie/subject/${id}?apikey=0df993c66c0c636e29ecbb5344252a4a`, function (err, data) {
        if (err) return false
        console.log(data)
        store.commit('updateDetail', {
          title: data.title,
          detail: data
        })
      })
    }
  },

  modules: {
  }
})

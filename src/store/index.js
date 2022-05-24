import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Datas: [
      {
        id: 1,
        title: 'Nguyen Van A'
      }
    ]
  },
  getters: {
  },
  mutations: {
    setDatas: (state, Datas) => (state.Datas = Datas),
    addDatas: (state, Data) => state.Datas.unshift(Data),
    removeDatas: (state, id) => (state.Datas = state.Datas.filter(Data => Data.id !== id))
  },
  actions: {
    async fetchDatas ({ commit }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      commit('setDatas', response.data)
    },
    async createDatas ({ commit }, title) {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: true })
      commit('addDatas', response.data)
    },
    async deleteDatas ({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      commit('removeDatas', id)
    }
  },
  modules: {
  }
})

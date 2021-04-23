import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    joke: "This is a joke"
  },
  mutations: {
    updateJoke: function (state, data) {
      state.joke = data;
    }
  },
  actions: {
  },
  getters: {
    normalJoke: function (state) {
      return state.joke;
    },
    
    snakeJoke: function (state) {
      return state.joke.replaceAll(" ", "_");
    },
    
    loudJoke: function (state) {
      return state.joke.toUpperCase();
    },
  }
})

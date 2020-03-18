import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import {public_key} from '@/marvel'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    character: [],
    url: '',
    loading: true
  },
  mutations: {
    getCharacters(state) {
      state.loading = true;
      state.characters = []
      axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`)
      .then((result) => {
        console.log(result)
        result.data.data.results.forEach((item) => {
          console.log(item)
          state.characters.push(item)
        })
        state.loading = false;
      }).catch(err => {
        console.log(err)
      })
    },
    getCharacter(state, id) {
      state.loading = true;
      state.character = []
      // state.url = ''
      axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?apikey=${public_key}`)
      .then((result) => {
        console.log(result)
        result.data.data.results.forEach((item) => {
          state.character.push(item)
          console.log(item.thumbnail)
          state.url = `${item.thumbnail.path}/`
          console.log(state.url)
        })
        state.loading = false;
      }).catch(err => {
        console.log(err)
      })
    },
    changeLoadingState(state, loading) {
      state.loading = loading
    }
  },
  actions: {
    getCharacters: context => {
      context.commit('getCharacters')
    },
    getCharacter(context, id) {
      context.commit('getCharacter', id)
    }
  },
  modules: {
  }
})

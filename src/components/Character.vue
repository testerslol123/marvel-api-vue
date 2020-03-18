<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div class="flex-container" v-else>
      <div class="flex" v-for="char in character" :key="char">
        <h3>{{char.name}}</h3>
        <p>{{char.description}}</p>
      </div>
      <div class="flex2">
        <img :src="url" alt="marvel" class="char-img">
      </div>
    </div>
    <router-link to="/">
      <button type="button" name="button" class="btn-back">Back</button>
    </router-link>
  </div>
</template>

<script>
import {public_key, secret_key} from '../marvel'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Character',
  data() {
    return {
      url: '',
      size: 'standard_large.jpg'
    }
  },
  mounted() {
    this.$store.dispatch('getCharacter', this.$route.params.id)
    this.getImage()
  },
  computed: {
    ...mapState({
      character: state => state.character,
      preUrl: state => state.url,
      loading: state => state.loading
    })
  },
  methods: {
    getImage: function() {
      console.log('im being called')
      console.log(this.preUrl)
      this.url = `${this.preUrl}${this.size}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .flex-container {
    margin: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flex {
    flex: 50%;
    text-align: right;
  }

  .flex2 {
    flex: 50%;
  }

  .char-img {
    width: 50%;
    border-radius: 10px;
  }

  .btn-back {
    width: 200px;
    padding: 15px;
    border-radius: 25px;
    background-color: #f2f2f2;
    background: transparent;
    font-size: 20px;
    cursor: pointer;
  }
</style>

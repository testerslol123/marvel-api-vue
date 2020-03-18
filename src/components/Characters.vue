<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div class="card-container">
      <div class="card" v-for="character in characters" :key="character">
        <h3>{{character.name}}</h3>
        <router-link :to="{name:'character', params: {id: character.id}}">
          <button class="btn-view" type="button" name="button">
            View
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Characters',
  props: {
    msg: String
  },
  mounted() {
    this.$store.dispatch('getCharacters')
    console.log(this.characters)
  },
  computed: {
    ...mapState({
      characters: state => state.characters,
      loading: state => state.loading
    })
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr) );
    grid-gap: 10px;
  }

  .card {
    text-align: center;
    background-color: #333;
    min-height: 200px;
  }

  .card h3 {
    color: white;
  }

  .btn-view {
    padding: 10px;
    margin-top: 50px;
    border-radius: 15px;
    width: 120px;
    background-color: transparent;
    color: white;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
  }
</style>

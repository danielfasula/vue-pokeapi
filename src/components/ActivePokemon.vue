<template>
  <div class="col-6 text-center">
    <h2 class="mt-3">Active Pokemon</h2>
    <div v-if="state.activePokemon.types">
      <h4 class="text-capitalize">
        {{ state.activePokemon.name }}
      </h4>
      <h5 class="text-capitalize">Type: {{ checkTyping() }}</h5>
      <div v-if="state.activePokemon.sprites">
        <img :src="state.activePokemon.sprites.front_default" alt="" />
        <img :src="state.activePokemon.sprites.front_shiny" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'ActivePokemon',
  props: [],
  setup() {
    const state = reactive({
      activePokemon: computed(() => AppState.activePokemon)
    })
    return {
      state,
      checkTyping() {
        if (state.activePokemon.types.length > 1) {
          return state.activePokemon.types[0].type.name + ' / ' + state.activePokemon.types[1].type.name
        }
        return state.activePokemon.types[0].type.name
      }
    }
  }
}
</script>

<style scoped>
img {
  height: 30vh;
}
</style>

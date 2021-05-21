<template>
  <div class="col-6 text-center">
    <h2 class="mt-3">Active Pokemon</h2>
    <div
      class="row d-flex justify-content-center h-75"
      v-if="state.activePokemon.types"
    >
      <div class="col-12 mt-5">
        <h4 class="text-capitalize mt-5">
          {{ state.activePokemon.name }}
        </h4>
        <h5 class="text-capitalize mt-4">Type: {{ checkTyping() }}</h5>
      </div>
      <div class="col-12" v-if="state.activePokemon.sprites">
        <!-- <img :src="state.activePokemon.sprites.front_default" alt="" /> -->
        <img
          class="sprite"
          :src="state.activePokemon.sprites.front_shiny"
          alt=""
        />
      </div>
      <div class="col-12 d-flex justify-content-center">
        <h5 class="align-self-end mr-2">Catch It!</h5>
        <img class="" height="35" src="../assets/img/pokeball.png" alt="" />
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
.sprite {
  height: 30vh;
}
</style>

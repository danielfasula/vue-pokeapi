<template>
  <div class="col-3 text-center">
    <h2 class="mt-3">Pokedex</h2>
    <ul class="mt-4">
      <li
        class="text-capitalize mt-1"
        v-for="pokemon in state.pokedex"
        :key="pokemon.name"
        @click="setActivePokemon(pokemon.url)"
      >
        {{ pokemon.name }}
      </li>
    </ul>
    <div class="row mt-4">
      <div class="col d-flex justify-content-center">
        <!-- NOTE figure out how to disable button when no prev or next -->
        <button class="mr-4" @click="prev">PREV</button>
        <button @click="next">NEXT</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { pokemonService } from '../services/PokemonService'
import { logger } from '../utils/Logger'

export default {
  name: 'Pokedex',
  props: [],
  setup() {
    const state = reactive({
      pokedex: computed(() => AppState.Pokedex),
      prev: computed(() => AppState.prev),
      next: computed(() => AppState.next)
    })
    return {
      state,
      setActivePokemon(pokemon) {
        pokemonService.setActivePokemon(pokemon)
      },
      prev() {
        // pokemonService.prev()
        logger.log('This function does not work yet, sorry!')
      },
      next() {
        pokemonService.next()
      }
    }
  }
}
</script>

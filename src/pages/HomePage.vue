<template>
  <div class="container-fluid">
    <div class="row w-100 d-flex justify-content-center">
      <Pokedex />
      <ActivePokemon />
      <MyPokemon />
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { pokemonService } from '../services/PokemonService'
export default {
  name: 'Home',
  setup() {
    onMounted(async () => {
      await pokemonService.getPokedex()
    })
    return {
    }
  }
}
</script>

<style scoped lang="scss">
</style>

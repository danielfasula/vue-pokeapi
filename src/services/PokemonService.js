import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { pokeApi } from './AxiosService'

class PokemonService {
  async getPokedex() {
    try {
      const res = await pokeApi.get('pokemon')
      AppState.Pokedex = res.data.results
      AppState.prev = res.data.prev === undefined ? null : res.data.prev
      AppState.next = res.data.next === undefined ? null : res.data.next
      // logger.log('now', res.data)
      // logger.log('prev', AppState.prev)
      // logger.log('next', AppState.next)
    } catch (error) {
      logger.log(error)
    }
  }

  async setActivePokemon(url) {
    const res = await pokeApi.get(url)
    AppState.activePokemon = res.data
    logger.log(res.data)
  }

  async next() {
    try {
      const res = await pokeApi.get(AppState.next)
      AppState.Pokedex = res.data.results
      AppState.prev = res.data.prev
      AppState.next = res.data.next
    } catch (error) {
      logger.log(error)
    }
  }

  // async prev() {
  //   try {
  //     const res = await pokeApi.get(AppState.prev)
  //     AppState.Pokedex = res.data.results
  //     AppState.prev = res.data.prev
  //     AppState.next = res.data.next
  //   } catch (error) {
  //     logger.log(error)
  //   }
  // }
}

export const pokemonService = new PokemonService()

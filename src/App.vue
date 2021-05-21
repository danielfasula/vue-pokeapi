<template>
  <header>
    <nav class="navbar navbar-dark navbar-expand">
      <a class="navbar-brand d-flex">
        <img
          src="./assets/img/pokeball.png"
          width="50"
          height="50"
          alt=""
          loading="lazy"
        />
        <h2 class="ml-3 mt-2">GOTTA CATCH EM ALL!</h2>
      </a>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
a > h2 {
  color: #ffcc01;
}
</style>

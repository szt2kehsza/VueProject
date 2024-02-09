<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Bolt</RouterLink> &nbsp;|&nbsp;
        <RouterLink to="/kosar">Kosár</RouterLink> &nbsp;|&nbsp;
        <RouterLink to="/ujtermek">Új termék</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

<style scoped>
</style>

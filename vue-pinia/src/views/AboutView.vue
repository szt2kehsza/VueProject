<script setup>
import { useSzinhazStore } from '@/stores/storeSzinhaz'
const storeSzinhaz = useSzinhazStore()

</script>
<template>
  <div class="szinhazak">
    <h1>Választott színház:</h1>
    <h2 v-if="storeSzinhaz.selectedSzinhaz">{{ storeSzinhaz.selectedSzinhaz.neve }}</h2>
    <ul v-if="storeSzinhaz.selectedSzinhaz">
      <li v-for="eloadas in storeSzinhaz.selectedSzinhaz.eloadasok">
        <a :href="eloadas.url" target="_blank">{{ eloadas.cim }}</a>
      </li>
    </ul>
  </div>
</template>

<style>
.szinhazak{
  margin-top: 20px;
  
}

.h1{
  padding: 10px;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
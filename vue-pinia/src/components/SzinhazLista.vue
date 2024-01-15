<template>
  <div>
    <!-- <h2 v-if="selectedSzinhaz">{{ selectedSzinhaz.neve }}</h2>
    <ul v-if="selectedSzinhaz">
      <li v-for="eloadas in selectedSzinhaz.eloadasok">
        <a :href="eloadas.url" target="_blank">{{ eloadas.cim }}</a>
      </li>
    </ul> -->
    <h2 v-if="selectedSzinhaz">{{ selectedSzinhaz.neve }}</h2>
      <div v-if="selectedSzinhaz" v-for="eloadas in selectedSzinhaz.eloadasok" class="card-container">
        <div class="card-body">
          <h3>{{ eloadas.cim }}</h3>
          <br>
          <a href="eloadas.url" target="_blank">További részletek</a>
        </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useSzinhazStore } from '@/stores/storeSzinhaz'

export default {
  setup() {
    const storeSzinhaz = useSzinhazStore()
    const selectedSzinhaz = ref(null)

    watch(
      () => storeSzinhaz.selectedSzinhaz,
      (newValue) => {
        selectedSzinhaz.value = newValue
      }
    )

    return { selectedSzinhaz }
  },
}
</script>

<style>
.card-container{
  display: flex;
  flex-direction: row;
  margin-top: 20px;

}

.card-body{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px;
}
</style>

<template>
  <div>
    <h2 v-if="selectedSzinhaz">{{ selectedSzinhaz.neve }}</h2>
      <div v-if="selectedSzinhaz" v-for="eloadas in selectedSzinhaz.eloadasok" class="card-container">
        <div class="card-body">
          <h3>{{ eloadas.cim }}</h3>
          <a :href="eloadas.url" target="_blank">További részletek</a>
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

<style scoped>
.card-container {
  display: inline-block;
  margin: 50px 20px 20px 0; 
  border: 2px solid rgb(59, 43, 13);
  width: 370px;
  height: 200px;
  text-align: center;
  background-color: rgb(14, 12, 6);
}

.card-body {
  margin: 10px;
}

.card-body h3{
  font-size: 20px;
  font-weight: bold;
}

.card-body a {
  font-size: 13px;
}
</style>

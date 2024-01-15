<template>
  <div>
    <h2 v-if="selectedSzinhaz">{{ selectedSzinhaz.neve }}</h2>
    <ul v-if="selectedSzinhaz">
      <li v-for="eloadas in selectedSzinhaz.eloadasok">
        <a :href="eloadas.url" target="_blank">{{ eloadas.cim }}</a>
      </li>
    </ul>
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

<template>
  <div class="szinhazak">
    <h1>Válassz egy színházat:</h1>
    <select v-model="selectedSzinhaz" @click="valasztSzinhaz">
      <option v-for="szinhaz in szinhazak" :value="szinhaz">{{ szinhaz.neve }}</option>
    </select>

    <SzinhazLista />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useSzinhazStore } from '@/stores/storeSzinhaz'
import SzinhazLista from '@/components/SzinhazLista.vue'

export default {
  components: {
    SzinhazLista,
  },
  setup() {
    const storeSzinhaz = useSzinhazStore()
    const szinhazak = ref([
      {
        neve: 'Vígszínház',
        eloadasok: [
          { cim: 'A dzsungel könyve', url: 'https://www.jegy.hu/program/a-dzsungel-konyve-81963' },
          { cim: 'Barátom, Harvey', url: 'https://www.jegy.hu/program/baratom-harvey-131921' },
          { cim: 'Béranyák', url: 'https://www.jegy.hu/program/beranyak-139745' },
        ],
      },
      {
        neve: 'Thália Színház',
        eloadasok: [
          { cim: 'Legszebb férfikor', url: 'https://thalia.hu/eloadasok/legszebb-ferfikor/' },
          { cim: 'Bolha a fülbe', url: 'https://thalia.hu/eloadasok/bolha-a-fulbe/' },
          { cim: 'Rettenetes szülők', url: 'https://thalia.hu/eloadasok/jean-cocteau-rettenetes-szulok/' },
          { cim: 'A nagy kézrablás', url: 'https://thalia.hu/eloadasok/a-nagy-kezrablas-2/' },
        ],
      },
      {
        neve: 'Centrál Színház',
        eloadasok: [
          { cim: 'Ma este felnövünk', url: 'https://www.centralszinhaz.hu/eloadasok/ma_este_felnovunk' },
          { cim: 'Házassági leckék középhaladóknak', url: 'https://www.centralszinhaz.hu/eloadasok/hazassagi_leckek_kozephaladoknak' },
        ],
      },
    ])

    const selectedSzinhaz = ref(null)

    const valasztSzinhaz = () => {
      storeSzinhaz.setSelectedSzinhaz(selectedSzinhaz.value)
    }

    return { szinhazak, selectedSzinhaz, valasztSzinhaz }
  },
}
</script>

<style scoped>
.szinhazak{
  margin-top: 20px;
  
}

.h1{
  padding: 10px;
}
</style>

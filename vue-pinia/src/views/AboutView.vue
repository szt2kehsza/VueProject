<script setup>
import { useSzinhazStore } from '@/stores/storeSzinhaz'
const storeSzinhaz = useSzinhazStore()

</script>
<template>
  <div class="szinhazak">
    <h1>Válassztott színház:</h1>
    <h2 v-if="storeSzinhaz.selectedSzinhaz">{{ storeSzinhaz.selectedSzinhaz.neve }}</h2>
    <div v-if="storeSzinhaz.selectedSzinhaz" v-for="eloadas in storeSzinhaz.selectedSzinhaz.eloadasok" class="card-container">
      <div class="card-body">
        <h3>{{ eloadas.cim }}</h3>
        <a :href="eloadas.url" target="_blank">További részletek</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.szinhazak{
  margin-top: 20px;
  
}
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

h2{
  margin-top: 20px;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
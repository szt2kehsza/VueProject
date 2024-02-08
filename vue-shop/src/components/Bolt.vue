<script setup>
  import axios from 'axios';
  import {ref, onMounted} from 'vue';
  const products = ref([])

  onMounted(()=>{
    axios.get('http://localhost:3000/products')
    .then(resp => products.value = resp.data);
  })

  const addToCard = (p) => {
    let tombMerete = products.value.length;
    let id = Number(products.value[tombMerete - 1].id); 
    let d = {id: p.id, name : p.name, price:p.price};
    console.log(d);    
    fetch("http://localhost:3000/cart",
    {
      method : 'post',
      body : JSON.stringify(d), 
      headers : {
        "Content-type" : "application/json"
      }
    })

  } 

</script>

<template>
  <h1>Bolt</h1>
  <div class="main">
    <div v-for="p in products" class="card">
      <img src="./icons/no-image.png" alt="nokep" id="kep">
      <div class="content-card">
        <h3> Név: {{p.name}} </h3>
        <p> Ár: {{p.price}} </p>
        <button class="button" @click="">Részletek</button>
        <button class="button" @click="addToCard(p)">Kosárba</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#kep{
  width: 280px;
}
.card{
  display: flex;
  width: 300px;
  flex-direction: column;
  align-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 10px;
  margin: 10px;
  padding: 15px;
}

.main{
  display: flex;
  display: row;
  flex-wrap: wrap;

}

</style>

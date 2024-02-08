<script setup>
  import { onMounted, ref  } from 'vue';
  const names = ref();
  const name = ref("");
  const price = ref("");

  const save = () => {
    console.log(name.value);
    console.log(price.value);
    let tombMerete = names.value.length;
    let id = Number(names.value[tombMerete - 1].id); 
    let d = {id: name.id, name : name.value, price: price.value};
    console.log(d);    
    fetch("http://localhost:3000/products",
    {
      method : 'post',
      body : JSON.stringify(d), 
      headers : {
        "Content-type" : "application/json"
      }
    })
    .then(() => letoltes())
    alert("Sikeres mentés!")
  }
  const letoltes = () => {
    fetch('http://localhost:3000/products')
    .then(resp => resp.json())
    .then(json => {
      names.value = json;
      console.log(names.value);
    })
  }

  onMounted(() => {
    letoltes();
  }) 


</script>

<template>
    <h1>Új termék felvétele</h1>
    <div>
      <div>
        <label>Terméknév:</label>
        <input type="text" v-model="name" placeholder="Új termék neve:">
      </div>
      <div>
        <label>Ára:</label>
        <input type="text" v-model="price" placeholder="Új termék ára:">
      </div>
      <button @click="save()">Mentés</button>
    </div>

</template>

<style scoped>
</style>

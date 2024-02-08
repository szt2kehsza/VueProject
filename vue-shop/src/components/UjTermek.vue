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
    <div class="termekMainDiv">
      <div class="termekDiv">
        <label class="termekInput">Terméknév:</label>
        <input type="text" v-model="name" placeholder="Új termék neve:">
      </div>
      <div class="termekDiv">
        <label class="termekInput">Ára:</label>
        <input class="input" type="text" v-model="price" placeholder="Új termék ára:">
      </div>
      <button class="button" @click="save()">Mentés</button>
    </div>

</template>

<style scoped>
.termekMainDiv{
  padding: 10px;
  width: 300px;
  border: 2px solid black;
}
.termekDiv{
  margin: 5px;
  padding: 5px;
}
.input{
  margin-left: 46.6px;
}

.termekInput{
  padding: 5px;
  margin-right: 5px;
}
.button{
  margin-top: 20px;
}
</style>

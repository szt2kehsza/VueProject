<script setup>
  import axios from 'axios';
  import {ref, onMounted} from 'vue';
  const carts = ref();

  onMounted(()=>{
    axios.get('http://localhost:3000/cart')
    .then(resp => carts.value = resp.data);

    letoltes();
  })

  const letoltes = () => {
    fetch('http://localhost:3000/cart')
    .then(resp => resp.json())
    .then(json => {
      carts.value = json;
      console.log(carts.value);
    })
  }

  const del = (id) =>{
    console.log(id)
    fetch("http://localhost:3000/cart/" + id,{
      method : "delete",
    })
    .then(() => letoltes())
  }


</script>

<template>
  <h1>Kosár</h1>

  <table>
    <tr v-for="c in carts" key="c.id">
      <td class="tableId"> {{ c.id }} </td>
      <td>  {{c.name}}  </td>
      <td> {{ c.price }}  </td>
      <td> <span @click="del(c.id)">❌</span> </td>
    </tr>
  </table>



</template>

<style scoped>
table, td{
  border: 1px solid;
  border-collapse: collapse;
  padding: 5px;
}
.tableId{
  text-align: center;
}
span:hover{
  cursor: pointer;
}
</style>
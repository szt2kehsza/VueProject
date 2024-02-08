<script setup>
  import axios from 'axios';
  import {ref, onMounted} from 'vue';

  const carts = ref();
  const successMessage = ref('');

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

  const Rendeles = async () => {
    await Promise.all(carts.value.map(item => {
      return fetch(`http://localhost:3000/cart/${item.id}`, {
        method: 'delete',
      });
    }));

    letoltes();
    successMessage.value = 'Sikeres rendelés!';

    setTimeout(() => {
      successMessage.value = '';
    }, 3000);

  }

</script>

<template>
  <h1>Kosár</h1>

  <table>
    <tr v-for="c in carts" :key="c.id">
      <td class="tableId"> {{ c.id }} </td>
      <td>  {{c.name}}  </td>
      <td> {{ c.price }}  </td>
      <!-- <td><span>{{ c.quantity }}</span></td>
      <td>  
        <div class="btn">
          <button @click="kivon(c.id)">-</button> &nbsp;
          <button @click="add(c.id)">+</button>
        </div>     
      </td> -->
      <td> <span class="del" @click="del(c.id)">❌</span> </td>
    </tr>
  </table>

  <button class="RendelesBtn" @click="Rendeles()">Rendelés</button>

  <div v-if="successMessage" class="success-message">
    {{ successMessage }}
  </div>

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
.del:hover{
  cursor: pointer;
}

.RendelesBtn{
  margin-top: 50px;
  margin-bottom: 10px;
}
</style>
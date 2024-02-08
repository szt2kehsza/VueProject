<script setup>
  import axios from 'axios';
  import {ref, onMounted} from 'vue';
  const names = ref([]);
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

  const incQuantity = (id) => {
    const productIndex = carts.value.findIndex(item => item.id === id);
    if (productIndex !== -1) {
      carts.value[productIndex].quantity++;
      updateQuantity(id, carts.value[productIndex].quantity);
    }
  }

  const decQuantity = (id) => {
    const productIndex = carts.value.findIndex(item => item.id === id);
    if (productIndex !== -1) {
      if (carts.value[productIndex].quantity === 1) {
        del(id);
      } else {
        carts.value[productIndex].quantity = Math.max(carts.value[productIndex].quantity - 1, 0);
        updateQuantity(id, carts.value[productIndex].quantity);
      }
    }
  }



  const updateQuantity = (id, quantity) => {
    fetch(`http://localhost:3000/cart/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ quantity })
    }).then(() => {
      console.log('A kosárban frissítve lett a termék mennyisége.');
    }).catch(error => {
      console.error('A mennyiség frissítése közben hiba történt:', error);
    });
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

  <div>
    <table>
      <tr v-for="c in carts" :key="c.id">
        <td class="tableId"> {{ c.id }} </td>
        <td>  {{c.name}}  </td>
        <td> {{ c.price }}  </td>
        <td>
          {{ c.quantity }}
          <button @click="decQuantity(c.id)">-</button>
          <button @click="incQuantity(c.id)">+</button>
        </td>
        <td> <span class="del" @click="del(c.id)">❌</span> </td>
      </tr>
    </table>

    <button class="RendelesBtn" @click="Rendeles()">Rendelés</button>

    <div v-if="successMessage" class="success-message">
      {{ successMessage }}
    </div>
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
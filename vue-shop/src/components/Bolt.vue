<script setup>
  import axios from 'axios';
  import {ref, onMounted} from 'vue';
  const selectedProduct = ref(null);
  const showModal = ref(false);
  const products = ref([]);

  onMounted(()=>{
    axios.get('http://localhost:3000/products')
    .then(resp => products.value = resp.data);
  })

  const addToCard = async  (p) => {
    const cartResponse = await fetch('http://localhost:3000/cart');
    const cartData = await cartResponse.json();
    const existingProduct = cartData.find(item => item.id === p.id);
    if (existingProduct) {
      alert('A kosárban már van ilyen termék');
      return;
    }
    const newProduct = { id: p.id, name: p.name, price: p.price, quantity: "1"};
    fetch('http://localhost:3000/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    }).then(() => {
      alert('Hozzáadva a termék a kosárhoz.');
    }).catch(error => {
      console.error('A termék hozzáadása közben hiba keletkezett:', error);
    });

  } 

  const showDetails = (product) => {
    selectedProduct.value = product;
    showModal.value = true;
  }

  const hideModal = () => {
    showModal.value = false;
  }

</script>

<template>
  <h1 class="cim">Bolt</h1>
  <div class="main">
    <div v-for="p in products" class="card">
      <img src="./icons/no-image.png" alt="nokep" id="kep">
      <div class="content-card">
        <h3> Név: {{p.name}} </h3>
        <p> Ár: {{p.price}} </p>
        <button class="button" @click="showDetails(p)">Részletek</button>&nbsp;
        <button class="button" @click="addToCard(p)">Kosárba</button>
      </div>
    </div>
  </div>

  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <span class="close" @click="hideModal">&times;</span>
      <p>Név: {{ selectedProduct.name }}</p>
      <p>Ár: {{ selectedProduct.price }}</p>
      <p>Mennyiség: 20 db</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </div>
  </div>

</template>

<style scoped>
  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.7);
  }

  .modal-content {
    background-color: #fefefe;
    margin: 10% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

#kep{
  width: 200px;
}
.card{
  display: flex;
  width: 150px;
  height: 100px;
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
  align-items: center;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
}

.cim{
  text-align: center;
  font-size: 50px;
}

@media (min-width: 992px) {
  .card {
    width: calc(20% - 20px);
    height: 250px;
  }

}

@media (min-width: 768px) and (max-width: 991px) {
  .card {
    width: calc(45% - 20px);
    height: 250px;
  }
  #kep{
  width: 150px;
}
}

@media (max-width: 767px) {
  .card {
    width: calc(100% - 20px);
    height: 250px;
  }
}

</style>

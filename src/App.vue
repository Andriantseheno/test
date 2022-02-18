<template>
  <div class="wrapper">
    <Navbar
      v-if="!['hiditra', 'hisoratra'].includes($route.name)"
      :cart-qty="cartQty"
      :cart="cart"
      :cart-total="cartTotal"
      @delete-item="deleteItem"
      @addItem="addItem"
      @clearItem="clearItem"
     
    />
    <HelloWorld v-if="!['entana', 'details', 'harona','NotFound'].includes($route.name)" />

    
    <div class="containerapp">
      <router-view
        :products="products"
        :cart="cart"
        @addItem="addItem"
        @clearItem="clearItem"
        @delete-item="deleteItem"
       
      />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
   name: 'App',
  data() {
    return {
      products: null,
      cart: [],
     }
  },
  created() {
    fetch('https://hplussport.com/api/products/order/price')
      .then(response => response.json())
      .then(data =>{this.products = data})
           
  },
  methods: {
    addItem(product) {
      let whichProduct
      let existing = this.cart.filter(function (item, index) {
        if (item.product.id == Number(product.id)) {
          whichProduct = index
          return true
        } else {
          return false
        }
      })

      if (existing.length) {
        this.cart[whichProduct].qty++
      } else {
        this.cart.push({ product: product, qty: 1 })
      }
    },
    deleteItem: function (id) {
      if (this.cart[id].qty > 1) {
        this.cart[id].qty--
      } else {
        this.cart.splice(id, 1)
      }
    },
    clearItem() {
      this.cart = []
    } 
  },
  computed: {
    cartTotal() {
      let sum = 0
      for (let key in this.cart) {
        sum = sum + this.cart[key].product.price * this.cart[key].qty
      }
      return sum
    },
    cartQty: function () {
      let qty = 0
      for (let key in this.cart) {
        qty = qty + this.cart[key].qty
      }
      return qty
    },
  },

  components: {
    Navbar,
    HelloWorld,
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #2c3e50;
  width: 100vw;
}
.containerapp {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90vw;
  height:400px;
  }
</style>

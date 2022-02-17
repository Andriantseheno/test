<template>
  <div>
    <div class="container">
      <div class="Logo">
        <router-link to="/" class="titlea">
          Tsenanao.mg
        </router-link>
        <button @click="toggleCartMenu" class="shop">
          <fa icon="shopping-cart" />
        </button>
        <span class="kantity">{{ cartQty }}</span>
        <div class="slogan">Manakaiky anao hatrany</div>
      </div>
      <ul class="nav">
        <router-link to="/hiditra">Fidirana</router-link>
        <router-link to="/entana">Lisitry ny entana</router-link>
        <router-link to="/">Fandraisana</router-link>
      </ul>
      <Cart v-show="displayCart" :cart="cart" :cart-total="cartTotal" />
    </div>
  </div>
</template>

<script>
import Cart from '@/views/Cart.vue'
export default {
  name: 'Navbar',
  data: function () {
    return {
      displayCart: false
    }
  },
  props: ['cart', 'cartQty', 'cartTotal'],
  methods:{
    toggleCartMenu() {
      this.displayCart = !this.displayCart
    }
  },
  components: {
    Cart,
  },
}
</script>

<style lang="scss" scoped>
.Logo {
  width: 90vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  position: fixed;
  z-index: 100;
}
.shop {
  position: absolute;
  top: 25%;
  right: 50%;
  color: tomato;
  font-size: 26px;
  border: none;
  background-color: transparent;

  :hover {
    transform: scale(1.1);
  }
}
.kantity {
  position: absolute;
  top: 24%;
  right: 49.6%;
  color: #273238;
  border: none;
  border-radius: 50%;
  text-align: center;
  font-size: 12px;
}

.titlea {
  color: #a62a22;
  font-size: 30px;
  font-family: 'Channel';
  margin-left: 20px;
}
a {
  text-decoration: none;
  color: white;
  font-family: fantasy;
}
.slogan {
  font-size: 25px;
  font-family: fantasy;
  margin-right: 20px;
  color: tomato;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}
.nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  width: 100vw;
  height: 50px;
  background-color: #a62a22;
  margin: 0px;
  font-size: 24px;
  font-weight: 300;
  position: fixed;
  top: 100px;
  z-index: 100;
}
</style>

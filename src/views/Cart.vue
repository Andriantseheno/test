<template>
  <div class="dropdown-clip">
    <div class="cart-container">
      <h3>Harona</h3>
      <div v-if="cart.length === 0 ? true : false" class="tsena">
        Mbola tsy niantsena ianao
      </div>

      <div class="container" v-for="(item, index) in cart" :key="index">
        <span class="left">
          {{ Math.round(item.product.price * item.qty * 200) }} Ar
        </span>
        <span class="center">{{ item.product.name }}</span>

        <button
          class="analana"
          @click.stop="this.$parent.$emit('deleteItem', index)"
        >
          -
        </button>
        <span class="isany">{{ item.qty }}</span>
        <button
          class="ampiana"
          @click.stop="this.$parent.$emit('addItem', item.product)"
        >
          +
        </button>
      </div>
      <hr v-if="cart.length > 0" />

      <div class="total" v-if="cart.length > 0">
        <span class="left">{{ Math.round(cartTotal * 200) }} Ar</span>
        <span class="center"></span>
        <button class="fafana" @click.stop="this.$parent.$emit('clearItem')">
          Fafana
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cart', 'cartTotal'],
  emits: ['addItem', 'deleteItem', 'clearItem'],
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;
  margin: 10px auto;
  padding: 10px;
  background-color: #f0f0f0;
  border: 3px solid #ababab;
  border-radius: 10px;
  .left {
    text-align: center;
    flex: 1.5;
    font-family: 'Champagne et Limousines';
  }
  .center {
    align-items: center;
    justify-content: center;
    flex: 3;
    font-family: 'Champagne et Limousines';
    font-weight: bold;
  }
}

.cart-container {
  background-color: #ffffff;
  width: 50%;
  margin: 50px auto;
  border-radius: 10px;

  h3 {
    text-align: center;
    color: #a62a22;
    font-size: 30px;
    font-family: 'Champagne et Limousines';
  }
  .total {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 5px auto;
    width: 400px;
    .left {
      flex: 1.5;
      font-weight: bold;
    }
    .center {
      flex: 3;
    }
  }
  .tsena {
    color: #f5bc53;
    font-size: 20px;
    font-family: fantasy;
    text-align: center;
  }
  .isany {
    margin: 0 10px;
    font-weight: bold;
    font-family: 'Champagne et Limousines';
  }
}

.fafana {
  font-family: 'Champagne et Limousines';
  padding: 5px 10px;
  border: none;
  color: white;
  background-color: #a62a22;
}
.ampiana {
  font-family: 'Champagne et Limousines';
  padding: 5px 5px;
  border: none;
  border-radius: 2px;
  color: white;
  background-color: #273238;
}
.analana {
  font-family: 'Champagne et Limousines';
  padding: 5px 5px;
  border: none;
  border-radius: 2px;
  color: white;
  background-color: #273238;
}
.dropdown-clip {
  position: fixed;
  top: 18%;
  overflow-y: scroll;
  border-radius: 10px;
  background-color: rgba($color: #363636, $alpha: 0.2);
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  z-index: 101;
  width: 100vw;
  height: 82%;
}
</style>

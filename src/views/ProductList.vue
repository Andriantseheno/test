<template>
<div class="liste">
  <div v-for="item in products" :key="item.id" id="item-list" class="container">
    <product :item="item" />
  </div>
 </div>
</template>

<script>
import Product from '@/components/Product'
export default {
  props: ['products'],
  components: {
    Product,
  }  
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  width: 300px;
}
.liste{
  margin-top:200px;
  display: flex;
   justify-content: space-around;
  flex-wrap: wrap;
  
}

</style>

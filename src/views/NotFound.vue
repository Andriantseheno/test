<template>
  <div class="contain">
    <h1>Oops!</h1>
    <h3>Tsy misy ny {{ resource }} tadiavinao</h3>
    <router-link :to="{ name: 'home' }">Hiverina any amin'ny pejy</router-link>
  </div>
</template>
<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'pejy',
    },
  },
}
</script>

<style lang="scss" scoped>
.contain {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width:100vw;
  height: 300px;
  margin: 1px auto;
  h1{
    font-size: 70px;
    }
      h3{
    font-size: 30px;
    }
}
</style>

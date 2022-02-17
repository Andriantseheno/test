<template>
  <div>
    <div class="shadow">
      <div class="container">
        <router-link to="/" class="left">
          Tsenanao.mg
        </router-link>
        <div class="center">
          <router-link to="/hiditra">Hiditra</router-link>
          <router-link to="/hisoratra">Hisoratra anarana</router-link>
        </div>
        <div class="right">Manakaiky anao hatrany</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 60px;
  background-color: transparent;

  .left {
    flex: 1.5;
    font-family: 'Channel';
    font-size: 30px;
    margin: 0px 30px;
    color: #a62a22;
  }
  .center {
    flex: 1.5;
    display: flex;
    justify-content: space-around;
    margin: 0px 20px;
    font-size: 25px;
    font-weight: bold;
    font-family: 'Champagne et Limousines';
    a {
      color: #273238;
    }
  }
  .right {
    flex: 1.5;
    text-align: center;
    font-size: 25px;
    font-family: fantasy;
    color: tomato;
  }
}
.container a {
  text-decoration: none;
}
.shadow:hover {
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}
</style>

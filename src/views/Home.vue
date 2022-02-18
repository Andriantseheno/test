<template>
  <div class="container">
    <div>
      <h1>Tongasoa eto amin'ny Tsenanao</h1>
      <h2>Manakaiky anao hatrany</h2>
    </div>
    <router-link to="/entana">
      <button class="produit">Lisitry ny entana</button>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 600px;
  @media screen and (min-width: 300px) and (max-width: 900px) {
    align-items: center;
  }
}
h1 {
  font-size: 60px;
  text-align: center;
  margin-top: 150px;
  @media screen and (min-width: 300px) and (max-width: 900px) {
    font-size: 30px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
}
h2 {
  font-size: 40px;
  text-align: center;
  color: tomato;
  @media screen and (min-width: 300px) and (max-width: 900px) {
    font-size: 20px;
    text-align: center;
  }
}
.produit {
  padding: 10px 20px;
  background-color: #273238;
  border: none;
  border-radius: 3px;
  color: white;
  font-weight: 300px;
}
</style>

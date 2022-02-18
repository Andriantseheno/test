<template>

  <form class="login" @submit.prevent>
      <h3>Hiditra</h3>
    <label>Mailaka</label>
    <input type="email" placeholder="Mailaka" />
    <label>Teny miafina</label>
    <input type="password" placeholder="Teny miafina" />
    <button class="btn">Hiditra</button>
    <span>Hisoratra anarana?</span>
    <router-link to="/hisoratra">Midira ato</router-link>
  </form>

</template>
<script>

export default {

}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 25%;
  left:35%;
  width: 400px;
  height: 350px;
  box-shadow: rgba(35, 35, 43, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
   @media screen and (min-width:300px) and (max-width:900px) {
   width:70%;
   left:15%;
  }
}
h3{
    color:#a62a22;
    font-family:'Champagne et Limousines';
    font-size:30px;
    font-weight: bold;
    margin-top: 10px;
}
input {
  width: 70%;
  margin: 5px 30px;
  padding: 5px 10px;
  border: none;
  border-bottom: 1px solid #273238;
}
input:focus {
  outline: none;
  border-left:4px solid coral;
  border-bottom:none;
}
input::placeholder {
  color: #ccc;
}
label {
  font-size: 25px;
  font-weight: bold;
  font-family: 'Champagne et Limousines';
  color:#273238;
  margin: 10px 30px;
}
.btn {
  width: 40%;
  margin: 20px auto;
  padding: 5px 10px;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  background-color: #a62a22;
  font-family: 'Champagne et Limousines';
  color: white;
  font-weight: bold;
}
.btn:hover {
  transform: scale(1.1);
}
.btn:active {
  transform: translateY(2px);
}
a {
  text-decoration: none;
  color: #a62a22;
  font-weight: bold;
  font-size: 15;
}
</style>

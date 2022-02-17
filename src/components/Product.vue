<template>
  <div class="prod">
    
      <router-link :to="{ name: 'details', params: { id: item.id } }">
        <div class="le">
        <img :src="item.image" :alt="item.name" />
        <h5>{{ item.name }}</h5>
        </div>
      </router-link>
    
    <span class="text">{{ Math.round(item.price * 200) }}Ariary</span>
    <button @click="this.$parent.$emit('addItem', item)" class="btn">
      Hividy
    </button>
  </div>
</template>

<script>
export default {
  props: ['item'],
  emits: ['addItem'],
}
</script>

<style lang="scss" scoped>
.prod {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 20px 10px;
  width: 100%;
  height: 250px;
  border: 1px solid lightgray;

  a{
    text-decoration:none;
    color:#273238;
  }
}
.le {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px 10px;
  width: 100%;
  height:170px;
}
img {
  width: 200px;
  height: 150px;
}
.title {
  width: 100%;
  height: 20px;
  text-align: center;
  margin-bottom: 5px;
}
.prod:hover {
  transform: scale(1.01);
  box-shadow: rgba(35, 35, 43, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.btn {
  width: 50%;
  padding: 5px 5px;
  background-color: cornflowerblue;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 10px;
}
.btn:hover {
  background-color: #5d7283;
  transform: scale(1.05);
}
.btn:active {
  transform: translateY(2px);
}

.text {
  color: whitesmoke;
  font-size: 8px;
  text-align: center;
  width: 80px;
  padding: 10px 5px;
  background-color: #273238;
}
</style>

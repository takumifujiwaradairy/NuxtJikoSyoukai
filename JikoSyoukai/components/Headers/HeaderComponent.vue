<template>
  <header>
    <h1>
      <a href="">Fujiwara Takumi ポートフォリオ</a>
    </h1>
    <nav>
      <ul>
        <li><a href="">ポートフォリオ</a></li>
        <li><a href="">私について</a></li>
      </ul>
    </nav>
      <my-button></my-button>
      <button @click="changeColor">change color</button>
  </header>

</template>
<script>
import MyButton from "./MyButton.vue";
export default {
  components:{
    MyButton
  }
}
</script>
<style scoped>
header {
  padding: 30px 4% 10px;
  position: fixed;
  top: 0;
  width: 100%;
  display:flex;
  align-items: center;
  background-color: #fff;
  align-items: center;
  list-style: none;
}
ul {
    list-style: none;
    margin: 0;
    display: flex;
}
li{
  margin: 0 0 0 15px;
  font-size: 14px;
}
</style>
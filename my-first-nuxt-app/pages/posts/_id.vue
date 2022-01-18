<template>
<div>
  <h1>今度こそ！  </h1>
  <p>{{$route.params.id}}</p>
  <nuxt-link to="/">top</nuxt-link>
  <input type="text" v-model="userId">
  <button @click="onLoadUser"></button>
</div>
</template>

<script>
export default {
  data(){
    return {
      userId:''
    }
  },
  methods:{
    onLoadUser(){
      console.log(this.$router.push(this.userId));
    }
  },
  validate(data){
    console.log(data);
    return true;
  }
}
</script>
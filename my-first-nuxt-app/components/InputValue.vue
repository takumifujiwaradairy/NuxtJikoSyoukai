<template>
  <div>
  <form>
    <label for="Todo">
      <input type="text" v-model="todoData.name" id="Todo">
    </label>
    <input type="submit" @click.prevent="submitData">
  </form>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      todoData:{
        name: ''
      }
    }
  },
  methods:{
    submitData(e){
      e.preventDefault();
    }
  }
}
</script>
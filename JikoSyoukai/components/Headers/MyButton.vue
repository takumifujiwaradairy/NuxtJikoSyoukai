<template>
  <button :style="styleObj" @click="changeRed">my-button</button>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
      validator: (val) => ['blue', 'red'].includes(val)
    }
  },
  computed: {
    styleObj() {
      return this.value ? { background: this.value } : {}
    }
  },
  methods: {
    changeRed() {
      this.$emit('input', 'red')
    }
  }
}
</script>

<style scoped>
button{
  
}
</style>
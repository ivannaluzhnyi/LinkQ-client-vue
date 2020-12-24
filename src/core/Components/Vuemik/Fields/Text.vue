<template>
  <input :placeholder="placeholder">
</template>

<script>
export default {
  name: "vuemik-text",
  props: {
    placeholder: {type: String, required: false}
  }
}
</script>

<style scoped>
input {
  width: 100%;
}
</style>

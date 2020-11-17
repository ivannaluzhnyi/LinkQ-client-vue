<template>
  <input :placeholder="placeholder">
</template>

<script>
export default {
  name: "vuemik-text",
  props: {
    placeholder: {type: String, required: true}
  }
}
</script>

<style scoped>

</style>

<template>
  <v-container>
    <h2>
      Create
      <v-btn color="primary" @click="swapComponent('propertiesAll')" type="submit">
        Return
      </v-btn>
    </h2>
  </v-container>
</template>

<script>
export default {
  name: "PropertiesCreate",
  props: ['swapComponent'],
}
</script>

<style scoped>

</style>

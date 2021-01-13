<template>
  <v-carousel class="carousel">
    <v-carousel-item
        v-for="(item,i) in property.medium"
        :key="i"
        :src="'http://localhost:8080' + item.uri"
        reverse-transition="fade-transition"
        transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Carousel",
  props: ['property'],
}
</script>

<style scoped>
.carousel {
  margin-bottom: 1rem;
}
</style>
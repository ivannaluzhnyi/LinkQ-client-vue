<template>
  <v-carousel class="carousel">
    <v-carousel-item
        v-for="(item,i) in property.medium"
        :key="i"
        :src="url + item.uri"
        reverse-transition="fade-transition"
        transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
import config from "@/config/http-client";
export default {
  name: "Carousel",
  props: ['property'],
  data: () => ({
    url: config.baseURL
  }),
}
</script>

<style scoped>
.carousel {
  margin-bottom: 1rem;
}
</style>
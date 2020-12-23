<template>
  <v-container fluid>
      <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
      >
        <v-carousel-item
            v-for="(property, index) in properties"
            :key="index"
        >
          <v-card
              class="mx-auto featured--card"
          >
            <v-img
                :src="property.first_picture"
                height="200px"
                min-width="100"
            ></v-img>

            <v-card-title>
              {{ property.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ property.short_description }}
            </v-card-subtitle>
            <v-card-text class="orange--text">
              {{ property.price }} €
            </v-card-text>
          </v-card>
        </v-carousel-item>
      </v-carousel>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      properties: [
        {
          title: 'Pre-fab homes',
          short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          price: 1023,
          first_picture: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
        },
        {
          title: 'Beach border',
          short_description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!',
          price: 780,
          first_picture: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
        },
        {
          title: 'IDK BRUH',
          short_description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          price: 500,
          first_picture: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'
        },
        {
          title: 'Malorum morgan',
          short_description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
          price: 500,
          first_picture: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'
        }
      ],
    }
  },
}
</script>

<style scoped>
.featured--card {
  min-width: 75%;
  max-width: 90%;
}
</style>

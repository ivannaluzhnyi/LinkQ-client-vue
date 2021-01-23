<template>
  <v-container>
    <h2>
      Show
      <v-btn color="primary" @click="swapComponent('propertiesAll')" type="submit">Return</v-btn>
    </h2>
    <v-card class="elevation-2">
      <v-container>
        <h3>Property</h3>
        <div class="row">
          <div class="col">
            <p><b>Title :</b> {{property.title}}</p>
            <p><b>Description :</b> {{property.description}}</p>
            <p><b>Price :</b> ${{property.price}}</p>
          </div>
        </div>
        <h3>Feature</h3>
        <div class="row">
          <div class="col">
            <p><b>Size :</b> {{property.features.size}}</p>
            <p><b>Rooms :</b> {{property.features.rooms}}</p>
            <p><b>Bedrooms :</b> {{property.features.bedrooms}}</p>
          </div>
          <div class="col">
            <p><b>Bathrooms :</b> {{property.features.bathrooms}}</p>
            <p><b>Garages :</b> {{property.features.garages}}</p>
          </div>
        </div>
        <h3>Address</h3>
        <div class="row">
          <div class="col">
            <p><b>Street :</b> {{property.address.street}}</p>
            <p><b>Zipcode :</b> {{property.address.zipcode}}</p>
            <p><b>City :</b> {{property.address.city}}</p>
          </div>
          <div class="col">
            <p><b>Country :</b> {{property.address.country}}</p>
            <p><b>Floor :</b> {{property.address.floor}}</p>
            <p><b>Room :</b> {{property.address.room}}</p>
          </div>
        </div>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: "PropertiesCreate",
  props: ["swapComponent", "property"],
  methods: {},
};
</script>

<style scoped>
h2 {
  padding-bottom: 1em;
}
</style>
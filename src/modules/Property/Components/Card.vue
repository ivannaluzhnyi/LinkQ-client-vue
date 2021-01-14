<template>
  <v-card elevation="3">
    <v-row>
      <v-col cols="6" md="6" xs="6">
        <v-container>
          <v-card-title>{{ property.property.title}}</v-card-title>
          <v-card-text>
            <h4>Détails</h4>
            <div class="row lead">
              <div class="col-md-6">
                <dl class="row">
                  <dt class="col-sm-6">Total area:</dt>
                  <dd class="col-sm-6">{{ property.size}} m<sup>2</sup></dd>
                  <dt class="col-sm-6">Garages:</dt>
                  <dd class="col-sm-6">{{ property.garages}}</dd>
                  <dt class="col-sm-6">Bedrooms:</dt>
                  <dd class="col-sm-6">{{ property.bedrooms}}</dd>
                </dl>
              </div>
              <div class="col-md-6">
                <dl class="row">
                  <dt class="col-sm-6">Bathrooms</dt>
                  <dd class="col-sm-6">{{ property.bathrooms}}</dd>
                  <dt class="col-sm-6">Total rooms:</dt>
                  <dd class="col-sm-6">{{ property.rooms}}</dd>
                  <dt class="col-sm-6">Prix :</dt>
                  <dd class="col-sm-6"><h2>$ {{ property.property.price}}</h2></dd>
                </dl>
              </div>
            </div>
            <v-btn x-large color="primary" class="mr-4"  v-bind:href="'/property/'+property.property.id">
              Plus de détails
            </v-btn>
          </v-card-text>
        </v-container>
      </v-col>
      <v-col cols="6" md="6" xs="6">
          <v-container>
        <v-img 
          height="300"
          :src="'http://localhost:8080' + property.property.medium[0].uri"
        ></v-img>
          </v-container>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  props:['property'],
};
</script>

<style>
</style>
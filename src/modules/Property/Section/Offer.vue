<template>
  <div>
    <div class="container">
      <div class="row align-items-center">
        <div>
          <v-card elevation="4">
            <v-img
                v-if="property.medium.length !== 0"
                :src="url + property.medium[0].uri"
                width="800px"
                height="200px"
            ></v-img>
            <v-card-title>{{property.title}}</v-card-title>
            <div>
              <v-card-text><b>Total area:</b> {{property.features.size}}m<sup>2</sup></v-card-text>
              <v-card-text><b>Number of rooms:</b> {{property.features.rooms}}</v-card-text>
              <v-card-text><b>Address:</b> {{property.address.street}} {{property.address.city}}</v-card-text>
              <v-card-text><b>Price:</b> ${{property.price}}</v-card-text>
            </div>
            <div class="col-lg-4 push-lg-2 pl-lg-5 pt-5 pt-lg-0 dark" style="color: white;">
              <h2 class="mb-2">Make an offer!</h2>
              <v-btn color="btn primary" x-large
                     @click="createApplication(property)" >Faire une demande</v-btn>
              <p class="lead">Mauris dolor orci, sagittis ut varius in, interdum nec sapien.</p>
              <!-- Form contact -->
            </div>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config/http-client";

export default {
  name: "Offer",
  props: ['property', 'createApplication'],
  data: () => ({
    url: config.baseURL
  }),
}
</script>

<style scoped>
.container {
  width: 1200px;
  max-width: 100%;
  top: 78%;
  right: 25%;
  left: 25%;
  position: static;
}
.align-items-center {
  -webkit-box-align: center!important;
  -webkit-align-items: center!important;
  -ms-flex-align: center!important;
  align-items: center!important;
}
.push-lg-2 {
  left: 16.666667%;
}
.object-box {
  margin-bottom: 1rem;
  -webkit-transition: all .25s ease-out;
  -moz-transition: all .25s ease-out;
  -o-transition: all .25s ease-out;
  transition: all 0.25s ease-out;
  background-color: #fff;
  -webkit-border-radius: .3rem;
  -moz-border-radius: .3rem;
  -ms-border-radius: .3rem;
  -o-border-radius: .3rem;
  border-radius: .3rem;
}
.object-box .object-image img {
  width: 100%;
  -webkit-border-radius: 0.3rem 0.3rem 0 0;
  -moz-border-radius: 0.3rem 0.3rem 0 0;
  -ms-border-radius: 0.3rem 0.3rem 0 0;
  -o-border-radius: 0.3rem 0.3rem 0 0;
  border-radius: 0.3rem 0.3rem 0 0;
}
img {
  max-width: 100%;
  height: auto;
  -webkit-backface-visibility: hidden;
  vertical-align: middle;
  border-style: none;
}
.object-box .object-content {
  padding: 2rem;
}
.object-box .object-content .object-title {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e3e3e3;
  font-size: 1.5rem;
}
.object-box .object-details {
  font-size: 0.95rem;
  font-weight: 400;
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}
.object-box .object-price {
  display: block;
  font-weight: 500;
}
.text-primary {
  color: #3D64CC !important;
}
.text-lg {
  font-size: 1.35rem;
}
</style>
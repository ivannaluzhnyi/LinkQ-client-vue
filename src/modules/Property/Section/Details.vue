<template>
  <v-container class="container">
    <div class="row">
      <div class="col-lg-8 push-lg-1">
        <h2 class="mb-0">Details & Plan</h2>
        <hr class="hr-primary">
        <div class="row lead">
          <div class="col-md-6">
            <dl class="row">
              <dt class="col-sm-6">Total area:</dt>
              <dd class="col-sm-6">{{ property.features.size }}m<sup>2</sup></dd>
              <dt class="col-sm-6">Garages:</dt>
              <dd class="col-sm-6">{{ property.features.garages }}</dd>
              <dt class="col-sm-6">Floor:</dt>
              <dd class="col-sm-6">2</dd>
            </dl>
          </div>
          <div class="col-md-6">
            <dl class="row">
              <dt class="col-sm-6">Bedrooms:</dt>
              <dd class="col-sm-6">{{ property.features.bedrooms }}</dd>
              <dt class="col-sm-6">Bathrooms</dt>
              <dd class="col-sm-6">{{ property.features.bathrooms }}</dd>
              <dt class="col-sm-6">Total rooms:</dt>
              <dd class="col-sm-6">{{ property.features.rooms }}</dd>
            </dl>
          </div>
        </div>
        <hr class="hr-sm">
        <!--Plan-->
        <div>
          <h2>Address</h2>
          <hr class="hr-primary">
          <div class="row lead">
            <div class="col">
              <dl class="row">
                <dt class="col-sm-6">Street:</dt>
                <dd class="cos-sm-6">{{ property.address.street }}</dd>
                <dt class="col-sm-6">City</dt>
                <dd class="col-sm-6">{{ property.address.city }} {{ property.address.zipcode }}</dd>
                <dt class="col-sm-6">Country:</dt>
                <dd class="col-sm-6">{{ property.address.country }}</dd>
              </dl>
            </div>
          </div>
        </div>
        <hr class="hr-sm">
      </div>
    </div>
  </v-container>
</template>

<script>

export default {
  name: "Details",
  props: ['property'],
}
</script>

<style scoped>
.container {
  width: 1140px;
  max-width: 100%;
}

.hr-primary {
  width: 100px;
  border-color: #3D64CC;
  display: inline-block;
  border-width: 1px;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.push-lg-1 {
  left: 8.333333%;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.hr-sm {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}

.plan-container {
  position: relative;
  display: inline-block;
  margin: 2rem auto;
}

dt {
  color: gray;
}

dd {
  font-weight: bold;
}
</style>
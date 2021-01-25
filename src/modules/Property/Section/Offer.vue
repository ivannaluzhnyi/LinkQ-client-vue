<template>
  <div>
    <div id="bg"></div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 push-lg-2">
          <!-- Object - Vertical -->
          <div class="object-box">
            <div class="object-image">
              <img src="http://themes.suelo.pl/chata/assets/img/objects/object-large01.jpg" alt="">
            </div>
            <div class="object-content">
              <h5 class="object-title">{{property.title}}</h5>
              <ul class="object-details list-unstyled">
                <li><span class="text-muted">Total area:</span> {{property.features.size}}m<sup>2</sup></li>
                <li><span class="text-muted">Bedrooms:</span> {{property.features.bedrooms}}</li>
                <li><span class="text-muted">Rooms:</span> {{property.features.rooms}}</li>
              </ul>
              <div class="row">
                <div class="col-6">
                  <strong class="text-muted">Price:</strong>
                  <span class="object-price text-primary text-lg">${{property.price}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 push-lg-2 pl-lg-5 pt-5 pt-lg-0 dark" style="color: white;">
          <h2 class="mb-2">Make an offer!</h2>
          <p class="lead">Mauris dolor orci, sagittis ut varius in, interdum nec sapien.</p>
          <!-- Form contact -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Offer",
  props: ['property'],
}
</script>

<style scoped>
#bg{
  background-image: url("../asset/bg-offer.jpg");
  height: 100vh;
  color: white;
  position: static;
}
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
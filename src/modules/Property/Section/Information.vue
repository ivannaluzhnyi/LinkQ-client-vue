<template>
  <div id="information-container">
    <div class="container object-single" data-local-scroll>
      <div class="row align-items-center">
        <div class="col-lg-8">
          <h1 class="mb-0">
            <span class="mr-3">{{ property.title}}</span>
          </h1>
          <ul class="list-inline lead">
            <li class="list-inline-item">
              <span class="text-muted">Total area:</span>
              <strong>
                "{{property.features.size}}m"
                <sup>2</sup>
              </strong>
            </li>
            <li class="list-inline-item">
              <span class="text-muted">Number of rooms:</span>
              <strong>{{property.features.rooms}}</strong>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 text-lg-right">
          <span class="object-price mr-4">${{property.price}}</span>
          <v-btn
              x-large
              color="primary"
              class="mr-4" href="#make-offer"
          >
            Make an offer
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Information",
  props: ['property'],
}
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
}

.object-single {
  position: relative;
  padding-top: 25%;
  padding-bottom: 2rem;
}

.align-items-center {
  -webkit-box-align: center!important;
  -webkit-align-items: center!important;
  -ms-flex-align: center!important;
  align-items: center!important;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.list-inline-item {
  display: inline-block;
}

.list-inline-item:not(:last-child) {
  margin-right: 1.5em;
}
.object-single .object-price {
  font-size: 1.75em;
  font-weight: 500;
  display: inline-block;
  vertical-align: middle;
}

.btn {
  position: relative;
  font-family: "Montserrat",sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  -webkit-border-radius: .2em;
  -moz-border-radius: .2em;
  -ms-border-radius: .2em;
  -o-border-radius: .2em;
  border-radius: .2em;
  padding: 0.95rem 2rem 1.05rem;
  font-size: 0.8rem;
  -webkit-transition: all .25s ease-out;
  -moz-transition: all .25s ease-out;
  -o-transition: all .25s ease-out;
  transition: all 0.25s ease-out;
  outline: none;
  background: transparent;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  cursor: pointer;
}

.btn-primary {
  border-color: #3D64CC;
  background-color: #3D64CC;
  color: #fff;
}

*, ::after, ::before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

.cover {
  padding-top: 0;
  padding-bottom: 0;
}

.bg-dark {
  background-color: #202124 !important;
}


</style>
<template>
  <v-container class="container">
    <div class="row align-items-center" data-local-scroll="">
      <div class="col-lg-4 push-lg-2 pr-5">
        <h2>Description</h2>
        <p class="lead">Mauris dolor orci, sagittis ut varius in, interdum nec sapien. Mauris rutrum lacinia orci nec maximus.</p>
        <a href="#make-offer" class="btn btn-primary mb-4">Make na offer</a>
      </div>
      <div class="col-lg-4 push-lg-2">
        <img class="rounded shadow animated fadeIn visible" src="http://themes.suelo.pl/chata/assets/img/photos/about03.jpg" alt="" data-animation="fadeIn">
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
name: "Features"
}
</script>

<style scoped>
.container {
  width: 900px;
  max-width: 100%;
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
.lead {
  font-size: 1.25rem;
  font-weight: 300;
}
.feature {
  margin-bottom: 30px;
  display: block;
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
.btn-primary{
  border-color: #3D64CC;
  background-color: #3D64CC;
  color: white;
  outline: none;
}
p {
  color: gray;
}
</style>
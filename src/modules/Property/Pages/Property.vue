<template>
  <div>
    <div id="background"></div>
    <div fluid>
      <section id="information">
        <Information v-bind:property="property"/>
      </section>

      <section id="details-plan">
        <Details v-bind:property="property"/>
      </section>

      <section id="features">
        <Features v-bind:property="property"/>
      </section>

      <section id="pictures">
        <Carousel v-bind:property="property"/>
      </section>

      <section id="make-offer">
        <Offer v-bind:property="property"/>
      </section>
    </div>
  </div>
</template>

<script>
import {EventBus} from "@/core/utils/eventBus";
import {navlinks} from "@/modules/Property/Utils/navlinks";
import Information from "@/modules/Property/Section/Information";
import Details from "@/modules/Property/Section/Details";
import Features from "@/modules/Property/Section/Features";
import Offer from "@/modules/Property/Section/Offer";
import Carousel from "@/modules/Property/Section/Carousel";

export default {
  name: "Info",
  components: {
    Details,
    Information,
    Features,
    Offer,
    Carousel
  },
  data: () => {
    return {
      navlinks: navlinks,
      property: null,
    }
  },
  created() {
    EventBus.$emit('page-change-navlinks', this.navlinks)
    this.getProperty()
  },
  methods: {
    getProperty() {
      fetch(`http://localhost:8080/properties/${this.$route.params.idProperty}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json'
        }
      }).then(response => response.json())
          .then(data => {
            this.property = data;
            console.log(data);
          })
    }
  },
}
</script>

<style scoped>
#background {
  background-image: url("http://themes.suelo.pl/chata/assets/img/objects/object-large01.jpg");
  height: 75vh;
  margin-top: -3vh;
  background-color: black !important;
  width: 100%;
  opacity: 75% !important;
  color: white;
}

#information {
  position: absolute;
  width: 100%;
  top: 0;
}

#information > #information-container {
  color: black;
}

#details-plan {
}

</style>
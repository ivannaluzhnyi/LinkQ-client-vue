<template>
  <div>
    <div id="background"></div>
    <div fluid>
      <section id="information">
        <Information/>
      </section>

      <section id="details-plan">
        <Details/>
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="make-offer">
        <Offer />
      </section>
    </div>
  </div>
</template>

<script>
import {EventBus} from "@/core/utils/eventBus";
import {navlinks} from "@/modules/Property/Utils/navlinks";
import Information from "@/modules/Property/Components/Information";
import Details from "@/modules/Property/Components/Details";
import Features from "@/modules/Property/Components/Features";
import Offer from "@/modules/Property/Components/Offer";

export default {
  name: "Info",
  components: {
    Details,
    Information,
    Features,
    Offer
  },
  data: () => {
    return {
      navlinks: navlinks,
    }
  },
  created() {
    EventBus.$emit('page-change-navlinks', this.navlinks)
  }
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

#information  {
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
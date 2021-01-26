<template>
  <div>
    <CreateApplication
      :dialog="dialog"
      :property="{...property}"
      :handleClose="handleClose"
    />
    
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
        <Offer v-bind:property="property" :createApplication="createApplication"/>
      </section>
      <section id="comments">
        <Comment v-bind:property="property"/>
      </section>
    </div>
  </div>
</template>

<script>
import {EventBus} from "@/core/utils/eventBus";
import {navlinks} from "@/modules/Property/Utils/Property/navlinks";
import Information from "@/modules/Property/Section/Information";
import Details from "@/modules/Property/Section/Details";
import Features from "@/modules/Property/Section/Features";
import Offer from "@/modules/Property/Section/Offer";
import Carousel from "@/modules/Property/Section/Carousel";
import CreateApplication from "../../Home/Components/CreateApplication";
import Comment from "@/modules/Property/Section/Comment";
import { mapActions } from "vuex";

export default {
  name: "Info",
  components: {
    Details,
    Information,
    Features,
    Offer,
    Carousel
  },
  data: function () {
    return {
      navlinks: navlinks,
      id: this.$route.params.idProperty,
      dialog: false,
    }
  },
  computed: {
    property () {
      return this.$store.state.property.property;
    },
    selectedProperty() {
      return this.$data.property;
    },
  },
  created() {
    EventBus.$emit('page-change-navlinks', this.navlinks)
    this.load(this.id)
  },
  methods: {
    ...mapActions({ loadProperty: 'property/loadProperty' }),

    load(props) {
      this.loadProperty(props)
    },
    createApplication(property) {
      this.$data.property = property;
      this.$data.dialog = true;
    },
    handleClose() {
      this.$data.dialog = false;
    },
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
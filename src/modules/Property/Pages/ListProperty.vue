<template>
  <v-container>
    <h3>Listes des propriétés disponible</h3>
    <div>
      <div v-for="property in properties" :key="property.id">
        <Card v-bind:property="property" />
      </div>
      <Card />
    </div>
  </v-container>
</template>

<script>
import { EventBus } from "@/core/utils/eventBus";
import { navlinks } from "@/modules/Property/Utils/ListProperty/navlinks";
import Card from "../Components/Card.vue";

import { mapActions } from "vuex";

// const form = {
//   rooms: {
//     min: 1,
//     max: 2,
//   },
//   size:{
//     min: null,
//     max: 100,
//   }
// };

let searchInformation = "rooms[between]=1..2&size[between]=9..44";

export default {
  components: { Card },
  name: "ListProperty",
  data: () => {
    return {
      navlinks: navlinks,
    };
  },

  created() {
    EventBus.$emit("page-change-navlinks", this.navlinks);
    // this.convert()
    this.load(searchInformation);
  },
  computed: {
    properties() {
      return this.$store.state.property.properties;
    },
  },
  methods: {
    ...mapActions({ getProperty: "property/getProperty" }),
    // convert() {
    //   console.log('1 :>> ', this.$store.state);
    //   console.log('2 :>> ', this.$store.state.property.properties);
    //   for (let key in form) {
    //     if (form[key]["min"] !== null && form[key]["max"] !== null) {
    //       searchInformation += `${key}[between]=${form[key]["min"]}..${form[key]["max"]}&`
    //     } else if (form[key]["min"] !== null) {
    //       searchInformation += `${key}[gte]=${form[key]["min"]}&`
    //     } else if (form[key]["max"] !== null) {
    //       searchInformation += `${key}[lte]=${form[key]["max"]}&`
    //     }
    //   }
    //   console.log('searchInformation :>> ', searchInformation);
    //   console.log('url :>> ', url);
    // },
    load(searchInformation) {
      let test = this.$route.query.test;
      console.log("searchInformation :>> ", searchInformation);
      this.getProperty(test);
    },
  },
};
</script>

<style>
</style>
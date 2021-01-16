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

export default {
  components: { Card },
  name: "ListProperty",
  props:['myprop'],
  data: () => {
    return {
      navlinks: navlinks,

    };
  },

  created() {
    EventBus.$emit("page-change-navlinks", this.navlinks);
    this.load();
  },
  computed: {
    properties() {
      return this.$store.state.property.properties;
    },
  },
  methods: {
    ...mapActions({ getProperty: "property/getProperty" }),
   
    load() {
      console.log('this.mypropss :>> ', this.myprop);
      this.getProperty(this.myprop);
    },
  },
};
</script>

<style>
</style>
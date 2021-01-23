<template>
  <v-container>
    <h3>
      Listes des propriétés disponible ({{ properties.length }})
      <div v-if="isSearch">avec votre recherche.</div>
    </h3>
    <div v-if="showProperties">
      <div v-for="property in properties" :key="property.id">
        <Card v-if="property.status === true" v-bind:property="property" />
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
  props: ["searchUrl"],
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

    showProperties() {
      return this.properties.length !== 0;
    },
    isSearch() {
      return this.searchUrl !== undefined;
    },
  },
  methods: {
    ...mapActions({ getProperty: "property/getProperty" }),

    load() {
      this.getProperty(this.searchUrl);
    },
  },
};
</script>

<style>
</style>
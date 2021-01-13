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

export default {
  components: { Card },
  name: "ListProperty",
  data: () => {
    return {
      navlinks: navlinks,
      properties: null,
    };
  },
  created() {
    EventBus.$emit("page-change-navlinks", this.navlinks);
    this.searchProperty();
  },
  methods: {
    searchProperty() {
      fetch(`http://localhost:8080/features?rooms[between]=1..3`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.properties = data;
          console.log(data);
        });
    },
  },
};
</script>

<style>
</style>
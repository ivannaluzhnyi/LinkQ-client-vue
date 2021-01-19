<template>
  <v-container fluid>
    <h1>Nos plus belles Maisons</h1>
    <hr />

    <CreateApplication
      :dialog="dialog"
      :property="{...selectedProperty}"
      :handleClose="handleClose"
    />

    <v-row>
      <v-col cols="12" sm="3" md="4" v-for="(property, index) in properties" :key="index">
        <Property :property="{...property}" :createApplication="createApplication" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

import Property from "../Components/Property";
import CreateApplication from "../Components/CreateApplication";

export default {
  components: {
    CreateApplication,
    Property,
  },
  data() {
    return {
      property: undefined,
      dialog: false,
    };
  },
  computed: {
    properties() {
      return this.$store.state.Properties.properties;
    },
    selectedProperty() {
      return this.$data.property;
    },
  },
  created() {
    this.load();
  },
  methods: {
    ...mapActions({ loadProperties: "Properties/loadProperties" }),

    load() {
      this.loadProperties();
    },
    createApplication(property) {
      this.$data.property = property;
      this.$data.dialog = true;
    },

    handleClose() {
      this.$data.dialog = false;
    },
  },
};
</script>

<style scoped>
.featured--card {
  min-width: 75%;
  max-width: 90%;
}
</style>

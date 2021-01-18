<template>
  <v-container fluid>
    <h1>Nos plus belles Maisons</h1>
    <hr />

    <v-row>
      <v-col cols="12" sm="3" md="4" v-for="(property, index) in properties" :key="index">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{ property.title }}</div>
              <v-list-item-title class="headline mb-1">{{ property.price }} €</v-list-item-title>
              <v-list-item-subtitle>{{ property.description }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-avatar class="profile" color="grey" size="80" tile>
              <v-img :src="baseLink + property.medium[0].uri"></v-img>
            </v-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn @click="createApplication(property)" outlined rounded text>Buy or Rent</v-btn>
            <RouterLink :to="{name: 'Property', params:{ idProperty: properties.id}}">Test</RouterLink>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import config from "@/config/http-client";

export default {
  data: function () {
    return {
      baseLink: config.baseURL,
    };
  },
  computed: {
    properties() {
      return this.$store.state.Properties.properties;
    },
    ...mapGetters({
      isAuth: "auth/isFullAuth",
    }),
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
      console.log("property ==> ", property);
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

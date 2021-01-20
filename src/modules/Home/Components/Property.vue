<template>
  <v-card class="mx-auto" outlined>
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

    <v-card-actions v-if="displayActions">
      <v-btn @click="createApplication(property)" outlined rounded text>Acheter ou louer</v-btn>
      <RouterLink :to="{name: 'Property', params:{ idProperty: property.id}}">Test</RouterLink>
    </v-card-actions>
  </v-card>
</template>

<script>
import config from "@/config/http-client";

export default {
  props: ["property", "createApplication"],

  data() {
    return {
      baseLink: config.baseURL,
    };
  },

  computed: {
    displayActions() {
      return this.createApplication !== undefined;
    },
  },
};
</script>

<style>
</style>
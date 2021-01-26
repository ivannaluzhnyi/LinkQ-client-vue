<template>
  <v-data-table :headers="headers" :items="applications">
    <template v-slot:item.buyer="{ item }">
      <div class="buyer">
        <p
          v-if="item.buyer.firstname !== undefined && item.buyer.firstname !== null"
        >{{ `${item.buyer.firstname} ${item.buyer.lastname}`}}</p>
        <p>{{item.buyer.email}}</p>
      </div>
    </template>
    <template v-slot:item.offer="{ item }">{{item.offer | displayOffer}}</template>

    <template v-slot:item.status="{ item }">
      <v-chip :color="getColorByStatus(item.status)" label outlined>{{item.status}}</v-chip>
    </template>

    <template v-slot:item.created="{ item }">{{item.created | displayDate}}</template>
    <template v-slot:item.property_id="{ item }">
      <RouterLink :to="{name: 'Property', params:{ idProperty: item.property_id}}">Voir</RouterLink>
    </template>

    <template v-slot:item.property_id="{ item }">
      <RouterLink :to="{name: 'Property', params:{ idProperty: item.property_id}}">Voir</RouterLink>
    </template>

    <template v-slot:item.actions="{ item }">
      <div v-if="item.status === 'PENDING' && handleAppplicationActions!== undefined">
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-bind="attrs"
              v-on="on"
              small
              class="mr-2"
              @click="handleAppplicationActions(item, 'accept')"
            >mdi mdi-check-bold</v-icon>
          </template>
          <span>Confirmer</span>
        </v-tooltip>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-bind="attrs"
              v-on="on"
              small
              class="mr-2"
              @click="handleAppplicationActions(item, 'reject')"
            >mdi mdi-close</v-icon>
          </template>
          <span>Réfuser</span>
        </v-tooltip>
      </div>
    </template>
  </v-data-table>
</template>

<script>
import { displayDate } from "@/core/utils/date";

import { getColorByStatus } from "@/modules/Admin/Application/helpers";

export default {
  props: ["headers", "applications", "handleAppplicationActions"],

  methods: {
    getColorByStatus,
  },

  filters: {
    displayDate,

    displayOffer(offer) {
      return `${offer}€`;
    },
  },
};
</script>

<style scoped>
.buyer p {
  margin: 0;
}
</style>

<template>
  <div>
    <div v-if="$apollo.queries.applications.loading">Loading...</div>

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
    </v-data-table>
  </div>
</template>

<script>
import { GET_APPLICATIONS } from "@/graphql/queries";
import { getColorByStatus } from "../../../helpers";

import { displayDate } from "@/core/utils/date";

export default {
  name: "AllApplications",

  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "Demendeur", value: "buyer" },
        { text: "Offer (€)", value: "offer" },
        { text: "Statut", value: "status" },
        { text: "Création", value: "created" },
        { text: "Proposition", value: "property_id" },
      ],
    };
  },

  updated() {
    console.log("this ==> ", this);
  },
  methods: {
    getColorByStatus,
  },
  apollo: {
    applications() {
      return {
        query: GET_APPLICATIONS,
      };
    },
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

<template>
  <div>
    <div v-if="$apollo.queries.applications.loading">Loading...</div>

    <v-data-table :headers="headers" :items="applications">
      <template v-slot:item.status="{ item }">
        <v-chip :color="getColorByStatus(item.status)" label outlined>{{item.status}}</v-chip>
      </template>

      <template v-slot:item.created="{ item }">{{item.created | displayDate}}</template>
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
        { text: "Offer", value: "offer" },
        { text: "Proposition", value: "property_id" },
        { text: "Statut", value: "status" },
        { text: "Création", value: "created" },
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
  },
};
</script>

<style>
</style>
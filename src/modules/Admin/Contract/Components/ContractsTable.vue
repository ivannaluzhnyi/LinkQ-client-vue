<template>
  <v-data-table :headers="headers" :items="contracts">
    <template v-slot:item.user="{ item }">
      <div class="buyer">
        <p
          v-if="item.application.buyer.firstname !== undefined && item.application.buyer.firstname !== null"
        >{{ `${item.application.buyer.firstname} ${item.application.buyer.lastname}`}}</p>
        <p>{{item.application.buyer.email}}</p>
      </div>
    </template>

    <template v-slot:item.price="{ item }">{{item.price | displayPrice}}</template>

    <template v-slot:item.created="{ item }">{{item.created | displayDate}}</template>

    <template v-slot:item.property="{ item }">
      <RouterLink :to="{name: 'Property', params:{ idProperty: item.application.property_id}}">Voir</RouterLink>
    </template>
  </v-data-table>
</template>

<script>
import { displayDate } from "@/core/utils/date";

export default {
  props: ["headers", "contracts"],

  filters: {
    displayDate,

    displayPrice(offer) {
      return `${offer}€`;
    },
  },
};
</script>

<style>
</style>
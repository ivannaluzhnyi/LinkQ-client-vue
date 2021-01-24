<template>
  <v-card>
    <v-card-title>Contrats</v-card-title>

    <div>
      <v-card flat>
        <v-card-text>
          <ContractsTable :headers="headers" :contracts="contracts" />
        </v-card-text>
      </v-card>
    </div>
  </v-card>
</template>

<script>
import { GET_CONTRACTS } from "@/graphql/queries";

import ContractsTable from "@/modules/Admin/Contract/Components/ContractsTable";

export default {
  components: {
    ContractsTable,
  },
  data: () => ({
    headers: [
      { text: "ID", value: "id" },
      { text: "User", value: "user" },
      { text: "Prix", value: "price" },
      { text: "Proposition", value: "property" },
    ],
  }),

  apollo: {
    contracts() {
      return {
        query: GET_CONTRACTS,
      };
    },
  },
};
</script>

<style>
</style>
<template>
  <v-container>
    <v-card>
      <v-card-title>Mes demandes en cours</v-card-title>

      <v-card elevation="2">
        <v-card-text>
          <ApplicationTable :headers="headers" :applications="applications" />
        </v-card-text>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
import { EventBus } from "@/core/utils/eventBus";
import { navlinks } from "@/modules/Application/Utils/navlinks";
import { mapGetters } from "vuex";
import { GET_USER_APPLICATIONS } from "@/graphql/queries";

import ApplicationTable from "@/core/Components/ApplicationTable";

export default {
  components: {
    ApplicationTable,
  },
  created() {
    EventBus.$emit("page-change-navlinks", navlinks);

    if (!this.isAuth) {
      this.$router.push("/");
    }
  },

  data: () => ({
    headers: [
      { text: "ID", value: "id" },
      { text: "Offer (€)", value: "offer" },
      { text: "Statut", value: "status" },
      { text: "Création", value: "created" },
      { text: "Proposition", value: "property_id" },
    ],
  }),

  computed: {
    ...mapGetters({
      isAuth: "auth/isAuthenticated",
    }),
  },

  apollo: {
    applications() {
      return { query: GET_USER_APPLICATIONS };
    },
  },
};
</script>

<style>
</style>
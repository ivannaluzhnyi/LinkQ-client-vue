
<template>
  <div>
    <div v-if="$apollo.queries.applications.loading">
      <v-progress-linear indeterminate color="cyan"></v-progress-linear>
    </div>

    <v-data-table v-else :headers="headers" :items="applications">
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
      </template>
    </v-data-table>

    <ApplicationActionsModal
      :application="dialog.currentApplication"
      :dialog="dialog.open"
      :type="dialog.type"
      :close="handleCloseModal"
    />
  </div>
</template>

<script>
import ApplicationActionsModal from "./ApplicationActionsModal";

import { GET_APPLICATIONS, GET_PENDING_APPLICATIONS } from "@/graphql/queries";
import { getColorByStatus, TableType } from "../helpers";

import { displayDate } from "@/core/utils/date";

export default {
  name: "AllApplications",
  props: ["type"],
  components: { ApplicationActionsModal },

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

      dialog: {
        type: "",
        open: false,
        currentApplication: undefined,
      },
    };
  },

  created() {
    if (this.type === TableType.APPLICATIONS_TO_VALIDATE) {
      this.$data.headers.push({
        text: "Actions",
        value: "actions",
        sortable: false,
      });
    }
  },
  methods: {
    getColorByStatus,
    getApolloRequest() {
      switch (this.type) {
        case TableType.APPLICATIONS_TO_VALIDATE:
          return { query: GET_PENDING_APPLICATIONS };

        case TableType.ALL_APPLICATIONS:
          return { query: GET_APPLICATIONS };

        default:
          return {};
      }
    },

    handleAppplicationActions(app, type) {
      this.$data.dialog.open = true;
      this.$data.dialog.type = type;
      this.$data.dialog.currentApplication = app;
    },

    handleCloseModal() {
      this.$data.dialog.open = false;
      this.$data.dialog.type = "";
      this.$data.dialog.currentApplication = undefined;
    },
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
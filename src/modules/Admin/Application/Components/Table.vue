
<template>
  <div>
    <div v-if="$apollo.queries.applications.loading">
      <v-progress-linear indeterminate color="cyan"></v-progress-linear>
    </div>

    <ApplicationTable
      v-else
      :applications="applications"
      :headers="headers"
      :handleAppplicationActions="handleAppplicationActions"
    />

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
import ApplicationTable from "@/core/Components/ApplicationTable";

import { GET_APPLICATIONS, GET_PENDING_APPLICATIONS } from "@/graphql/queries";
import { APPLICATION_SUBSCRIPTION } from "@/graphql/subscriptions";

import { TableType } from "../helpers";

export default {
  name: "Table",
  props: ["type"],
  components: { ApplicationActionsModal, ApplicationTable },

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

      applications: [],
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
        ...this.getApolloRequest(),

        update: ({ applications }) => {
          if (this.type === TableType.APPLICATIONS_TO_VALIDATE) {
            return applications.filter((app) => app.status === "PENDING");
          }
          return applications;
        },
        subscribeToMore: {
          document: APPLICATION_SUBSCRIPTION,
          updateQuery: async (previousResult, { subscriptionData }) => {
            const {
              data: {
                application: { application, actionType },
              },
            } = subscriptionData;

            if (actionType === "CREATE") {
              this.applications = [...this.applications, application];
              return;
            }

            this.applications = [
              ...this.applications.filter((app) => app.id !== application.id),
            ];

            return;
          },
        },
      };
    },
  },
};
</script>

<style scoped>
.buyer p {
  margin: 0;
}
</style>
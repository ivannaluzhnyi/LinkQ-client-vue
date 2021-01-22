<template>
  <v-row justify="center">
    <LoadingDialog v-if="loading" :dialog="dialog" />
    <v-dialog v-else v-model="dialog" max-width="500">
      <ControlResponseContent
        :handleClose="handleClose"
        :successMessage="successDialogMessage"
        :failureMessage="failureDialogMessage"
      >
        <v-card>
          <v-card-title v-if="type==='accept'" class="headline">Confirmation</v-card-title>
          <v-card-title v-else class="headline">Refuser</v-card-title>

          <v-card-text v-if="type==='accept'">Voulez-vous vraiment accepter la demande ?</v-card-text>
          <v-card-text v-else>Voulez-vous vraiment refuser la demande</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="handleClose">Annuler</v-btn>
            <v-btn color="green darken-1" text @click="handleCall()">
              <span v-if="type==='accept'">Confirmer</span>
              <span v-else>Refuser</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </ControlResponseContent>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import ControlResponseContent from "@/core/Components/ControlResponseContent";
import LoadingDialog from "@/core/Components/LoadingDialog";

import { getMessageByResponseType } from "../helpers";
export default {
  name: "ApplicationActionsModal",
  components: {
    ControlResponseContent,
    LoadingDialog,
  },

  props: ["dialog", "type", "close", "application"],

  computed: {
    ...mapGetters({
      loading: "adminApplications/isLoading",
      responseType: "adminApplications/responseType",
    }),

    successDialogMessage() {
      return getMessageByResponseType(this.responseType, "SUCCESS");
    },

    failureDialogMessage() {
      return getMessageByResponseType(this.responseType, "FAILURE");
    },
  },

  methods: {
    ...mapActions({
      acceptApplication: "adminApplications/acceptApplication",
      refuseApplication: "adminApplications/refuseApplication",
      resetResponse: "adminApplications/resetApplicationActionState",
    }),
    handleCall() {
      this.refuseApplication({ application: this.application });
    },

    handleClose() {
      this.resetResponse();
      this.close();
    },
  },
};
</script>

<style>
</style>
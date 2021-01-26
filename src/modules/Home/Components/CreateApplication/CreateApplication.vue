<template>
  <v-row justify="center">
    <LoadingDialog v-if="loading" :dialog="dialog" />

    <v-dialog v-else v-model="dialog" persistent max-width="610px">
      <v-card v-if="existApplication !== undefined">
        <v-card-title>
          <span class="headline">{{existApplication}}</span>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="handleCloseOverride()">Fermer</v-btn>
        </v-card-actions>
      </v-card>

      <ControlResponseContent
        v-else
        :responseType="responseType"
        :handleClose="handleCloseOverride"
        :property="property"
      >
        <v-card v-if="isAuth">
          <v-card-title>
            <span class="headline">Voulez-vous faire une proposition ?</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <Property :property="property" />
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="handleCloseOverride()">Fermer</v-btn>
            <v-btn color="blue darken-1" text @click="handleCreate()">Continuer</v-btn>
          </v-card-actions>
        </v-card>

        <NoAuth v-else :handleClose="handleCloseOverride" />
      </ControlResponseContent>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
import LoadingDialog from "@/core/Components/LoadingDialog";

import NoAuth from "./NoAuth";
import Property from "../Property";
import ControlResponseContent from "./ControlResponseContent";

import applicationService from "../../Services/application-front.service";

export default {
  name: "CreateApplication",

  props: ["property", "dialog", "handleClose", "existApplication"],
  components: { NoAuth, Property, LoadingDialog, ControlResponseContent },

  data() {
    return {
      loading: false,
      responseType: "",
    };
  },

  computed: {
    ...mapGetters({
      isAuth: "auth/isFullAuth",
      userId: "auth/apollo_getUserId",
    }),
  },

  methods: {
    handleCreate() {
      this.$data.loading = true;
      const { price, id } = this.property;

      applicationService
        .createApplication(price, id, this.userId)
        .then(() => {
          this.$data.responseType = "SUCCESS";
        })
        .catch(() => {
          this.$data.responseType = "FAILURE";
        })
        .finally(() => (this.$data.loading = false));
    },

    handleCloseOverride() {
      this.handleClose();
      this.$data.responseType = "";
    },
  },
};
</script>

<style scoped>
.v-text-field__slot input {
  border: none !important;
}
</style>
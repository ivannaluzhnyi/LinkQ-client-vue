<template>
  <v-row justify="center">
    <LoadingDialog v-if="loading" :dialog="dialog" />

    <v-dialog v-else v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" outlined rounded text>Acheter ou louer</v-btn>
      </template>
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
          <v-btn color="blue darken-1" text @click="handleClose()">Fermer</v-btn>
          <v-btn color="blue darken-1" text @click="handleCreate()">Continuer</v-btn>
        </v-card-actions>
      </v-card>

      <NoAuth v-else :handleClose="handleClose" />
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

import NoAuth from "./NoAuth";
import Property from "../Property";
import LoadingDialog from "./LoadingDialog";

import applicationService from "../../Services/application-front.service";

export default {
  name: "CreateApplication",

  props: ["property", "dialog", "handleClose"],
  components: { NoAuth, Property, LoadingDialog },

  data() {
    return {
      loading: false,
    };
  },

  updated() {
    console.log("this =+> ", this.property);
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
        .then((response) => {
          console.log("response ==> ", response);
        })
        .catch((error) => {
          console.log("error ==> ", error);
        })
        .finally(() => (this.$data.loading = false));
    },
  },
};
</script>

<style scoped>
.v-text-field__slot input {
  border: none !important;
}
</style>
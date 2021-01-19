<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
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
          <v-btn color="blue darken-1" text @click="dialog = false">Continuer</v-btn>
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

export default {
  name: "CreateApplication",

  props: ["property", "dialog", "handleClose"],
  components: { NoAuth, Property },

  //   data() {
  //     return {
  //       property: this.property,
  //     };
  //   },

  updated() {
    console.log("this =+> ", this.property);
  },

  computed: {
    ...mapGetters({
      isAuth: "auth/isFullAuth",
    }),
  },
};
</script>

<style scoped>
.v-text-field__slot input {
  border: none !important;
}
</style>
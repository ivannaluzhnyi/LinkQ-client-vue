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
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left"></th>
                    <th class="text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ property.title }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="handleClose()">Fermer</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>

      <v-card v-else>
        <v-card-title>
          <span class="headline">Création de proposition</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <h3>Veuillez vous connectez pour créer une proposition.</h3>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="handleClose()">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CreateApplication",

  props: ["property", "dialog", "handleClose"],

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
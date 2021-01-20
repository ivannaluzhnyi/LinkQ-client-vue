<template>
  <v-dialog v-model="dialog" max-width="290">
    <v-card>
      <v-card-title v-if="type==='accept'" class="headline">Confirmation</v-card-title>
      <v-card-title v-else class="headline">Refuser</v-card-title>

      <v-card-text v-if="type==='accept'">Voulez-vous vraiment accepter la demande ?</v-card-text>
      <v-card-text v-else>Voulez-vous vraiment refuser la demande</v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="green darken-1" text @click="close()">Annuler</v-btn>
        <v-btn color="green darken-1" text @click="handleCall()">
          <span v-if="type==='accept'">Confirmer</span>
          <span v-else>Refuser</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ApplicationActionsModal",

  props: ["dialog", "type", "close"],

  methods: {
    handleCall() {
      this.close();
    },
  },
};
</script>

<style>
</style>
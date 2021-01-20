<template>
  <v-card>
    <v-card-title>
      <span class="headline">Création d'une demande</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <h3>Veuillez-vous connecter pour créer une proposition.</h3>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="handleClose()">Fermer</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "NoAuth",
  props: ["handleClose"],
};
</script>


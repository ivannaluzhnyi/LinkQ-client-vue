<template>
  <div>
    <div v-if="successCondition || errorCondition ">
      <v-card>
        <v-card-title>
          <span class="headline">Création d'une demande</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <div v-if="responseType === 'SUCCESS' ">
              <v-alert outlined type="success" text>{{successMessage}}.</v-alert>
            </div>
            <v-alert v-else text prominent type="error" icon="mdi-cloud-alert">{{failureMessage}}</v-alert>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="handleClose()">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: "ControlResponseContent",
  props: [
    "successCondition",
    "errorCondition",
    "successMessage",
    "failureMessage",
  ],
};
</script>

<style>
</style>
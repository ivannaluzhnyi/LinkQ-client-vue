<template>
  <v-dialog v-model="dialog" hide-overlay persistent width="350">
    <v-card color="primary" dark>
      <v-card-text>
        Veuillez patienter
        <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["dialog"],
};
</script>


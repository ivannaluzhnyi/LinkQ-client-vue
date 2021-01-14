<template>
  <v-app id="app">

    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
require("@/assets/styles/forms.css");

export default {
  created() {},
  computed: {
    ...mapGetters({
      isAuthenticated: "auth/isAuthenticated",
    }),
  },

  methods: {},
};
</script>
 
<template>
  <v-app id="app">
    <Navbar />

    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/core/Components/Footer/Footer";
import Navbar from "@/core/Components/Navbar/Navbar";
import { mapGetters } from "vuex";
require("@/assets/styles/forms.css");

export default {
  components: { Navbar, Footer },

  methods: {
    ...mapGetters({
      // is
    }),
  },
};
</script>

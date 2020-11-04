<template>
  <v-app id="app">
    <Navbar />

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/core/Components/Footer/Footer";
import Navbar from "@/core/Components/Navbar/Navbar";

export default {
  components: {Navbar, Footer}
};
</script>

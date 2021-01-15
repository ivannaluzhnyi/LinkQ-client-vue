
<template>
  <div id="main-layout">
    <Navbar />
    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default {
  name: "Layout",
  components: { Navbar, Footer },
};
</script>
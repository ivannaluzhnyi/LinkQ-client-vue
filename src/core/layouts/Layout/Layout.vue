
<template>
  <div id="main-layout">
    <Navbar />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer";
import Navbar from "./Navbar";
export default {
  name: "Layout",
  components: { Navbar, Footer },
};
</script>
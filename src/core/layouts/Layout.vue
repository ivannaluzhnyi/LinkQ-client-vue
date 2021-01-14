
<template>
  <div id="main-layout">
    <Navbar />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Footer from "@/core/Components/Footer/Footer";
import Navbar from "@/core/Components/Navbar/Navbar";
export default {
  name: "Layout",
  components: { Navbar, Footer },
};
</script>
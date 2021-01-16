<template>
  <div id="admin-layout">
    <Header v-model="expandOnHover" />
    <Sidebar :expand-on-hover.sync="expandOnHover"></Sidebar>

    <v-main>
      <v-container class="fill-height" fluid>
        <router-view />
      </v-container>
    </v-main>

    <Footer />
  </div>
</template>


<script>
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import { mapState, mapMutations } from "vuex";

export default {
  name: "Admin",
  components: {
    Header,
    Sidebar,
    Footer,
  },

  props: {
    source: String,
  },
  data: () => ({
    expandOnHover: false,
  }),
  computed: {
    ...mapState({
      Customizer_drawer: "adminSettings/Customizer_drawer",
    }),
  },

  methods: {
    ...mapMutations({
      setCustomizerDrawer: "adminSettgis/SET_CUSTOMIZER_DRAWER",
    }),
  },
};
</script>
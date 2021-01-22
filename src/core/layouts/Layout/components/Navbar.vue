<template>
  <div>
    <v-container>
      <v-app-bar app fixed :hide-on-scroll="isMobile" color="white">
        <v-toolbar-items class="hidden-sm-and-down" id="module-nav-links">
          <v-btn
            text
            small
            v-for="(navlink, index) in navlinks"
            :key="index"
            @click="redirect(navlink.href)"
          >{{ navlink.text }}</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <auth-dialog id="auth-dialog-activator" />
        </v-toolbar-items>
      </v-app-bar>
    </v-container>
  </div>
</template>

<script>
import { EventBus } from "@/core/utils/eventBus";
import AuthDialog from "@/modules/Auth/Components/AuthDialog";

export default {
  name: "Navbar",
  components: { AuthDialog },
  data: () => {
    return {
      navlinks: [],
    };
  },
  created() {
    EventBus.$on("page-change-navlinks", (navlinks) => {
      this.navlinks = navlinks;
    });
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
  // :href="navlink.href"

  methods: {
    redirect(href) {
      this.$router.push(href);
    },
  },
};
</script>

<style scoped>
#module-nav-links > button.active {
  border-bottom: #0d5aa7 2px solid;
}
</style>

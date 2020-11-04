<template>
  <div>
    <v-container>
    <v-app-bar
        app
        fixed
        :hide-on-scroll="isMobile"
        color="white">

      <v-toolbar-items class="hidden-sm-and-down" id="module-nav-links">
        <v-btn text small v-for="(navlink, index) in navlinks" :key="index">
          {{ navlink.text }}
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text small>
          <v-icon>mdi-account</v-icon>
          My Account
        </v-btn>
      </v-toolbar-items>

    </v-app-bar>
    </v-container>
  </div>
</template>

<script>
import {EventBus} from "@/core/utils/eventBus";

export default {
  name: "Navbar",
  data: () => {
    return {
      navlinks: []
    }
  },
  created() {
    EventBus.$on('page-change-navlinks', navlinks => {
      this.navlinks = navlinks
    })
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    }
  }
}
</script>

<style scoped>
#module-nav-links > button.active {
  border-bottom: #0d5aa7 2px solid;
}
</style>

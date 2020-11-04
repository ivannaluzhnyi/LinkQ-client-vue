<template>
  <div>
    <v-container>
    <v-app-bar
        app
        fixed
        :hide-on-scroll="isMobile"
        color="white">

      <v-toolbar-items class="hidden-sm-and-down" id="module-nav">
        <v-btn text small href="#find">Find your flat</v-btn>
        <v-btn text small href="#featured">Featured flats</v-btn>
        <v-btn text small href="#about">About</v-btn>
        <v-btn text small href="#contact">Contact</v-btn>
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
export default {
  name: "Navbar",
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    }
  }
}
</script>

<style scoped>
#module-nav > button.active {
  border-bottom: #0d5aa7 2px solid;
}
</style>

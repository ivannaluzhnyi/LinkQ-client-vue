<template>
  <v-app id="app" :class="`${!$vuetify.breakpoint.smAndDown ? 'full-sidebar' : 'mini-sidebar'}`">
    <router-view />
  </v-app>
</template>

<script>
import("@/assets/styles/forms.css");

export default {
  name: "App",
};
</script>
 
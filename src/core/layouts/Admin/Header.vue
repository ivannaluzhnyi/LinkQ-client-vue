<template>
  <v-app-bar app clipped-left clipped-right color="primary" dark>
    <v-toolbar-title class="align-center d-flex">
      <span class="logo-text ml-2">
        <h4>LEGEEMO ADMIN</h4>
      </span>
    </v-toolbar-title>
    <v-app-bar-nav-icon
      class="d-block d-md-none"
      @click="$vuetify.breakpoint.smAndDown ? setSidebarDrawer(!Sidebar_drawer) : $emit('input', !value)"
    />
    <v-spacer />
    <!---right part -->
    <v-btn dark color="success" href="/">Home</v-btn>
    <v-menu bottom left transition="scale-transition">
      <template v-slot:activator="{ on }">
        <v-btn dark icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in userprofile" :key="i" @click="href(item)">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
// Utilities
import { mapMutations, mapActions } from "vuex";
export default {
  name: "Header",

  components: {},

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    userprofile: [
      { title: "My Profile", type: "profile" },
      { title: "Account Setting", type: "account_settings" },
      { title: "Logout", type: "logout" },
    ],
    href({ type }) {
      switch (type) {
        case "logout":
          return this.logout();

        default:
          break;
      }
      return undefined;
    },
  }),

  computed: {
    Sidebar_drawer() {
      return this.$store.state.adminSettings.Sidebar_drawer;
    },
  },

  methods: {
    ...mapMutations({
      setSidebarDrawer: "adminSettings/SET_SIDEBAR_DRAWER",
    }),
    ...mapActions({
      logout: "auth/logout",
    }),
  },
};
</script>
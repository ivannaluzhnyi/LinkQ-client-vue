<template>
  <v-menu bottom left transition="scale-transition">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on" class="btn-menu">
        <v-badge left :content="badgeMessage" :value="badgeMessage" color="green" overlap>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-badge>
      </v-btn>
    </template>

    <v-list>
      <v-list-item v-for="(item, i) in navigation" :key="i" @click="href(item)">
        <v-list-item-title>
          <v-icon v-if="item.type === 'logout'">mdi-logout</v-icon>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapActions } from "vuex";

// const test = {
//   actionType: "UPDATE",
//   application: {
//     id: 5,
//     offer: 1151486,
//     status: "ACCEPTED",
//     __typename: "Application",
//   },
//   __typename: "ApplicationSubscription",
// };

import { APPLICATION_SUBSCRIPTION } from "@/graphql/subscriptions";
export default {
  data() {
    return {
      navigation: [
        { title: "Mes demandes", type: "application" },
        { title: "Mes contrats", type: "contracts" },
        { title: "Mes propriétées", type: "properties" },
        { title: "Se déconnecter", type: "logout" },
      ],

      badgeMessage: 1,
    };
  },

  methods: {
    ...mapActions({
      logout: "auth/logout",
    }),

    href({ type }) {
      switch (type) {
        case "logout":
          return this.logout();

        case "application":
          this.$router.push("/application");
          return;

        case "properties":
          this.$router.push("/properties");
          return;

        case "contracts":
          this.$router.push("/contracts");
          return;
        default:
          break;
      }
      return undefined;
    },
  },

  apollo: {
    // Subscriptions
    $subscribe: {
      // When a tag is added
      application: {
        query: APPLICATION_SUBSCRIPTION,
        // Reactive variables
        variables: {},

        // Result hook
        // Don't forget to destructure `data`
        async result({ data }) {
          console.log("subscription  application==> ", data);
        },
      },
    },
  },
};
</script>

<style scoped>
.btn-menu {
  width: 35px !important;
  height: 35px !important;
}
</style>
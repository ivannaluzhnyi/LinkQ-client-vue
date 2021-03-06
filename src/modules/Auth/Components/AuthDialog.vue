<template>
  <v-row justify="center">
    <v-dialog v-model="authDialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <div v-show="isAuth" id="auth-dialog-activator-button">
          <v-btn v-show="!isAdmin" @click="redirectProfil" text small>
            <v-icon>mdi-account</v-icon>Profil
          </v-btn>

          <v-btn v-show="isAdmin" @click="redirect" text small>
            <v-badge :content="commingData" :value="commingData" color="green" overlap>
              <v-icon>mdi-account</v-icon>
              {{email}}
            </v-badge>
          </v-btn>

          <Menu />
        </div>
        <v-btn
          v-show="!isAuth"
          id="auth-dialog-activator-button"
          text
          small
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-account</v-icon>Se connecter
        </v-btn>
      </template>

      <v-tabs v-model="tab" show-arrows icons-and-text dark grow>
        <v-tabs-slider color="purple darken-4"></v-tabs-slider>

        <v-tab v-for="(tab, index) in tabs" :key="index">
          <v-icon large>{{ tab.icon }}</v-icon>
          <div class="caption py-1">{{ tab.name }}</div>
        </v-tab>

        <v-tab-item>
          <v-card class="px-4">
            <v-card-text>
              <sign-in-form />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card class="px-4">
            <v-card-text>
              <sign-up-form />
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-dialog>
  </v-row>
</template>

<script>
import SignUpForm from "@/modules/Auth/Components/Forms/SignUp";
import SignInForm from "@/modules/Auth/Components/Forms/SignIn";

import { APPLICATION_SUBSCRIPTION } from "@/graphql/subscriptions";

import Menu from "./Menu";
import { mapGetters } from "vuex";

export default {
  name: "AuthDialog",
  components: { SignInForm, SignUpForm, Menu },
  data: () => ({
    authDialog: false,
    tab: 0,
    tabs: [
      { name: "Login", icon: "mdi-account" },
      { name: "Register", icon: "mdi-account-outline" },
    ],

    commingData: 0,
  }),
  computed: {
    ...mapGetters({
      isAuth: "auth/isAuthenticated",
      isAdmin: "auth/isAdmin",
      email: "auth/getUserEmail",
    }),
  },

  watch: {
    isAuth(next) {
      if (next) {
        this.$data.authDialog = false;
      }
    },
  },

  methods: {
    redirect() {
      if (this.isAuth) {
        this.$router.push("/admin");
      }
    },
    redirectProfil() {
      if (this.isAuth) {
        this.$router.push("/profil");
      }
    },
  },

  apollo: {
    $subscribe: {
      application: {
        query: APPLICATION_SUBSCRIPTION,
        result() {
          this.$data.commingData = this.$data.commingData + 1;
        },
      },
    },
  },
};
</script>

<style scoped>
#auth-dialog-activator-button {
  margin-top: 27.5px;
}
</style>

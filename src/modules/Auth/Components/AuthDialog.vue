<template>
  <v-row justify="center">
    <v-dialog v-model="authDialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <div v-show="isAuth" id="auth-dialog-activator-button">
          <v-btn @click="redirectProfil" text small>
            <v-icon>mdi-account</v-icon>Profil
          </v-btn>

          <v-btn v-show="isAdmin" @click="redirect" text small>
            <v-icon>mdi-account</v-icon>
            {{email}}
          </v-btn>

          <v-menu bottom left transition="scale-transition">
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on" class="btn-menu">
                <v-icon>mdi-dots-vertical</v-icon>
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AuthDialog",
  components: { SignInForm, SignUpForm },
  data: () => ({
    authDialog: false,
    tab: 0,
    tabs: [
      { name: "Login", icon: "mdi-account" },
      { name: "Register", icon: "mdi-account-outline" },
    ],

    navigation: [
      { title: "Mes demandes", type: "application" },
      { title: "Mes contrats", type: "contract" },
      { title: "Se déconnecter", type: "logout" },
    ],
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

    ...mapActions({
      logout: "auth/logout",
    }),

    href({ type }) {
      switch (type) {
        case "logout":
          return this.logout();

        default:
          break;
      }
      return undefined;
    },
  },
};
</script>

<style scoped>
#auth-dialog-activator-button {
  margin-top: 27.5px;
}

.btn-menu {
  width: 35px !important;
  height: 35px !important;
}
</style>

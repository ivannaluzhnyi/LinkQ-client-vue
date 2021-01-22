<template>
  <v-row justify="center">

    <v-dialog v-model="authDialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <div v-if="isAuth" id="auth-dialog-activator-button">
        <v-btn  @click="redirect"  text small>
          <v-icon>mdi-account</v-icon>
          {{email}}
        </v-btn>

          <v-btn  @click="redirect"  text small>
            <v-icon>mdi-account</v-icon>
              Profil
            </v-btn>
          </div>
        <v-btn v-else id="auth-dialog-activator-button" text small v-bind="attrs" v-on="on">
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
import { mapGetters } from "vuex";

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
  }),

  computed: {
    ...mapGetters({
      isAuth: "auth/isAuthenticated",
      email: "auth/getUserEmail",
    }),
  },

  methods: {
    redirect() {
      if (this.isAuth) {
        this.$router.push("/admin");
      }
    },
  },
};
</script>

<style scoped>
#auth-dialog-activator-button {
  margin-top: 27.5px;
}
</style>

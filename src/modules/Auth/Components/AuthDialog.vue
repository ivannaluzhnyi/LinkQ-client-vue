<template>
  <v-row justify="center">
    <v-dialog
        v-model="authDialog"
        max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn id="auth-dialog-activator-button" text small v-bind="attrs" v-on="on">
          <v-icon>mdi-account</v-icon>
          My Account
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
              <sign-in/>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card class="px-4">
            <v-card-text>
              <sign-up/>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-dialog>
  </v-row>
</template>

<script>
import SignIn from "@/modules/Auth/Components/Forms/SignIn";
import SignUp from "@/modules/Auth/Components/Forms/SignUp";
export default {
  name: "AuthDialog",
  components: {SignUp, SignIn},
  data: () => ({
    authDialog: false,
    tab: 0,
    tabs: [
      {name:"Login", icon:"mdi-account"},
      {name:"Register", icon:"mdi-account-outline"}
    ],
  })
}
</script>

<style scoped>
#auth-dialog-activator-button {
  margin-top: 14px;
}
</style>

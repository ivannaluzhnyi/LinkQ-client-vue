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
              <v-form ref="loginForm">
                <v-row>
                  <v-col cols="12">
                    <v-text-field label="E-mail" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field name="input-10-1" label="Password" hint="At least 8 characters" counter></v-text-field>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6" xsm="12">
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                    <v-btn x-large block> Login </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card class="px-4">
            <v-card-text>
              <v-form ref="registerForm">
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field label="First Name" maxlength="20" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field label="Last Name" maxlength="20" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="E-mail" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field name="input-10-1" label="Password" hint="At least 8 characters" counter></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field block name="input-10-1" label="Confirm Password" counter></v-text-field>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                    <v-btn x-large block color="success">Register</v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "AuthDialog",
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

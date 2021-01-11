<template>
  <Vuemik :initial-values="{}" :on-submit="signIn">
    <form ref="loginForm">
      <v-row>
        <v-col cols="12">
          <label for="input__signin_email" class="col-12"> Email </label>
          <Field
            component="vuemik-text"
            name="email"
            id="input__signin_email"
          />
        </v-col>
        <v-col cols="12">
          <label for="input__signin_passwd" class="col-12"> Password </label>
          <Field
            component="vuemik-text"
            name="password"
            id="input__signin_passwd"
          />
        </v-col>
        <v-col class="d-flex" cols="12" sm="6" xsm="12"> </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </form>
    <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
      <v-btn x-large block color="success"> Login</v-btn>
    </v-col>
  </Vuemik>
</template>

<script>
// import Vuemik from "@/core/Components/Vuemik/Vuemik";
// import Field from "@/core/Components/Vuemik/Field";

import Vuemik from "@/libs/vuemik";

export default {
  name: "SignInForm",
  components: {
    Field,
    Vuemik,
  },
  created() {
    this.signIn();
  },
  methods: {
    signIn() {
      console.log("send form");
      fetch("https://localhost:8443/authentication_token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          email: "admin@lygeemo.fr",
          password: "secret",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("authenticated", data);
        });
    },
  },
};
</script>

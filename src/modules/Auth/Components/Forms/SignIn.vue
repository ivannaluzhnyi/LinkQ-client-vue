<template>
  <Vuemik
    :initialValues="{
      email: '',
      password: '',
    }"
    :onSubmit="signIn"
    v-slot="{ handleSubmit }"
  >
    <v-row>
      <v-col cols="12">
        <label for="input__signin_email" class="col-12">Email</label>
        <Field component="input" name="email" id="input__signin_email" />
      </v-col>
      <v-col cols="12">
        <label for="input__signin_passwd" class="col-12">Password</label>
        <Field component="input" type="password" name="password" id="input__signin_passwd" />
      </v-col>
      <v-col class="d-flex" cols="12" sm="6" xsm="12"></v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
      <v-btn @click="handleSubmit" x-large block color="success">Login</v-btn>
    </v-col>
  </Vuemik>
</template>

<script>
import { Vuemik, Field } from "@/libs/vuemik";

export default {
  name: "SignInForm",
  components: {
    Field,
    Vuemik,
  },

  methods: {
    signIn(props) {
      // TODO AUTH
      console.log("send form ==> ", props);
      //     fetch("https://localhost:8443/authentication_token", {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //         accept: "application/json",
      //       },
      //       body: JSON.stringify({
      //         email: "admin@lygeemo.fr",
      //         password: "secret",
      //       }),
      //     })
      //       .then((response) => response.json())
      //       .then((data) => {
      //         console.log("authenticated", data);
      //       });
    },
  },
};
</script>

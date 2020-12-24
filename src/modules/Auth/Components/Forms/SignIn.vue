<template>
  <Vuemik>
    <form ref="loginForm">
      <v-row>
        <v-col cols="12">
          <label for="input__signin_email" class="col-12">
            Email
          </label>
          <Field
              component="vuemik-text"
              name="email"
              id="input__signin_email"
          />
        </v-col>
        <v-col cols="12">
          <label for="input__signin_passwd" class="col-12">
            Password
          </label>
          <Field
              component="vuemik-text"
              name="password"
              id="input__signin_passwd"
          />
        </v-col>
        <v-col class="d-flex" cols="12" sm="6" xsm="12">
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
          <v-btn x-large block> Login </v-btn>
        </v-col>
      </v-row>
    </form>
  </Vuemik>
</template>

<script>
import Vuemik from "@/core/Components/Vuemik/Vuemik";
import Field from "@/core/Components/Vuemik/Field";
export default {
  name: "SignInForm",
  components: {Field, Vuemik}
}
</script>

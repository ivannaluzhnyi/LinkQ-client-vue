<template>
  <Vuemik>
  <form ref="registerForm">
    <v-row>
      <v-col cols="12" sm="6" md="6">
        <label for="input__signup_fname" class="col-12">
          First name
        </label>
        <Field
         component="vuemik-text"
         name="fname"
         id="input__signup_fname"
        />
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <label for="input__signup_lname" class="col-12">
          Last name
        </label>
        <Field
            component="vuemik-text"
            name="lname"
            id="input__signup_lname"
        />
      </v-col>
      <v-col cols="12">
        <label for="input__signup_email" class="col-12">
          Email
        </label>
        <Field
            component="vuemik-text"
            name="email"
            id="input__signup_email"
        />
      </v-col>
      <v-col cols="12">
        <label for="input__signup_passwd" class="col-12">
          Password
        </label>
        <Field
            component="vuemik-text"
            name="password"
            id="input__signup_passwd"
        />
      </v-col>
      <v-col cols="12">
        <label for="input__signup_confirm_passwd" class="col-12">
          Confirm password
        </label>
        <Field
            component="vuemik-text"
            name="confirm_password"
            id="input__signup_confirm_passwd"
        />
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
        <v-btn x-large block color="success">Register</v-btn>
      </v-col>
    </v-row>
  </form>
  </Vuemik>
</template>

<script>
import Vuemik from "@/core/Components/Vuemik/Vuemik";
import Field from "@/core/Components/Vuemik/Field";
export default {
name: "SignUp",
  components: {Field, Vuemik}
}
</script>

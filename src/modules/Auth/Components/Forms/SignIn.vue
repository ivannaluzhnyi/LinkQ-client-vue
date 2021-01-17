<template>
  <Vuemik
    :initialValues="{
      email: 'admin@lygeemo.fr',
      password: 'secret',
    }"
    :onSubmit="signIn"
    :validationSchema="SignInSchema"
    v-slot="{ handleSubmit, errors }"
  >
    <v-row>
      <v-col cols="12">
        <label for="input__signin_email" class="col-12">Email</label>
        <Field component="input" name="email" id="input__signin_email" />
        <p v-if="errors.email" class="alert-error">{{errors.email[0]}}</p>
      </v-col>
      <v-col cols="12">
        <label for="input__signin_passwd" class="col-12">Password</label>
        <Field component="input" type="password" name="password" id="input__signin_passwd" />
        <p v-if="errors.password" class="alert-error">{{errors.password[0]}}</p>
      </v-col>
      <v-col class="d-flex" cols="12" sm="6" xsm="12"></v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
      <v-btn :loading="loading" @click="handleSubmit" x-large block color="success">Login</v-btn>
    </v-col>
  </Vuemik>
</template>

<script>
import { Vuemik, Field } from "@/libs/vuemik";
import * as Yup from "yup";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SignInForm",
  components: {
    Field,
    Vuemik,
  },
  data: () => ({
    SignInSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Password is required"),
    }),
  }),

  computed: {
    ...mapGetters({
      loading: "auth/isLoading",
    }),
  },

  methods: {
    ...mapActions({ login: "auth/login" }),

    signIn(props) {
      if (props.email && props.password) {
        this.login(props);
      }
    },
    debug(event) {
      console.log(event.target.name);
    },
  },
};
</script>


<style  scoped>
.alert-error {
  margin-top: 10px;
  color: red;
}
</style>

<template>
  <Vuemik
    :initial-values="initialValues"
    :onSubmit="SignUpForm"
    :validationSchema="SignUpschema"
    v-slot="{ handleSubmit, errors }"
  >
    <form ref="registerForm">
      <v-row>
        <v-col cols="12">
          <label for="input__signup_lname" class="col-12"> Last name </label>

          <v-col cols="12" sm="6" md="6">
            <Field
              component="input"
              name="lname"
              id="input__signup_lname"
              placeholder="Last name"
            />
            <p v-if="errors.lname" class="alert-error">{{ errors.lname[0] }}</p>
          </v-col>
          <label for="input__signup_fname" class="col-12"> First name </label>
          <v-col cols="12" sm="6" md="6">
            <Field
              component="input"
              name="fname"
              id="input__signup_fname"
              placeholder="First name"
            />
            <p v-if="errors.fname" class="alert-error">{{ errors.fname[0] }}</p>
          </v-col>
          <label for="input__signup_email" class="col-12"> Email </label>
          <v-col cols="12" sm="6" md="6">
            <Field
              component="input"
              name="email"
              id="input__signup_email"
              placeholder="Email"
            />
            <p v-if="errors.email" class="alert-error">{{ errors.email[0] }}</p>
          </v-col>
          <label for="input__signup_password" class="col-12"> Password </label>
          <v-col cols="12" sm="6" md="6">
            <Field
              component="input"
              name="password"
              id="input__signup_password"
              type="password"
              placeholder="password"
            />
            <p v-if="errors.password" class="alert-error">
              {{ errors.password[0] }}
            </p>
          </v-col>
          <label for="input__signup_confirm_password" class="col-12">
            Confirm Password
          </label>
          <v-col cols="12" sm="6" md="6">
            <Field
              component="input"
              name="confirm_password"
              id="input__signup_confirm_password"
              type="password"
              placeholder="Confirm password"
            />
            <p v-if="errors.confirm_password" class="alert-error">
              {{ errors.confirm_password[0] }}
            </p>
          </v-col>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
          <v-btn @click="handleSubmit" x-large block color="success"
            >Register</v-btn
          >
        </v-col>
      </v-row>
    </form>
  </Vuemik>
</template>

<script>
import * as Yup from "yup";
import { Vuemik, Field } from "@/libs/vuemik";
export default {
  name: "SignUpForm",
  components: { Field, Vuemik },
  data: () => ({
    initialValues: {},
    SignUpschema: Yup.object().shape({
      lname: Yup.string().required(),
      fname: Yup.string().required(),
      email: Yup.string().required().email(),
      password: Yup.string().required().min(8),
      confirm_password: Yup.string()
      .oneOf([Yup.ref('password'), null])
     .required('Password confirm is required')
    }),
  }),
  methods: {
    SignUpForm(props) {
      console.log("props :>> ", props);
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


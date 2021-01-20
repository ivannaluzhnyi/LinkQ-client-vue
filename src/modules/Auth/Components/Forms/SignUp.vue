<template>
  <Vuemik
    :initial-values="initialValues"
    :onSubmit="SignUpForm"
    :validationSchema="SignUpschema"
    v-slot="{ handleSubmit, errors }"
  >
    <form ref="registerForm">
      <v-row>
        <v-col cols="6">
          <label for="input__signup_lastname" class="col-12"> Last name </label>
          <Field
            component="input"
            name="lastname"
            id="input__signup_lastname"
            placeholder="Last name"
          />
          <p v-if="errors.lastname" class="alert-error">
            {{ errors.lastname[0] }}
          </p>
        </v-col>
        <v-col cols="6">
          <label for="input__signup_firstname" class="col-12">
            First name
          </label>
          <Field
            component="input"
            name="firstname"
            id="input__signup_firstname"
            placeholder="First name"
          />
          <p v-if="errors.firstname" class="alert-error">
            {{ errors.firstname[0] }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <label for="input__signup_email" class="col-12"> Email </label>
          <Field
            component="input"
            name="email"
            id="input__signup_email"
            placeholder="Email"
          />
          <p v-if="errors.email" class="alert-error">{{ errors.email[0] }}</p>
        </v-col>
        <v-col cols="6">
          <label for="input__signup_password" class="col-12"> Salary </label>
          <Field
            component="input"
            type="number"
            name="salary"
            id="input__signup_salary"
            placeholder="salary"
          />
          <p v-if="errors.salary" class="alert-error">
            {{ errors.salary[0] }}
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <label for="input__signup_password" class="col-12"> Password </label>
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
        <v-col cols="6">
          <label for="input__signup_plainPassword" class="col-12">
            Confirm Password
          </label>
          <Field
            component="input"
            name="plainPassword"
            id="input__signup_plainPassword"
            type="password"
            placeholder="Confirm password"
          />
          <p v-if="errors.plainPassword" class="alert-error">
            {{ errors.plainPassword[0] }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex ml-auto" cols="4" sm="3" xsm="12">
          <v-btn @click="handleSubmit" x-large block color="success"
            >Register</v-btn
          >
        </v-col>
        <div v-if="message" class="alert-error">
          {{ message }}
        </div>
      </v-row>
    </form>
  </Vuemik>
</template>

<script>
import * as Yup from "yup";
import { mapActions, mapGetters } from "vuex";
import { Vuemik, Field } from "@/libs/vuemik";

export default {
  name: "SignUpForm",
  components: { Field, Vuemik },
  computed: {
    ...mapGetters({
      message: "auth/getMessage",
    }),
  },
  data: () => ({
    initialValues: {},
    SignUpschema: Yup.object().shape({
      lastname: Yup.string().required(),
      firstname: Yup.string().required(),
      email: Yup.string().required().email(),
      salary: Yup.number().integer().required().min(30000, "T'es pauvre lol"),
      password: Yup.string().required().min(8),
      plainPassword: Yup.string()
        .oneOf([Yup.ref("password"), null])
        .required("Password confirm is required"),
    }),
  }),
  methods: {
    ...mapActions({ signUp: "auth/signUp" }),
    SignUpForm(props) {
      this.signUp(props);
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


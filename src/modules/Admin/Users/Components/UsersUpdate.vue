<template>
  <v-container>
    <h2>
      Update User
      <v-btn color="primary" @click="swapComponent('usersAll')" type="submit">Return</v-btn>
    </h2>
    <v-card class="elevation-2">
      <v-container>
        <Vuemik
            :initialValues="{
            birthdate: user.birthdate,
            email: user.email,
            firstname: user.firstname,
            guarantor: user.guarantor,
            id: user.id,
            is_active: user.is_active,
            lastname: user.lastname,
            property: user.property,
            salary: user.salary,
          }"
            :onSubmit="updateUser"
            :validationSchema="UserSchema"
            v-slot="{ handleSubmit, errors }"
        >
          <v-row>
            <v-col cols="6">
              <h4>User</h4>
              <v-col cols="12">
                <label for="input__user_description" class="col-12">email</label>
                <Field
                    class="col"
                    component="input"
                    name="email"
                    id="input__user_description"
                />
                <p v-if="errors.email" class="alert-error">{{ errors.email[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__user_price" class="col-12">firstname</label>
                <Field class="col" component="input" name="firstname" id="input__user_price" />
                <p v-if="errors.firstname" class="alert-error">{{ errors.firstname[0] }}</p>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6" xsm="12"></v-col>
            </v-col>
            <v-col cols="6">
              <h4>Features</h4>
              <v-col cols="12">
                <label for="input__feature_size" class="col-12">lastname</label>
                <Field class="col" component="input" name="lastname" id="input__feature_size" />
                <p v-if="errors.lastname" class="alert-error">{{ errors.lastname[0] }}</p>
              </v-col>
            </v-col>
          </v-row>
          <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
            <v-btn class="col" @click="handleSubmit" x-large block color="primary">Submit</v-btn>
          </v-col>
        </Vuemik>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import { http } from "@/core/http";
import { Field, Vuemik } from "@/libs/vuemik";
import * as Yup from "yup";

export default {
  name: "UsersUpdate",
  components: {
    Field,
    Vuemik,
  },
  props: ["swapComponent", "user"],
  computed: {
    proper() {
      console.log("users Update | user props ==> ", this.user);
      return 0;
    },
  },
  data: () => ({
    UserSchema: Yup.object().shape({
      firstname: Yup.string().required("firstname is required"),
      lastname: Yup.string().required("lastname is required"),
      email: Yup.string().required("email is required")
    }),
  }),
  methods: {
    updateUser(props) {
      this.putUser(props);
    },
    putUser(props){
      console.log('put users');
      http.put(`users/${this.user.id}`, {
        email: props.email,
        lastname: props.lastname,
        firstname: props.firstname,
        plainPassword: "secret"
      })
          .then((response) => {
            console.log(response);
          }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<style scoped>
</style>

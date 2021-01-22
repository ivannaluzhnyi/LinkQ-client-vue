<template>
  <v-container>
    <h2>
      Profil Update
    </h2>
    <v-card class="elevation-2">
      <v-container>
        <Vuemik
            :initialValues="{
            birthdate: UserData.birthdate,
            email: UserData.email,
            firstname: UserData.firstname,
            guarantor: UserData.guarantor,
            id: UserData.id,
            is_active: UserData.is_active,
            lastname: UserData.lastname,
            property: UserData.property,
            salary: UserData.salary,
          }"
            :onSubmit="updateUser"
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
                    :value="UserData.email"
                />
                <p v-if="errors.email" class="alert-error">{{ errors.email[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__user_price" class="col-12">firstname</label>
                <Field class="col" component="input" name="firstname" id="input__user_price" :value="UserData.firstname"/>
                <p v-if="errors.firstname" class="alert-error">{{ errors.firstname[0] }}</p>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6" xsm="12"></v-col>
            </v-col>
            <v-col cols="6">
              <h4>Features</h4>
              <v-col cols="12">
                <label for="input__feature_size" class="col-12">lastname</label>
                <Field class="col" component="input" name="lastname" id="input__feature_size" :value="UserData.lastname" />
                <p v-if="errors.lastname" class="alert-error">{{ errors.lastname[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__feature_size" class="col-12">Password Confirmation</label>
                <Field class="col" component="input" name="plainPassword" id="input__plainPassword" placeholder="For confirm you're change " />
                <p v-if="errors.plainPassword" class="alert-error">{{ errors.plainPassword[0] }}</p>
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
import {mapGetters} from "vuex";

export default {
  name: "UsersUpdate",
  components: {
    Field,
    Vuemik,
  },
  beforeMount(){
    this.getActualUser(this.user.username);
  },
  props: ["swapComponent", "user"],
  computed: {
    proper() {
      return 0;
    },
      ...mapGetters({
        user: "auth/getUser",
      }),
  },
  data: () => ({
    UserData: []
  }),
  methods: {
    updateUser(props) {
      this.putUser(props);
    },
    getActualUser($email){
      http.get(`users?email=${$email}`)
          .then((response) => {
            this.UserData = response.data[0];
            console.log(response.data[0]);
          }).catch((error) => {
        console.log(error);
      });
    },
    putUser(props){
      console.log(this.UserData.id)
      http.put(`users/${this.UserData.id}`, {
        email: props.email,
        lastname: props.lastname,
        firstname: props.firstname,
        plainPassword: props.plainPassword
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

<template>
  <v-container>
    <h2>
      Users
      <v-btn color="primary" @click="swapComponent('UsersAdd')" type="submit">Create</v-btn>
    </h2>
    <br/>
    <v-card class="elevation-1">
      <v-simple-table fixed-header height="500px">
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">Id</th>
            <th class="text-left">Name</th>
            <th class="text-left">email</th>
            <th class="text-left">Delete</th>
            <th class="text-left">Edit</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="user in usersClient" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.lastname }}</td>
            <td>{{ user.email }}</td>
            <td>
              <v-btn color="error" @click="desactivateUsers(user)" >Delete</v-btn>
            </td>
            <td>
              <v-btn color="warning" @click="swapComponent('UsersUpdate', user)" >Edit</v-btn>
            </td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-container>
</template>

<script>
import { http } from "@/core/http";
import {mapActions} from "vuex";

export default {
  name: "UsersAll",
  props: ["swapComponent"],
  computed: {
    usersClient() {
      return this.$store.state.adminUsers.usersClient;
    },
  },
  created() {
    this.load();
  },
  methods: {
    ...mapActions({
      loadUsersClient: "adminUsers/loadUsersClient",
    }),

    load() {
      this.loadUsersClient();
    },
    desactivateUsers(props) {
      http.delete(`users/${props.id}`)
          .then((response) => {
            console.log(response);
            this.load();
          }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<style scoped>
</style>

<template>
  <v-container>
    <h2>
      Properties
      <v-btn color="primary" @click="swapComponent('propertiesCreate' )" type="submit">Create</v-btn>
    </h2>
    <v-card class="elevation-1">
      <v-simple-table fixed-header height="500px">
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">Id</th>
            <th class="text-left">Title</th>
            <th class="text-left">Update</th>
            <th class="text-left">Deactivate / Activate</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="property in propertiesUser.property" :key="property.id">
            <td>{{ property.id }}</td>
            <td>{{ property.title }}</td>
            <td>
              <v-btn v-if="property.status === true" color="primary" @click="swapComponent('propertiesUpdate', property)">Update</v-btn>
            </td>
            <td>
              <v-btn v-if="property.status === true" color="error" @click="deactivateProperty(property)">Deactivate
              </v-btn>
              <v-btn v-else color="success" @click="activateProperty(property)">Activate</v-btn>
            </td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-container>
</template>

<script>
import {http} from "@/core/http";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "PropertyAll",
  props: ["swapComponent"],
  computed: {
    ...mapGetters({
      user: "auth/getUser",
    }),

    propertiesUser() {
      return this.$store.state.property.propertiesUser;
    },
  },
  created() {
    this.load();
  },
  methods: {
    ...mapActions({
      getActualUser: "property/getActualUser",
    }),

    load() {
      this.getActualUser(this.user.username);
    },

    deactivateProperty(props) {
      http.put(`properties/${props.id}`, {
        status: false,
      })
          .then((response) => {
            console.log(response);
            this.getActualUser(this.user.username);
          }).catch((error) => {
        console.log(error);
      });
    },
    activateProperty(props) {
      http.put(`properties/${props.id}`, {
        status: true,
      }).then((response) => {
        console.log(response);
        this.getActualUser(this.user.username);
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<style scoped>
h2 {
  padding-bottom: 1em;
}
</style>

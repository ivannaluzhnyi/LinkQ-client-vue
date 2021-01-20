<template>
  <v-container>
    <h2>
      Properties
      <v-btn color="primary" @click="swapComponent('propertiesCreate')" type="submit">Create</v-btn>
    </h2>
    <br/>
    <v-card class="elevation-1">
      <v-simple-table>
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
          <tr v-for="property in propertiesClient" :key="property.id">
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
import {mapActions} from "vuex";

export default {
  name: "PropertyAll",
  props: ["swapComponent"],
  computed: {
    propertiesClient() {
      return this.$store.state.adminProperties.propertiesClient;
    },
  },
  created() {
    this.load();
  },
  methods: {
    ...mapActions({
      loadPropertiesClient: "adminProperties/loadPropertiesClient",
    }),

    load() {
      this.loadPropertiesClient();
    },

    deactivateProperty(props) {
      http.put(`properties/${props.id}`, {
        status: false,
      })
          .then((response) => {
            console.log(response);
            this.load();
          }).catch((error) => {
        console.log(error);
      });
    },
    activateProperty(props) {
      http.put(`properties/${props.id}`, {
        status: true,
      }).then((response) => {
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

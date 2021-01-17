<template>
  <v-container>
    <h2>
      Properties
      <v-btn color="primary" @click="swapComponent('propertiesCreate')" type="submit">
        Add
      </v-btn>
    </h2>
    <br>
    <v-card class="elevation-1">
      <v-simple-table>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">
              Id
            </th>
            <th class="text-left">
              Title
            </th>
            <th class="text-left">
              Update
            </th>
            <th class="text-left">
              Delete
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="property in propertiesClient"
              :key="property.id"
          >
            <td>{{ property.id }}</td>
            <td>{{ property.title }}</td>
            <td>
              <v-btn color="primary" @click="swapComponent('propertiesUpdate')" type="submit">
                Update
              </v-btn>
            </td>
            <td>
              <v-btn color="error">
                Delete
              </v-btn>
            </td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-container>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "PropertyAll",
  props: ['swapComponent'],
  computed: {
    propertiesClient() {
      return this.$store.state.adminProperty.propertiesClient;
    }
  },
  created() {
    this.load()
  },
  methods: {
    ...mapActions({loadPropertiesClient: 'adminProperties/loadPropertiesClient'}),

    load() {
      this.loadPropertiesClient()
    },
  },

}
</script>

<style scoped>

</style>

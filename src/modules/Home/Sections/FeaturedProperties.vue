<template>
  <v-container fluid>
    <h1>Nos plus belles Maisons</h1>
    <hr />

    <CreateApplication
      :dialog="dialog"
      :property="{...selectedProperty}"
      :handleClose="handleClose"
      :existApplication="existApplication"
    />

    <div class="properies-list">
      <v-row>
        <v-col cols="12" sm="3" md="4" v-for="(property, index) in properties" :key="index">
          <Property
            v-if="property.status === true"
            :property="{...property}"
            :createApplication="createApplication"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Property from "../Components/Property";
import CreateApplication from "../Components/CreateApplication";

import applicationService from "../Services/application-front.service";

export default {
  components: {
    CreateApplication,
    Property,
  },
  data() {
    return {
      property: undefined,
      dialog: false,
      existApplication: undefined,
    };
  },
  computed: {
    properties() {
      return this.$store.state.Properties.properties;
    },
    selectedProperty() {
      return this.$data.property;
    },

    ...mapGetters({
      userId: "auth/apollo_getUserId",
    }),
  },
  created() {
    this.load();
  },
  methods: {
    ...mapActions({ loadProperties: "Properties/loadProperties" }),

    load() {
      this.loadProperties();
    },
    async createApplication(property) {
      const existApplication = await applicationService.checkIfExist(
        this.userId,
        property.id
      );

      if (existApplication) {
        this.$data.existApplication =
          "Vous avez déjà fait une demande pour ce bien";
      }
      this.$data.property = property;
      this.$data.dialog = true;
    },

    handleClose() {
      this.$data.dialog = false;
      this.$data.existApplication = undefined;
    },
  },
};
</script>

<style scoped>
.featured--card {
  min-width: 75%;
  max-width: 90%;
}

.properies-list {
  margin-top: 20px;
}
</style>

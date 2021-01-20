<template>
  <v-card>
    <v-card-title>
      <v-tabs v-if="isAdmin" v-model="tab">
        <v-tab v-for="item in adminTabItems" :key="item.tab">{{ item.tab }}</v-tab>
      </v-tabs>
      <span v-else>Mes demandes en cours</span>
    </v-card-title>

    <div v-if="isAdmin">
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in adminTabItems" :key="item.tab">
          <v-card flat>
            <v-card-text>
              <div :is="item.content"></div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>

    <div v-else>
      <UserTable />
    </div>
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";

import UserTable from "@/modules/Admin/Application/Components/Table/UserTable";

import ApplicationToValidate from "@/modules/Admin/Application/Components/Table/Admin/ApplicationToValidate";
import AllApplications from "@/modules/Admin/Application/Components/Table/Admin/AllApplications";

export default {
  name: "Application",
  components: { UserTable },
  data() {
    return {
      tab: null,
      adminTabItems: [
        { tab: "Demandes à valider", content: ApplicationToValidate },
        { tab: "Tous les demandes", content: AllApplications },
      ],
    };
  },

  computed: {
    ...mapGetters({
      isAdmin: "auth/isAdmin",
    }),
  },
};
</script>

<style>
</style>
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
              <div :is="item.content" :type="tableType"></div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>

    <div v-else>
      <Table />
    </div>
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";

// import UserTable from "@/modules/Admin/Application/Components/Table/UserTable";

// import ApplicationToValidate from "@/modules/Admin/Application/Components/Table/Admin/ApplicationToValidate";
// import AllApplications from "@/modules/Admin/Application/Components/Table/Admin/AllApplications";
import Table from "@/modules/Admin/Application/Components/Table";

import { TableType } from "@/modules/Admin/Application/helpers";

export default {
  name: "Application",
  components: { Table },
  data() {
    return {
      tab: null,
      adminTabItems: [
        { tab: "Demandes à valider", content: Table },
        { tab: "Tous les demandes", content: Table },
      ],
    };
  },

  computed: {
    ...mapGetters({
      isAdmin: "auth/isAdmin",
    }),

    tableType() {
      switch (this.$data.tab) {
        case 0:
          return TableType.APPLICATIONS_TO_VALIDATE;

        case 1:
          return TableType.ALL_APPLICATIONS;

        case null:
          return TableType.USER_APPLICATIONS;

        default:
          return TableType.USER_APPLICATIONS;
      }
    },
  },
};
</script>

<style>
</style>
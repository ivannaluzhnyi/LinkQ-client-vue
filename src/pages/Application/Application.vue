<template>
  <v-card>
    <v-card-title>Mes demandes en cours</v-card-title>

    <v-card flat>
      <v-card-text>
        <!-- <Table :type="tableType" /> -->
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>
import { EventBus } from "@/core/utils/eventBus";
import { navlinks } from "@/modules/Application/Utils/navlinks";

export default {
  created() {
    EventBus.$emit("page-change-navlinks", navlinks);
  },
};
</script>

<style>
</style>
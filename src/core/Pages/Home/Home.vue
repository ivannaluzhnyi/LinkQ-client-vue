<template>
    <v-container>
      <h1>Ma home ?</h1>
    </v-container>
</template>
<script>
import {EventBus} from "@/core/utils/eventBus";
import {navlinks} from "@/core/Pages/Home/navlinks";

export default {
  name: "Home",
  data: () => {
    return {
      navlinks: navlinks
    }
  },
  created() {
    EventBus.$emit('page-change-navlinks', this.navlinks)
  }
}
</script>

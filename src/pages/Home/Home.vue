<template>
  <div>
    <div id="search-background"></div>
    <v-container fluid>
      <section id="search">
        <search />
      </section>

      <section id="featured">
        <featured-properties />
      </section>
    </v-container>
  </div>
</template>
<script>
import { EventBus } from "@/core/utils/eventBus";
import { navlinks } from "@/modules/Home/Utils/navlinks";
import FeaturedProperties from "@/modules/Home/Sections/FeaturedProperties";
import Search from "@/modules/Home/Sections/Search";

export default {
  name: "Home",
  components: {
    Search,
    FeaturedProperties,
  },
  data: () => {
    return {
      navlinks: navlinks,
    };
  },
  created() {
    EventBus.$emit("page-change-navlinks", this.navlinks);
  },
};
</script>

<style scoped>
#search-background {
  background-image: url("../../assets/search-bg.jpg");
  height: 100vh;
  margin-top: -3vh;
}

#search {
  position: absolute;
  top: 11%;
  left: 50%;
  transform: translate(-50%, -35%);
}

#search > #search-container {
  background-color: ghostwhite !important;
  width: 65vw;
  height: 200px;
  border-radius: 15px;
}
</style>

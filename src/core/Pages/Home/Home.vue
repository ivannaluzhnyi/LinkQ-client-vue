<template>
  <div>
    <div id="search-background"></div>
    <v-container fluid>
      <section id="search">
        <div id="search-container">
          <v-card>
            <v-card-title class="text-center justify-center py-6">
              <h1 class="font-weight-bold display-3 basil--text">
                LYGEEMO
              </h1>
            </v-card-title>
            <v-tabs
                v-model="tab"
                background-color="transparent"
                color="basil"
                grow
            >
              <v-tab
                  v-for="item in searchTabitems"
                  :key="item"
              >
                {{ item }}
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item
                  v-for="item in searchTabitems"
                  :key="item"
              >
                <v-card
                    color="basil"
                    flat
                >
                  <home-search />
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </div>
      </section>
    </v-container>
  </div>
</template>
<script>
import {EventBus} from "@/core/utils/eventBus";
import {navlinks} from "@/core/Pages/Home/navlinks";
import HomeSearch from "@/core/Components/Forms/HomeSearch/HomeSearch";

export default {
  name: "Home",
  components: {
    HomeSearch
  },
  data: () => {
    return {
      navlinks: navlinks,
      tab: null,
      searchTabitems: [
        'Louer', 'Acheter', 'Vendre',
      ],
    }
  },
  created() {
    EventBus.$emit('page-change-navlinks', this.navlinks)
  }
}
</script>

<style scoped>
#search-background {
  background-image: url("../../../assets/search-bg.jpg");
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
  opacity: 75% !important;
}
</style>

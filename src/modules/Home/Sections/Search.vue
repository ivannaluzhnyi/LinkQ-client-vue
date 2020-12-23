<template>
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
            <search-form />
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
  import SearchForm from "@/modules/Home/Components/Forms/SearchForm";
  export default {
    name: "SearchSection",
    components: {SearchForm},
    data: () => {
      return {
        tab: null,
        searchTabitems: [
          'Louer', 'Acheter', 'Vendre',
        ],
      }
    }
  }
</script>

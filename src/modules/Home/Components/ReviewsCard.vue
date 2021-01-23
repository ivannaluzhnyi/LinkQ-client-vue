<template>
  <div id="search-container">
    <v-card class="d-flex justify-space-around mb-6" flat tile>
      <v-card v-for="item in data" :key="item" class="pa-2" outlined tile>
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>
        <v-card-title></v-card-title>
        <v-row class="mx-0 justify-center">
          <v-avatar size="150">
            <img 
            v-bind:src="item.avatar"
           alt="John" />
          </v-avatar>
        </v-row>
        <v-card-title class="justify-center">{{ item.name }}</v-card-title>
        <div align="center" class="subtitle-1">{{ item.job }}</div>
        <v-card-text>
          <v-row class="mx-0 justify-center">
            <v-rating
              v-bind:value="item.rate"
              background-color="grey lighten-2"
              half-increments
              color="warning"
              hover
              length="5"
              readonly
              size="32"
            ></v-rating>

            <div class="grey--text ml-4">{{ item.rate }}</div>
          </v-row>
          <v-divider class="mx-4"></v-divider>
          <div>
            {{ item.desc }}<br>
            <a 
             v-bind:href="item.link"
            >Voir l'avis complèt</a>
          </div>
        </v-card-text>
      </v-card>
    </v-card>
  </div>
</template>



<script>
export default {
  name: "ReviewsCard",
  props: ["data"],
};
</script>

<style scoped>
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>

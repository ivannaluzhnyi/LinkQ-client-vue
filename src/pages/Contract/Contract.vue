<template>
  <v-container>
    <v-card>
      <v-card-title>Mes contrats</v-card-title>

      <v-card elevation="2">
        <v-card-text>
          <v-data-table :headers="headers" :items="contracts">
            <template v-slot:item.user="{ item }">
              <div class="buyer">
                <p
                  v-if="item.application.buyer.firstname !== undefined && item.application.buyer.firstname !== null"
                >{{ `${item.application.buyer.firstname} ${item.application.buyer.lastname}`}}</p>
                <p>{{item.application.buyer.email}}</p>
              </div>
            </template>

            <template v-slot:item.price="{ item }">{{item.price | displayPrice}}</template>

            <template v-slot:item.created="{ item }">{{item.created | displayDate}}</template>

            <template v-slot:item.property="{ item }">
              <RouterLink
                :to="{name: 'Property', params:{ idProperty: item.application.property_id}}"
              >Voir</RouterLink>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
import { GET_CONTRACTS } from "@/graphql/queries";
import { EventBus } from "@/core/utils/eventBus";
import { navlinks } from "@/modules/Contract/Utils/navlinks";
import { displayDate } from "@/core/utils/date";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    headers: [
      { text: "ID", value: "id" },
      { text: "User", value: "user" },
      { text: "Prix", value: "price" },
      { text: "Proposition", value: "property" },
    ],
  }),

  created() {
    EventBus.$emit("page-change-navlinks", navlinks);

    if (!this.isAuth) {
      this.$router.push("/");
    }
  },

  apollo: {
    contracts() {
      return {
        query: GET_CONTRACTS,
      };
    },
  },

  filters: {
    displayDate,

    displayPrice(offer) {
      return `${offer}€`;
    },
  },

  computed: {
    ...mapGetters({
      isAuth: "auth/isAuthenticated",
    }),
  },
};
</script>

<style>
</style>
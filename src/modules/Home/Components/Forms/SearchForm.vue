<template>
  <v-container fluid>
    <Vuemik :initial-values="initialValues" :onSubmit="searchProperties" v-slot="{ handleSubmit }">
      <v-row>
        <!-- size inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__size_min">
            <v-icon>mdi-arrow-decision-outline</v-icon>Surface habitable
          </label>

          <!-- <v-card flat color="transparent">
            <v-card-text>
              <v-row>
                <v-col class="px-4">
                  <v-range-slider
                    v-model="range"
                    :max="max"
                    :min="min"
                    hide-details
                    class="align-center"
                    thumb-label
                  >
                    <template v-slot:prepend>
                      <v-text-field
                        :value="range[0]"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        type="number"
                        style="width: 60px"
                        @change="$set(range, 0, $event)"
                      ></v-text-field>
                    </template>
                    <template v-slot:append>
                      <v-text-field
                        :value="range[1]"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        type="number"
                        style="width: 60px"
                        @change="$set(range, 1, $event)"
                      ></v-text-field>
                    </template>
                  </v-range-slider>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>-->
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="size_min"
                id="input__size_min"
                placeholder="Minimun"
                nu
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field component="input" name="size_max" placeholder="Maximun" />
            </v-col>
          </v-row>
        </v-col>

        <!-- rooms inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__rooms_min">
            <v-icon>mdi-rooms-plan</v-icon>Nombre de pièces
          </label>
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="rooms_min"
                id="input__rooms_min"
                placeholder="Minimun"
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="rooms_max"
                id="input__rooms_max"
                placeholder="Maximun"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- second row -->

      <v-row>
        <!-- rooms inputs -->
        <!-- bedrooms inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__area_min">
            <v-icon>mdi-bed</v-icon>Nombres de chambres
          </label>
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="bedrooms_min"
                id="input__bedrooms_min"
                placeholder="Minimun"
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="bedrooms_max"
                id="input__bedrooms_max"
                placeholder="Maximun"
              />
            </v-col>
          </v-row>
        </v-col>
        <!-- bathrooms_min inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__area_min">
            <v-icon>mdi-shower</v-icon>Nombre de salle de bain
          </label>
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="bathrooms_min"
                id="input__bathrooms_min"
                placeholder="Minimun"
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="bathrooms_max"
                id="input__bathrooms_max"
                placeholder="Maximun"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <!-- garages inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__area_min">
            <v-icon>mdi-garage-open-variant</v-icon>Nombre de garages
          </label>
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="garages_min"
                id="input__garages_min"
                placeholder="Minimun"
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="garages_max"
                id="input__garages_max"
                placeholder="Maximun"
              />
            </v-col>
          </v-row>
        </v-col>

        <!-- price inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__area_min">
            <v-icon>mdi-cash</v-icon>Prix
          </label>
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="price_min"
                id="input__price_min"
                placeholder="Minimun"
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="price_max"
                id="input__price_max"
                placeholder="Maximun"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-spacer />
      <v-btn @click="handleSubmit" x-large color="success" class="mr-4">
        <v-icon color="white">mdi-home-search</v-icon>Chercher
      </v-btn>
    </Vuemik>
  </v-container>
</template>

<script>
import { Vuemik, Field } from "@/libs/vuemik";
import { convertToSearchUrl } from "@/core/utils/convertSearchUrl";

export default {
  name: "SearchForm",
  components: {
    Vuemik,
    Field,
  },
  data: () => ({
    initialValues: {},
    min: 1,
    max: 10000,
    range: [-20, 70],
  }),

  methods: {
    searchProperties(props) {
      const myprop = convertToSearchUrl(props);
      this.$router.replace({ name: "ListProperty", params: { myprop } });
    },
  },
};
</script>

<style scoped>
</style>

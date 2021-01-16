<template>
  <v-container fluid>
    <Vuemik
      :initial-values="initialValues"
      :onSubmit="searchProperties"
      v-slot="{ handleSubmit }"
      >

      <v-row>
        <!-- area inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__area_from">
            <v-icon>mdi-arrow-decision-outline</v-icon>
            Surface habitable
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
          </v-card> -->
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field component="input" name="area_from" id="input__area_from" placeholder="Minimun" />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field component="input" name="area_to" placeholder="Maximun" />
            </v-col>
          </v-row>
        </v-col>

        <!-- floors inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__area_from">
            <v-icon>mdi-floor-plan</v-icon>
            Nombre d'étages
          </label>
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="floors_from"
                id="input__floors_from"
                placeholder="Minimun"
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="floors_to"
                id="input__floors_to"
                placeholder="Maximun"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- second row -->

      <v-row>
        <!-- bedrooms inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__area_from">
            <v-icon>mdi-view-dashboard-outline</v-icon>
            Nombre de pièces
          </label>
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="bedrooms_from"
                id="input__bedrooms_from"
                placeholder="Minimun"
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="bedrooms_to"
                id="input__bedrooms_to"
                placeholder="Maximun"
              />
            </v-col>
          </v-row>
        </v-col>
        <!-- bathrooms inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__area_from">
            <v-icon>mdi-bed</v-icon>
            Nombres de chambres
          </label>
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="bathrooms_from"
                id="input__bathrooms_from"
                placeholder="Minimun"
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="bathrooms_to"
                id="input__bathrooms_to"
                placeholder="Maximun"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <!-- bedrooms inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__area_from">
            <v-icon>mdi-garage-open-variant</v-icon>
            Nombre de garage
          </label>
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="garage_from"
                id="input__garage_from"
                placeholder="Minimun"
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="garage_to"
                id="input__garage_to"
                placeholder="Maximun"
              />
            </v-col>
          </v-row>
        </v-col>
        <!-- bathrooms inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__area_from">
            <v-icon> mdi-shower</v-icon>
            Nombre de salle de bain
          </label>
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="bathrooms_from"
                id="input__bathrooms_from"
                placeholder="Minimun"
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="bathrooms_to"
                id="input__bathrooms_to"
                placeholder="Maximun"
              />
            </v-col>
          </v-row>
        </v-col>
        <!-- price inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__area_from">
            <v-icon>mdi-cash</v-icon>
            Prix
          </label>
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="price_from"
                id="input__price_from"
                placeholder="Minimun"
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input"
                name="price_to"
                id="input__price_to"
                placeholder="Maximun"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-spacer />
      <v-btn @click="handleSubmit" x-large color="success" class="mr-4">
        <v-icon color="white"> mdi-home-search </v-icon>
        Chercher
      </v-btn>
    </Vuemik>
  </v-container>
</template>

<script>
import { Vuemik, Field } from "@/libs/vuemik";

export default {
  name: "SearchForm",
  components: {
    Vuemik,
    Field,
  },
  data: () => ({
    initialValues: {

    },
    min: 1,
    max: 10000,
    range: [-20, 70],
  }),
  
  methods: {
    searchProperties(props) {
      console.log('props :>> ', props);
      // this.$router.push("/propertySearch?test");
    },
  },
};
</script>

<style scoped>
</style>

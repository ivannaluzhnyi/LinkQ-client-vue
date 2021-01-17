<template>
  <v-container fluid >
    <Vuemik :initial-values="initialValues" 
    :onSubmit="searchProperties"
    :validationSchema="SearchFormSchema" 
    v-slot="{ handleSubmit, errors }">
      <v-row>
        <!-- size inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__size_min">
            <v-icon>mdi-arrow-decision-outline</v-icon> Surface habitable
          </label>
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input" type="number"
                name="size_min"
                id="input__size_min"
                placeholder="Minimun"
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field component="input" type="number" name="size_max" placeholder="Maximun" />
            </v-col>
          </v-row>
          <p v-if="errors.size_min" class="alert-error">{{errors.size_min[0]}}</p>
          <p v-if="errors.size_max" class="alert-error">{{errors.size_max[0]}}</p>
        </v-col>

        <!-- rooms inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__rooms_min">
            <v-icon>mdi-floor-plan</v-icon> Nombre de pièces
          </label>
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input" type="number"
                name="rooms_min"
                id="input__rooms_min"
                placeholder="Minimun"
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input" type="number"
                name="rooms_max"
                id="input__rooms_max"
                placeholder="Maximun"
              />
            </v-col>
          </v-row>
           <p v-if="errors.rooms_min" class="alert-error">{{errors.rooms_min[0]}}</p>
         <p v-if="errors.rooms_max" class="alert-error">{{errors.rooms_max[0]}}</p>
        </v-col>
      </v-row>

      <!-- second row -->

      <v-row>
        <!-- rooms inputs -->
        <!-- bedrooms inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__area_min">
            <v-icon>mdi-bed</v-icon> Nombres de chambres
          </label>
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input" type="number"
                name="bedrooms_min"
                id="input__bedrooms_min"
                placeholder="Minimun"
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input" type="number"
                name="bedrooms_max"
                id="input__bedrooms_max"
                placeholder="Maximun"
              />
            </v-col>
          </v-row>
           <p v-if="errors.bedrooms_min" class="alert-error">{{errors.bedrooms_min[0]}}</p>
         <p v-if="errors.bedrooms_max" class="alert-error">{{errors.bedrooms_max[0]}}</p>
        </v-col>
        <!-- bathrooms_min inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__area_min">
            <v-icon>mdi-shower</v-icon> Nombre de salle de bain
          </label>
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input" type="number"
                name="bathrooms_min"
                id="input__bathrooms_min"
                placeholder="Minimun"
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input" type="number"
                name="bathrooms_max"
                id="input__bathrooms_max"
                placeholder="Maximun"
              />
            </v-col>
          </v-row>
           <p v-if="errors.bathrooms_min" class="alert-error">{{errors.bathrooms_min[0]}}</p>
         <p v-if="errors.bathrooms_max" class="alert-error">{{errors.bathrooms_max[0]}}</p>
        </v-col> 
      </v-row>
      <v-row>
        <!-- garages inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__area_min">
            <v-icon>mdi-garage-open-variant</v-icon> Nombre de garages
          </label>
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input" type="number"
                name="garages_min"
                id="input__garages_min"
                placeholder="Minimun"
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input" type="number"
                name="garages_max"
                id="input__garages_max"
                placeholder="Maximun"
              />
            </v-col>
          </v-row>
          <p v-if="errors.garages_min" class="alert-error">{{errors.garages_min[0]}}</p>
         <p v-if="errors.garages_max" class="alert-error">{{errors.garages_max[0]}}</p>
        </v-col>

        <!-- price inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__area_min">
            <v-icon>mdi-cash</v-icon> Prix
          </label>
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input" type="number"
                name="price_min"
                id="input__price_min"
                placeholder="Minimun"
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field
                component="input" type="number"
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
import * as Yup from "yup";
import { Vuemik, Field } from "@/libs/vuemik";
import { convertToSearchUrl, minMaxComparaison } from "@/core/utils/convertSearchUrl";

export default {
  name: "SearchForm",
  components: {
    Vuemik,
    Field,
  },
  data: () => ({
    initialValues: {},
    SearchFormSchema: Yup.object().shape({
      size_min: Yup.number().positive().integer(),
      size_max: Yup.number().positive().integer().test('match', 
      'Le minimun doit être inferieur au maximun', function(size_max){
        return minMaxComparaison(size_max, this.parent.size_min)
      }),
       rooms_min: Yup.number().positive().integer(),
       rooms_max: Yup.number().positive().integer().test('match', 
      'Le minimun doit être inferieur au maximun', function(rooms_max){
        return minMaxComparaison(rooms_max, this.parent.rooms_min)
      }),
        bedrooms_min: Yup.number().positive().integer(),
        bedrooms_max: Yup.number().positive().integer().test('match', 
      'Le minimun doit être inferieur au maximun', function(bedrooms_max){
        return minMaxComparaison(bedrooms_max, this.parent.bedrooms_min)
      }),
      bathrooms_min: Yup.number().positive().integer(),
      bathrooms_max: Yup.number().positive().integer().test('match', 
      'Le minimun doit être inferieur au maximun', function(bathrooms_max){
        return minMaxComparaison(bathrooms_max, this.parent.bathrooms_max)
      }),
      garages_min: Yup.number().positive().integer(),
      garages_max: Yup.number().positive().integer().test('match', 
      'Le minimun doit être inferieur au maximun', function(garages_max){
        return minMaxComparaison(garages_max, this.parent.garages_min)
      })
    })
  }),

  methods: {
    searchProperties(props) {
      const searchUrl = convertToSearchUrl(props);
      console.log('object :>> ', searchUrl);
      this.$router.replace({ name: "ListProperty", params: { searchUrl } });
    },
  },
};
</script>

<style  scoped>
.alert-error {
  margin-top: 10px;
  color: red;
}
</style>

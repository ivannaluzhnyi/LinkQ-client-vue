<template>
  <v-container fluid>
    <Vuemik>
      <!-- first row -->
      <v-row>
        <!-- area inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__area_from">
            <v-icon>mdi-arrow-decision-outline</v-icon>
            Total area
          </label>
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                  component="vuemik-text"
                  name="area_from"
                  id="input__area_from"
                  placeholder="from"
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field :component="'vuemik-text'" name="area_to" placeholder="to"/>
            </v-col>
          </v-row>
        </v-col>

        <!-- floors inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__area_from">
            <v-icon>mdi-floor-plan</v-icon>
            Floors
          </label>
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                  :component="'vuemik-text'"
                  name="floors_from"
                  id="input__floors_from"
                  placeholder="from"
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field
                  :component="'vuemik-text'"
                  name="floors_to"
                  id="input__floors_to"
                  placeholder="to"
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
            <v-icon>mdi-bed</v-icon>
            Number of bedrooms
          </label>
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                  component="vuemik-text"
                  name="bedrooms_from"
                  id="input__bedrooms_from"
                  placeholder="from"
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field
                  component="vuemik-text"
                  name="bedrooms_to"
                  id="input__bedrooms_to"
                  placeholder="to"
              />
            </v-col>
          </v-row>
        </v-col>
        <!-- bathrooms inputs -->
        <v-col cols="12" md="6" xs="12">
          <label for="input__area_from">
            <v-icon>mdi-bed</v-icon>
            Number of bathrooms
          </label>
          <v-row>
            <v-col cols="12" md="6" xs="3">
              <Field
                  component="vuemik-text"
                  name="bathrooms_from"
                  id="input__bathrooms_from"
                  placeholder="from"
              />
            </v-col>
            <v-col cols="12" md="6" xs="3">
              <Field
                  component="vuemik-text"
                  name="bathrooms_to"
                  id="input__bathrooms_to"
                  placeholder="to"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-spacer/>
      <v-btn x-large
             color="success"
             class="mr-4"
      >
        <v-icon
            color="white"
        >
          mdi-home-search
        </v-icon>
        SEARCH
      </v-btn>
    </Vuemik>
  </v-container>
</template>

<script>
import Field from "@/core/Components/Vuemik/Field";
import Vuemik from "@/core/Components/Vuemik/Vuemik";

export default {
  name: "SearchForm",
  components: {Vuemik, Field},
  data: () => {
    return {
      selectData: [
        {text: 'Un', value: 'A'},
        {text: 'Deux', value: 'B'},
        {text: 'Trois', value: 'C'}
      ]
    }
  }
}
</script>

<style scoped>

</style>

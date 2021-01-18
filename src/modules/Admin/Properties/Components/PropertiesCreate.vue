<template>
  <v-container>
    <h2>
      Create
      <v-btn color="primary" @click="swapComponent('propertiesAll')" type="submit">
        Return
      </v-btn>
    </h2>
    <v-card class="elevation-2">
      <v-container>
        <Vuemik
            :initialValues="{
            title: '',
            description: '',
            price: 0,
          }"
            :onSubmit="createProperty"
            :validationSchema="PropertySchema"
            v-slot="{ handleSubmit, errors }"
        >
          <v-row>
            <v-col cols="12">
              <label for="input__property_title" class="col-12">Title</label>
              <Field class="col" component="input" name="title" id="input__property_title" />
              <p v-if="errors.title" class="alert-error">{{errors.title[0]}}</p>
            </v-col>
            <v-col cols="12">
              <label for="input__property_description" class="col-12">Description</label>
              <Field class="col" component="input" name="description" id="input__property_description" />
              <p v-if="errors.description" class="alert-error">{{errors.description[0]}}</p>
            </v-col>
            <v-col cols="12">
              <label for="input__property_price" class="col-12">Title</label>
              <Field class="col" component="input" name="price" id="input__property_price" />
              <p v-if="errors.price" class="alert-error">{{errors.price[0]}}</p>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6" xsm="12"></v-col>
            <v-spacer></v-spacer>
          </v-row>
          <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
            <v-btn class="col" @click="handleSubmit" x-large block color="primary">Submit</v-btn>
          </v-col>
        </Vuemik>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import { Vuemik, Field } from "@/libs/vuemik";
import * as Yup from "yup";

export default {
  name: "PropertiesCreate",
  components: {
    Field,
    Vuemik,
  },
  props: ['swapComponent'],
  data: () => ({
    PropertySchema: Yup.object().shape({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      price: Yup.string().required("Price is required"),
    }),
  }),
  methods: {
    createProperty(props) {
      console.log(props);
    },
  },
}
</script>

<style scoped>

</style>

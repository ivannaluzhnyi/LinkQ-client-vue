<template>
  <v-container>
    <h2>
      Update
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
            price: proper,
            size: 0,
            rooms: 0,
            bedrooms: 0,
            bathrooms: 0,
            garages: 0,
            street: '',
            zipcode: 0,
            city: '',
            country: '',
            floor: 0,
            room: 0,
          }"
            :onSubmit="createProperty"
            :validationSchema="PropertySchema"
            v-slot="{ handleSubmit, errors }"
        >
          <v-row>
            <v-col cols="6">
              <h4>Property</h4>
              <v-col cols="12">
                <label for="input__property_title" class="col-12">Title</label>
                <Field class="col" component="input" name="title" id="input__property_title"/>
                <p v-if="errors.title" class="alert-error">{{ errors.title[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__property_description" class="col-12">Description</label>
                <Field class="col" component="input" name="description" id="input__property_description"/>
                <p v-if="errors.description" class="alert-error">{{ errors.description[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__property_price" class="col-12">Price</label>
                <Field class="col" component="input" name="price" id="input__property_price"/>
                <p v-if="errors.price" class="alert-error">{{ errors.price[0] }}</p>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6" xsm="12"></v-col>
            </v-col>
            <v-col cols="6">
              <h4>Features</h4>
              <v-col cols="12">
                <label for="input__feature_size" class="col-12">Size</label>
                <Field class="col" component="input" name="size" id="input__feature_size"/>
                <p v-if="errors.size" class="alert-error">{{ errors.size[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__feature_rooms" class="col-12">Rooms</label>
                <Field class="col" component="input" name="rooms" id="input__feature_rooms"/>
                <p v-if="errors.rooms" class="alert-error">{{ errors.rooms[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__feature_bedrooms" class="col-12">Bedrooms</label>
                <Field class="col" component="input" name="bedrooms" id="input__feature_bedrooms"/>
                <p v-if="errors.bedrooms" class="alert-error">{{ errors.bedrooms[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__feature_bathrooms" class="col-12">Bathrooms</label>
                <Field class="col" component="input" name="bathrooms" id="input__feature_bathrooms"/>
                <p v-if="errors.bathrooms" class="alert-error">{{ errors.bathrooms[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__feature_garages" class="col-12">Garages</label>
                <Field class="col" component="input" name="garages" id="input__feature_garages"/>
                <p v-if="errors.garages" class="alert-error">{{ errors.garages[0] }}</p>
              </v-col>
            </v-col>
          </v-row>
          <h4>Address</h4>
          <v-row>
            <v-col cols="6">
              <v-col cols="12">
                <label for="input__address_street" class="col-12">Street</label>
                <Field class="col" component="input" name="street" id="input__address_street"/>
                <p v-if="errors.street" class="alert-error">{{ errors.street[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__address_zipcode" class="col-12">Zipcode</label>
                <Field class="col" component="input" name="zipcode" id="input__address_zipcode"/>
                <p v-if="errors.rooms" class="alert-error">{{ errors.zipcode[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__address_city" class="col-12">City</label>
                <Field class="col" component="input" name="city" id="input__address_city"/>
                <p v-if="errors.city" class="alert-error">{{ errors.city[0] }}</p>
              </v-col>
            </v-col>
            <v-col cols="6">
              <v-col cols="12">
                <label for="input__address_country" class="col-12">Country</label>
                <Field class="col" component="input" name="country" id="input__address_country"/>
                <p v-if="errors.country" class="alert-error">{{ errors.country[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__address_floor" class="col-12">Floor</label>
                <Field class="col" component="input" name="floor" id="input__address_floor"/>
                <p v-if="errors.floor" class="alert-error">{{ errors.floor[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__address_room" class="col-12">Room</label>
                <Field class="col" component="input" name="room" id="input__address_room"/>
                <p v-if="errors.room" class="alert-error">{{ errors.room[0] }}</p>
              </v-col>
            </v-col>
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
import {Field, Vuemik} from "@/libs/vuemik";
import * as Yup from "yup";

export default {
  name: "PropertiesUpdate",
  components: {
    Field,
    Vuemik,
  },
  props: [
    'swapComponent',
    'property'
  ],
  computed: {
    proper() {
      console.log(this.property);
      return 0;
    },
  },
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

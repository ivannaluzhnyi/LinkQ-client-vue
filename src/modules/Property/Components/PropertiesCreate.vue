<template>
  <v-container>
    <h2>
      Property Create
      <v-btn color="primary" @click="swapComponent('propertiesAll')" type="submit">Return</v-btn>
    </h2>
    <v-card class="elevation-2">
      <v-container>
        <Vuemik
            :initialValues="initialData"
            :onSubmit="createProperty"
            :validationSchema="PropertySchema"
            v-slot="{ handleSubmit, errors }"
        >
          <v-row>
            <v-col cols="6">
              <h4>Property</h4>
              <v-col cols="12">
                <label for="input__property_title" class="col-12">Title</label>
                <Field class="col" component="input" name="title" id="input__property_title" />
                <p v-if="errors.title" class="alert-error">{{ errors.title[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__property_description" class="col-12">Description</label>
                <Field
                    class="col"
                    component="input"
                    name="description"
                    id="input__property_description"
                />
                <p v-if="errors.description" class="alert-error">{{ errors.description[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__property_price" class="col-12">Price</label>
                <Field class="col" component="input" name="price" id="input__property_price" />
                <p v-if="errors.price" class="alert-error">{{ errors.price[0] }}</p>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6" xsm="12"></v-col>
            </v-col>
            <v-col cols="6">
              <h4>Features</h4>
              <v-col cols="12">
                <label for="input__feature_size" class="col-12">Size</label>
                <Field class="col" component="input" name="size" id="input__feature_size" />
                <p v-if="errors.size" class="alert-error">{{ errors.size[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__feature_rooms" class="col-12">Rooms</label>
                <Field class="col" component="input" name="rooms" id="input__feature_rooms" />
                <p v-if="errors.rooms" class="alert-error">{{ errors.rooms[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__feature_bedrooms" class="col-12">Bedrooms</label>
                <Field class="col" component="input" name="bedrooms" id="input__feature_bedrooms" />
                <p v-if="errors.bedrooms" class="alert-error">{{ errors.bedrooms[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__feature_bathrooms" class="col-12">Bathrooms</label>
                <Field
                    class="col"
                    component="input"
                    name="bathrooms"
                    id="input__feature_bathrooms"
                />
                <p v-if="errors.bathrooms" class="alert-error">{{ errors.bathrooms[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__feature_garages" class="col-12">Garages</label>
                <Field class="col" component="input" name="garages" id="input__feature_garages" />
                <p v-if="errors.garages" class="alert-error">{{ errors.garages[0] }}</p>
              </v-col>
            </v-col>
          </v-row>
          <h4>Address</h4>
          <v-row>
            <v-col cols="6">
              <v-col cols="12">
                <label for="input__address_street" class="col-12">Street</label>
                <Field class="col" component="input" name="street" id="input__address_street" />
                <p v-if="errors.street" class="alert-error">{{ errors.street[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__address_zipcode" class="col-12">Zipcode</label>
                <Field class="col" component="input" name="zipcode" id="input__address_zipcode" />
                <p v-if="errors.rooms" class="alert-error">{{ errors.zipcode[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__address_city" class="col-12">City</label>
                <Field class="col" component="input" name="city" id="input__address_city" />
                <p v-if="errors.city" class="alert-error">{{ errors.city[0] }}</p>
              </v-col>
            </v-col>
            <v-col cols="6">
              <v-col cols="12">
                <label for="input__address_country" class="col-12">Country</label>
                <Field class="col" component="input" name="country" id="input__address_country" />
                <p v-if="errors.country" class="alert-error">{{ errors.country[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__address_floor" class="col-12">Floor</label>
                <Field class="col" component="input" name="floor" id="input__address_floor" />
                <p v-if="errors.floor" class="alert-error">{{ errors.floor[0] }}</p>
              </v-col>
              <v-col cols="12">
                <label for="input__address_room" class="col-12">Room</label>
                <Field class="col" component="input" type="number" name="room" id="input__address_room" />
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
import { http } from "@/core/http";
import { Field, Vuemik } from "@/libs/vuemik";
import * as Yup from "yup";
import { mapGetters } from "vuex";

export default {
  name: "PropertiesCreate",
  components: {
    Field,
    Vuemik,
  },
  props: ["swapComponent"],
  data: () => ({
    initialData: {
      title: '',
      description: '',
      price: 0,
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
    },
    PropertySchema: Yup.object().shape({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      price: Yup.number().required("Price is required"),
      size: Yup.number().required("Size is required"),
      rooms: Yup.number().required("Rooms is required"),
      bedrooms: Yup.number().required("Bedrooms is required"),
      bathrooms: Yup.number().required("Bathrooms is required"),
      garages: Yup.number().required("Garages is required"),
      street: Yup.string().required("Street is required"),
      zipcode: Yup.string().required("Zipcode is required"),
      city: Yup.string().required("City is required"),
      country: Yup.string().required("Country is required"),
      floor: Yup.number().required("Floor is required"),
      room: Yup.number().required("Room is required"),
    }),
  }),
  computed: {
    ...mapGetters({
      propertiesUser: "property/propertiesUser",
    }),
  },
  methods: {
    createProperty(props) {
      const price = parseInt(props.price);
      const size = parseInt(props.size);
      const rooms = parseInt(props.rooms);
      const bedrooms = parseInt(props.bedrooms);
      const bathrooms = parseInt(props.bathrooms);
      const garages = parseInt(props.garages);
      const floor = parseInt(props.floor);
      const room = parseInt(props.room);
      http.post(`features`, {
        size: size,
        rooms: rooms,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        garages: garages,
      })
          .then((response) => {
            const idFeature = response.data.id;
            http.post(`addresses`, {
              street: props.street,
              zipcode: props.zipcode,
              city: props.city,
              country: props.country,
              floor: floor,
              room: room,
            })
                .then((response) => {
                  const idAddress = response.data.id;
                  http.post(`properties`, {
                    title: props.title,
                    description: props.description,
                    price: price,
                    address: `/addresses/${idAddress}`,
                    features: `/features/${idFeature}`,
                    userRelated: `/users/${this.propertiesUser.id}`,
                    status: true
                  }).then((response) => {
                    const idProperty = response.data.id;
                    http.put(`features/${idFeature}`, {
                      property: `/properties/${idProperty}`,
                    }).catch((error) => {
                      console.log(error);
                    });
                    http.put(`addresses/${idAddress}`, {
                      property: `/properties/${idProperty}`,
                    }).catch((error) => {
                      console.log(error);
                    });
                  }).catch((error) => {
                    console.log(error);
                  });
                }).catch((error) => {
              console.log(error);
            });
          }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<style scoped>
h2 {
  padding-bottom: 1em;
}
</style>

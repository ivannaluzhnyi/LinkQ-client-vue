<template>
  <v-card class="rounded-card contact">
    <Vuemik :on-submit="() => null">
      <div class="group-from">
        <label for="input__name_from">
          Name
        </label>
        <Field
            component="vuemik-text"
            name="name_from"
            id="input__name_from"
        />
      </div>
      <div class="group-from">
        <label for="input__email_from">
          Email
        </label>
        <Field
            component="vuemik-text"
            name="email_from"
            id="input__email_from"
        />
      </div>
      <div class="group-from">
        <label for="input__phone_from">
          Phone
        </label>
        <Field
            component="vuemik-text"
            name="phone_from"
            id="input__phone_from"
        />
      </div>
      <div class="group-from">
        <v-spacer/>
        <v-btn x-large
               color="primary"
               class="mr-4"
        >
          <v-icon
              color="white"
          >
            mdi-send
          </v-icon>
          Send Offer
        </v-btn>
      </div>
    </Vuemik>
  </v-card>
</template>

<script>
import Vuemik from "@/core/Components/Vuemik/Vuemik";
import Field from "@/core/Components/Vuemik/Field";

export default {
  name: "OfferForm",
  components: {
    Vuemik,
    Field
  }
}
</script>

<style scoped>
.contact {
  max-width: 100%;
  background-color: white;

}

.group-from {
  padding: 1rem;
}
</style>
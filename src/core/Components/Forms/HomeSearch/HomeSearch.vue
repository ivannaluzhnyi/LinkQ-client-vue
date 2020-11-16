<template>
  <Vuemik>
    <template v-slot:default>
      <v-container>
        <div class="wrapper">
          <form id="form" class="form">
            <v-row>
              <v-col
              cols="12"
              md="12"
              >
                <div class="form-control">
                  <label for="fn">First name</label>
                  <input type="text" id="fn">
                </div>
              </v-col>
            </v-row>
           <v-row>
             <v-col
             cols="12"
             md="4"
             >
               <div class="form-control">
                 <label for="ln">Last name</label>
                 <input type="text" id="ln">
               </div>
               <div class="form-control">
                 <label for="mail">Email address</label>
                 <input type="email" id="mail">
               </div>
               <div class="form-control">
                 <label>Country / Region</label>
                 <select class="select">
                   <option value="united states">United States</option>
                   <option value="australia">Australia</option>
                   <option value="europe">Europe</option>
                   <option value="asia">Asia</option>
                 </select>
               </div>
             </v-col>

           </v-row>

            <div class="form-control">
              <label for="street">Street address</label>
              <input type="text" id="street">
            </div>
            <div class="form-control">
              <label for="ct">City</label>
              <input type="text" id="ct">
            </div>
            <div class="form-control">
              <label for="st">State / Province</label>
              <input type="text" id="st">
            </div>
            <div class="form-control">
              <label for="zp">ZIP / Postal</label>
              <input type="text" id="zp">
            </div>
            <footer class="form__footer">
              <button class="submit__btn">Save</button>
            </footer>
          </form>

        </div>
      </v-container>
      <!--      <v-container>-->
      <!--        <v-row>-->
      <!--          <v-col-->
      <!--              cols="12"-->
      <!--              md="4"-->
      <!--          >-->
      <!--            <Field :component="'vuemik-text'" name="LAWLS"/>-->
      <!--          </v-col>-->

      <!--          <v-col-->
      <!--              cols="12"-->
      <!--              md="4"-->
      <!--          >-->
      <!--            <Field :component="'vuemik-text'" name="LAWLS"/>-->
      <!--          </v-col>-->
      <!--          <v-col-->
      <!--              cols="12"-->
      <!--              md="4"-->
      <!--          >-->
      <!--            <Field :component="'vuemik-select'" name="LAWLS" :options="selectData"/>-->
      <!--          </v-col>-->
      <!--        </v-row>-->
      <!--      </v-container>-->
    </template>
  </Vuemik>
</template>

<script>
import Vuemik from "@/core/Components/Vuemik/Vuemik";

export default {
  name: "HomeSearch",
  components: {Vuemik},
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

<template>
  <div id="app">
    <Formik :initialValues="{ InputText: 'test1', date: '2018-07-22' }" :onSubmit="handleSubmit">
      text
      <Field :component="'text'" :name="'InputText'" /><br />
      text + require
      <Field :component="'text'" :name="'InputTextRequired'" :required="true" />
      number
      <Field :component="'number'" :name="'number'" :required="true" />
      email
      <Field :component="'email'" :name="'email'" :required="true" />
      password
      <Field :component="'password'" :name="'password'" :required="true" />
      date
      <Field :component="'date'" :name="'date'" :min="'2018-01-01'" :max="'2018-12-31'" :required="true" />

      <Field
        :component="'select'"
        :name="'select'"
        :required="true"
        :options="[
          { value: 'test', text: 'test' },
          { value: 'oui', text: 'oui' },
        ]"
      />

      <Field
        class="lel"
        :component="'textarea'"
        :name="'textarea'"
        :required="true"
      />

      oui
      <Field
        :component="'radio'"
        :name="'radio'"
        :fordedValue="'oui'"
        :required="true"
      />
      non
      <Field
        :component="'radio'"
        :name="'radio'"
        :fordedValue="'non'"
        :required="true"
      />
      maybe
      <Field
        :component="'radio'"
        :name="'radio'"
        :fordedValue="'peut-etre'"
        :required="true"
      />

      <h2>checkbox</h2>

      oui
      <Field :component="'checkbox'" :name="'radiooui'"  />
      non
      <Field :component="'checkbox'" :name="'radionon'"  />
      maybe
      <Field :component="'checkbox'" :name="'radiomaybe'" :required="true" />

      <Field :component="'submit'" :name="'Submit'" />
    </Formik>
  </div>
</template>

<script>
import Formik from "./Formik/Formik";
import Field from "./Formik/Field";

export default {
  name: "formApp",
  components: {
    Formik,
    Field,
  },
  data: () => ({}),
  methods: {
    handleSubmit: (data) => {
      console.log(data);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

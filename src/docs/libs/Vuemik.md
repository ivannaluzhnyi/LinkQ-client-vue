# Vuemik

### Exemple

```js

<template>
  <Vuemik
    :initialValues="{
      select: 1,
      textarea: 'Write stuff here...',
      checkbox: false,
      number: 42,
      text: 'Username',
      password: 's3cr3t',
    }"
    :onSubmit="onSubmit"
    v-slot="{ handleSubmit, errors }"
    :validationSchema="ValidationSchema"
  >
    <Field name="select" component="select">
      <option value="1">Choice 1</option>
      <option value="2">Choice 2</option>
    </Field>
    <Field name="textarea" component="textarea" />
    <Field name="checkbox" component="input" type="checkbox" />
    <Field name="text" component="input" type="text" />
    <Field name="number" component="input" type="number" />
    <Field name="password" component="input" type="password" />
    <Field name="submit" component="input" type="submit" @click="handleSubmit" />
  </Vuemik>
</template>

<script>
  import { Vuemik, Field } from 'vuemik';
  import * as Yup from "yup";

  export default {
    name: 'App',
    components: {
      Vuemik,
      Field,
    },

    data: () => ({
        ValidationSchema: Yup.object().shape({
            email: Yup.string().email("Invalid email").required("Required"),
            password: Yup.string().required("Password is required"),
        }),
  }),
    methods: {
      onSubmit: (props) => {
        console.log(props);
      },
    },
  };
</script>

```

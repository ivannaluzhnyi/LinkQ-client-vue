<template>
  <form class="Magnus-form" @submit.prevent="handleSubmit">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "Formik",
  props: {
    onSubmit: { type: Function, required: true },
    initialValues: { type: Object, required: false },
  },
  data: function () {
    return {
      values: JSON.parse(JSON.stringify(this.initialValues)),
      errors: {},
    };
  },
  provide() {
    return {
      formik: {
        values: this.values,
        errors: this.errors,
        changeValues: this.changeValues,
        setErrors: this.setErrors,
      },
    };
  },
  methods: {
    handleSubmit() {
      this.onSubmit(this.values);
    },
    changeValues(name, data) {
      this.setValues(name, data);
    },
    setValues(name, data) {
      this.$data.values[name] = data;
    },
    changeErrors(data) {
      this.setErrors(data);
    },
    setErrors(data) {
      this.errors = data;
    },
  },
};
</script>
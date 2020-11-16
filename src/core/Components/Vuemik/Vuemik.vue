<template>
  <form @submit.prevent="handleSubmit">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "Vuemik",
  /*data: () => ({
    initialValues: JSON.parse(JSON.stringify(this.initialValues))
  }),
  provide() {
    return {
      vuemik: {
        initialValues: this.initialValues,
      }
    };
  },
  props: {
    handleSubmit: { type: Function, required: true },
    initialValues: { type: Object, required: true }
  },*/
}
</script>

<template>
  <div>
    <slot :handleSubmit="handleSubmit"></slot>
  </div>
</template>

<script>
export default {
  name: "Vuemik",
  /*data: () => ({
    values: {...this.initialValues}
  }),*/
  provide() {
    return {
      vuemik: {
        initialValues: this.initialValues,
      }
    };
  },
  methods: {
    handleSubmit() {
      this.onSubmit(this.$data.values)
    },
  },
  props: {
    onSubmit: { type: Function, required: true },
    initialValues: { type: Object, required: true }
  },
}
</script>

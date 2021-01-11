<template>
  <div class="vuemik">
    <slot :handleSubmit="handleSubmit"></slot>
  </div>
</template>

<script>
import { isSelect, isInput, isCheckbox } from "./helper";

export default {
  name: "Vuemik",
  props: {
    onSubmit: { type: Function, required: true },
    initialValues: { type: Object, required: true },
  },
  data: () => ({ values: JSON.parse(JSON.stringify(this.initialValues)) }),
  provide() {
    return {
      vuemik: {
        values: this.values,
        change: this.handleChange,
      },
    };
  },
  methods: {
    eventOrValue(e) {
      if (!(e instanceof Event)) {
        throw new Error("Instance of Event expected");
      }

      const { target } = e;

      if (isSelect(target)) {
        const selectedOption = target.options[target.selectedIndex];
        return selectedOption.value;
      }

      if (isInput(target)) {
        return isCheckbox(target) ? target.checked : target.value;
      }

      return target.value;
    },
    handleChange(e) {
      this.setValues({ [e.target.name]: this.eventOrValue(e) });
    },
    setValues(values) {
      Object.entries(values).forEach(([key, val]) => {
        this.$data.values[key] = val;
      });
    },
    handleSubmit() {
      this.onSubmit(this.values);
    },
  },
};
</script>

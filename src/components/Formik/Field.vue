<template>
  <div>
    <div v-if="component === 'text'">
      <input
        v-bind:type="component"
        v-bind:name="name"
        v-bind:value="value"
        v-bind:required="this.required === true ? 'required' : false"
        @input="OnChange"
      />
    </div>

    <div v-if="component === 'email'">
      <input
        v-bind:type="component"
        v-bind:name="name"
        v-bind:value="value"
        v-bind:required="this.required === true ? 'required' : false"
        @input="OnChange"
      />
    </div>

    <div v-if="component === 'password'">
      <input
        v-bind:type="component"
        v-bind:name="name"
        v-bind:value="value"
        v-bind:required="this.required === true ? 'required' : false"
        @input="OnChange"
      />
    </div>

    <div v-if="component === 'date'">
      <input
        v-bind:type="component"
        v-bind:name="name"
        v-bind:value="value"
        v-bind:min="min"
        v-bind:max="max"
        v-bind:required="this.required === true ? 'required' : false"
        @input="OnChange"
      />
    </div>

    <div v-if="component === 'number'">
      <input
        v-bind:type="component"
        v-bind:name="name"
        v-bind:value="value"
        v-bind:required="this.required === true ? 'required' : false"
        @input="OnChange"
      />
    </div>

    <div v-if="component === 'textarea'">
      <textarea
        v-bind:type="component"
        v-bind:name="name"
        v-bind:value="value"
        v-bind:required="this.required === true ? 'required' : false"
        @input="OnChange"
      />
    </div>

    <div v-if="component === 'submit'">
      <input v-bind:type="component" v-bind:value="name" />
    </div>

    <div v-if="component === 'select'">
      <select
        v-bind:name="name"
        v-bind:required="this.required === true ? 'required' : false"
        @input="OnChange"
      >
      <option disabled selected value> -- select an option -- </option>
        <option
          v-for="option in options"
          v-bind:value="option.value"
          v-bind:key="option.value"
        >
          {{ option.text }}
        </option>
      </select>
    </div>

    <div v-if="component === 'radio'">
      <input
        v-bind:type="component"
        v-bind:name="name"
        v-bind:value="fordedValue"
        v-bind:required="this.required === true ? 'required' : false"
        @input="OnChange"
      />
    </div>

    <div v-if="component === 'checkbox'">
      <input
        v-bind:type="component"
        v-bind:name="name"
        v-bind:value="valueCheck"
        v-bind:required="this.required === true ? 'required' : false"
        @input="OnChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Field",
  props: {
    valueCheck: Boolean,
    component: String,
    name: String,
    required: Boolean,
    options: Array,
    fordedValue: String,
    min: String,
    max: String
  },
  inject: ["formik"],
  data: function () {
    return {
      value: "",
    };
  },
  methods: {
    setValue() {
      this.value =
        this.formik.values[this.name] !== undefined
          ? this.formik.values[this.name]
          : "";
      if (this.component != "submit")
        this.formik.changeValues(this.name, this.value);
    },
    OnChange(event) {
      if (this.component == "checkbox") {
        this.formik.changeValues(this.name, event.target.checked);
      } else {
        this.formik.changeValues(this.name, event.target.value);
      }
    },
  },
  beforeMount() {
    this.setValue();
  },
};
</script>

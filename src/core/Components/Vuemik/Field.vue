<template>
  <div>
    <component
        :is="component"
        :name="name"
        :value="value"
    >
      <slot></slot>
    </component>
  </div>
</template>

<script>
import Vue from 'vue';
Vue.component('vuemik-text', () => import('@/core/Components/Vuemik/Fields/Text'))
Vue.component('vuemik-textarea', () => import('@/core/Components/Vuemik/Fields/TextArea'))
Vue.component('vuemik-select', () => import('@/core/Components/Vuemik/Fields/Specials/Select'))
export default {
  name: "Field",
  props: {
    component: {type: String, required: true},
    name: {type: String, required: true},
  },
  data: () => ({
    value: null
  }),
  inject: ["vuemik"],
  created() {
    this.setInitialValue()
  },
  methods: {
    setInitialValue() {
      if (this.vuemik.initialValues[this.name] !== undefined) {
        this.value = this.vuemik.initialValues[this.name]
      }
    }
  }
}
</script>

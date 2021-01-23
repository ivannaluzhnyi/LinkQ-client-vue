<template>
  <div :is="currentComponent" :swap-component="swapComponent" :property="computedProperty"></div>
</template>

<script>
import PropertyAll from "@/modules/Property/Components/PropertiesAll";
import PropertiesUpdate from "@/modules/Property/Components/PropertiesUpdate";
import PropertiesCreate from "@/modules/Property/Components/PropertiesCreate";

export default {
  name: "Properties",
  components: {
    propertiesAll: PropertyAll,
    propertiesUpdate: PropertiesUpdate,
    propertiesCreate: PropertiesCreate
  },
  data() {
    return {
      currentComponent: "propertiesAll",
      currentProperty: undefined,
    };
  },
  computed: {
    computedProperty() {
      return this.$data.currentProperty;
    },
  },
  methods: {
    swapComponent(component, property) {
      this.currentComponent = component;
      this.currentProperty = property;
    },
  },
};
</script>

<style scoped>
</style>

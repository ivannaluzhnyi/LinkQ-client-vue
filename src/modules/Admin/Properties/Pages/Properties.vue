<template>
  <div :is="currentComponent" :swap-component="swapComponent" :property="computedProperty"></div>
</template>

<script>
import PropertyAll from "@/modules/Admin/Properties/Components/PropertiesAll";
import PropertiesUpdate from "@/modules/Admin/Properties/Components/PropertiesUpdate";

export default {
  name: "Properties",
  components: {
    propertiesAll: PropertyAll,
    propertiesUpdate: PropertiesUpdate,
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

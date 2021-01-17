<template>
  <div :is="currentComponent" :swap-component="swapComponent"></div>
</template>

<script>
import PropertyAll from "@/modules/Admin/Properties/Components/PropertiesAll";
import PropertiesCreate from "@/modules/Admin/Properties/Components/PropertiesCreate";
import PropertiesUpdate from "@/modules/Admin/Properties/Components/PropertiesUpdate";

export default {
  name: "Properties",
  data: function () {
    return {
      currentComponent: 'propertiesAll'
    }
  },
  components: {
    'propertiesAll': PropertyAll,
    'propertiesCreate': PropertiesCreate,
    'propertiesUpdate': PropertiesUpdate
  },
  methods: {
    swapComponent: function(component) {
      this.currentComponent = component;
    }
  }
}
</script>

<style scoped>

</style>

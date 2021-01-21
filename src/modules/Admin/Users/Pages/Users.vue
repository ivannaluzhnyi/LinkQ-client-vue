<template>
  <div :is="currentComponent" :swap-component="swapComponent" :user="computedUser"></div>
</template>

<script>
import UserAll from "@/modules/Admin/Users/Components/UsersAll";

export default {
  name: "Users",
  components: {
    usersAll: UserAll
  },
  data() {
    return {
      currentComponent: "usersAll",
      currentUser: undefined,
    };
  },
  computed: {
    computedUser() {
      return this.$data.currentUser;
    },
  },

  methods: {
    swapComponent(component, user) {
      this.currentComponent = component;
      this.currentUser = user;
    },
  },
};
</script>

<style scoped>
</style>

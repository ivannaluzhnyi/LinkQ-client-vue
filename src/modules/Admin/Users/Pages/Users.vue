<template>
  <div :is="currentComponent" :swap-component="swapComponent" :user="computedUser"></div>
</template>

<script>
import UsersAll from "@/modules/Admin/Users/Components/UsersAll";
import UsersUpdate from "@/modules/Admin/Users/Components/UsersUpdate";
import UsersAdd from "@/modules/Admin/Users/Components/UsersAdd";

export default {
  name: "Users",
  components: {
    usersAll: UsersAll,
    UsersUpdate: UsersUpdate,
    UsersAdd: UsersAdd
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

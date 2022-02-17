<template>
  <nav id="navigation">
    <navigation-base></navigation-base>
  </nav>
  <router-view></router-view>
</template>

<script>
import NavigationBase from "./components/Layout/NavigationBase.vue";

export default {
  name: "App",
  components: {
    NavigationBase
  },
};
</script>

<template>
  <div>
    <AppNav />
    <router-view />
  </div>
</template>

<script>
import AppNav from "@/layout/AppNav.vue";

export default {
  name: "RootLayout",
  components: {
    AppNav,
  },
};
</script>

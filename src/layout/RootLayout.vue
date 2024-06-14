<template>
  <div class="root-layout">
    <AppHeader />

    <router-view />
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";

export default {
  name: "RootLayout",
  components: {
    AppHeader,
  },
};
</script>

<style scoped>
.root-layout {
  background-color: #FAFAFA;
  min-width: 384px;
  max-width: 448px;
  margin: 0 auto;
  border-radius: 30px;
}
</style>

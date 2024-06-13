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
  width: 80%;
  max-width: 448px;
  margin: auto;
  border-radius: 30px;
}
</style>

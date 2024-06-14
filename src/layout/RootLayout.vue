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

<style lang="scss" scoped>
.root-layout {
  @include autoMargin();
  background-color: $BACKGROUND_COLOR;
  min-width: 384px;
  max-width: 448px;
  border-radius: 30px;
}
</style>

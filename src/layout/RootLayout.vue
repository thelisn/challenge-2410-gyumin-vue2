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
  @include basicWidth(384px, 448px);
  background-color: $BACKGROUND_COLOR;
  border-radius: 30px;
}
</style>

<template>
  <div id="app">
    <RootLayout />
  </div>
</template>

<script>
import RootLayout from "@/layout/RootLayout.vue";

export default {
  components: {
    RootLayout,
  },
};
</script>

<style>
body {
  background-color: #E0E0E0;
}

.a11y-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  clip-path: polygon(0 0, 0 0, 0 0);
  border: 0;
}
</style>

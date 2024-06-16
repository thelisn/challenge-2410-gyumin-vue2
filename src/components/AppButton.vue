<template>
  <button :type="type" :class="className" @click="handleClickEvent">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",

  props: {
    type: {
      type: String,
      default: "button",
    },
    className: {
      type: String,
      default: "",
    },
  },

  methods: {
    handleClickEvent() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
}
</style>

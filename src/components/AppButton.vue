<template>
  <button
    :type="type" 
    :class="className" 
    @click="handleClickEvent"
  >
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
    className: String,
  },

  methods: {
    handleClickEvent() {
      this.$emit("onClick");
    },
  },
};
</script>

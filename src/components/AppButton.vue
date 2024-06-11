<template>
  <button :type="type" :class="['button', className]" :onClick="onClick" @click="handleClick" >
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
    onClick: Function,
    // onSubmit: Function,
  },
  methods: {
    handleClick: function () {
      if (this.onClick) {
        this.onClick();
      }
    },
  },
};
</script>

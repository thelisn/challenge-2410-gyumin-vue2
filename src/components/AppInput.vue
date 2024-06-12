<template>
  <div>
    <label :for="id" :class="hiddenLabel && 'a11y-hidden'">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :role="role"
      :ref="'inputRef'"
    />
  </div>
</template>

<script>
export default {
  name: "AppInput",
  props: {
    // label props
    label: String,
    hiddenLabel: {
      type: Boolean,
      default: false,
    },

    // input props
    type: {
      type: String,
      default: "text",
    },
    id: String,
    placeholder: String,
    role: {
      type: String,
      default: "input",
    },
  },
};
</script>

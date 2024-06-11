<template>
  <div>
    <label :for="id">
      {{ label }}
    </label>
    <input :id="id" :type="type" :placeholder="placeholder" ref="inputRef"/>
  </div>
</template>

<script>
export default {
  name: "AppInput",
  props: {
    type: {
      type: String,
      default: "text",
    },
    label: String,
    id: String,
    placeholder: String,
    role: String,
  },
};
</script>

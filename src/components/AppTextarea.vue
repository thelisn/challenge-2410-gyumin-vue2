<template>
  <div>
    <label :for="id">
      {{ label }}
    </label>

    <textarea
      :id="id"
      :placeholder="placeholder"
      :role="role"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "AppTextarea",

  props: {
    // label props
    label: String,
    // textarea props
    role: {
      type: String,
      default: "input",
    },
    id: String,
    placeholder: String,
    value: String,
  },
};
</script>

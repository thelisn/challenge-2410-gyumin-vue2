<template>
  <div>
    <label :for="id" :class="labelClass">
      {{ label }}
    </label>

    <input
      :type="type"
      :role="role"
      :id="id"
      :class="inputClass"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "AppInput",

  props: {
    // label props
    label: String,
    labelClass: String,
    // input props
    type: {
      type: String,
      default: "text",
    },
    role: {
      type: String,
      default: "input",
    },
    id: String,
    inputClass: String,
    placeholder: String,
    value: String,
  },
};
</script>

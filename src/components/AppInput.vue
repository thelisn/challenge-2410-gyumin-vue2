<template>
  <div>
    <label :for="id" :class="labelClass">
      {{ labelText }}
    </label>

    <input
      :type="type"
      :role="role"
      :id="id"
      :class="inputClass"
      :placeholder="placeholder"
      :value="value"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  name: "AppInput",

  props: {
    // label props
    labelText: {
      type: String,
      required: true,
    },
    labelClass: {
      type: String,
      default: "",
    },

    // input props
    type: {
      type: String,
      default: "text",
    },
    role: {
      type: String,
      default: "input",
    },
    id: {
      type: String,
      required: true,
    },
    inputClass: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },

  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

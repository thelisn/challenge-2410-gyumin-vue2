<template>
  <div>
    <label :for="id">
      {{ labelText }}
    </label>

    <textarea
      :id="id"
      :placeholder="placeholder"
      :role="role"
      :value="value"
      @input="handleInput"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "AppTextarea",

  props: {
    // label props
    labelText: {
      type: String,
      required: true,
    },
    // textarea props
    role: {
      type: String,
      default: "input",
    },
    id: {
      type: String,
      required: true,
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

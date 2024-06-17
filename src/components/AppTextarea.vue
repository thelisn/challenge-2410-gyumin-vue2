<template>
  <div class="textarea-component">
    <label :for="uid">
      {{ labelText }}
    </label>

    <textarea
      :id="uid"
      :placeholder="placeholder"
      :role="role"
      :value="value"
      @input="handleInput"
    ></textarea>
  </div>
</template>

<script>
import { v4 } from "uuid";

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
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      uniqueId: `input-${v4()}`,
    };
  },

  computed: {
    uid() {
      return this.uniqueId;
    },
  },

  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.textarea-component {
  display: flex;
  gap: 6px;

  label {
    font-size: 0.875rem;
    font-weight: 400;
    padding-top: 6px;
  }

  textarea {
    font-size: 0.75rem;
    height: 200px;
    flex-grow: 1;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 4px;
  }
}
</style>

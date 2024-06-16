<template>
  <div class="input-component">
    <label :for="id" :class="srOnly === 'true' && 'sr-only'">
      {{ labelText }}
    </label>

    <input
      :type="type"
      :role="role"
      :id="id"
      :placeholder="placeholder"
      :value="value"
      :max="type === 'date' ? '9999-12-31' : null"
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
    srOnly: {
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

<style lang="scss" scoped>
.sr-only {
  @include sr-only();
}

.input-component {
  display: flex;
  align-items: center;
  gap: 6px;
}

label {
  font-size: 0.875rem;
  font-weight: 400;
}

input {
  @include autoMargin();
  font-size: 0.75rem;
  height: 26px;
  flex-grow: 1;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 4px;
}
</style>

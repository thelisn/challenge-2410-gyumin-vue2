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
    // todo: hiddenLabel 타입 경고 발생하는 문제 수정할 것
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
    value: String,
  },
};
</script>

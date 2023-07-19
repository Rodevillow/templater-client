<template>
  <input
    class="input"
    :class="{ 
      'is-invalid': isDirty && isInvalid, 
      'is-valid': isDirty && !isInvalid 
    }"
    :type="props.type"
    :placeholder="props.placeholder"
    :value="props.value"
    @focus="onFocus"
    @input="onInput"
    @blur="onBlur"
  />
</template>

<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  // Deperecated
  errorObject: {
    type: Object,
    default: {}
  },
  isDirty: {
    type: Boolean,
    default: false
  },
  isInvalid: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(["focus", "input", "blur"]);

const onFocus = (event: any) => emit("focus", event);
const onInput = (event: any) => emit("input", event);
const onBlur = (event: any) => emit("blur", event);
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";

.input {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  margin: 0;
  padding: 15px;
  background-color: transparent;
  border: 1px solid $text-color;
  border-radius: 8px;
  outline: none;
  color: $disabled-color;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;

  &::placeholder {
    color: $disabled-color;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0em;
  }
}

.is-invalid {
  border-color: red;
}

.is-valid {
  border-color: green;
}
</style>

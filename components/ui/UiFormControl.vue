<template>
  <div class="ui-form-control">
    <div
      class="ui-form-control__label"
      :class="{
        'hide': label.length === 0,
        'has-error': props.errors?.length > 0
      }"
    >{{ props.label }}</div>
    <div><slot /></div>
    <div class="text-error has-error" v-for="error in props.errors">{{ error }}</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  errors: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";

.text-error {
  font-size: 13px;
}

.has-error {
  color: red;
}

.ui-form-control {
  &__label {
    margin-bottom: calc($spacer / 2);

    .hide {
      display: none;
    }
  }
}
</style>

<template>
  <div class="ui-form-control">
    <div class="ui-form-control__label"
          :class="{'d-hide': label.length === 0}"
    >
      {{ props.label }}
    </div>
    <slot/>
    <span class="small text-danger"
          v-for="error in props.errors"
    >
      {{ error }}
    </span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    default: ""
  },
  errors: {
    type: Array<string>,
    default: []
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";

.ui-form-control {
  &__label {
    margin-bottom: calc($spacer / 2);
  }
}
</style>
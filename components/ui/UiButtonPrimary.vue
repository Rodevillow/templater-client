<template>
  <button class="btn btn-primary"
          :type="props.type"
          @click="handleClick"
  >
    <UiIconSpinnerLoader v-if="isLoading" style="width: 1rem; height: 1rem;" />
    <slot  v-if="!isLoading" />
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String as PropType<"button" | "submit" | "reset" | undefined>,
    default: 'button',
  },
  isLoading: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['click'])
const handleClick = () => emit('click')
</script>

<style lang="scss" scoped></style>

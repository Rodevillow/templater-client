<template>
  <button class="btn btn-primary"
          :type="props.type"
          @click="handleClick"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String as PropType<"button" | "submit" | "reset" | undefined>,
    default: undefined,
  },
});
const emit = defineEmits(['click'])
const handleClick = () => emit('click')
</script>

<style lang="scss" scoped></style>

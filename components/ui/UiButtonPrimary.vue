<template>
  <button class="btn btn-primary" :type="props.type">
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
</script>

<style lang="scss" scoped></style>

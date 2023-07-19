<template>
  <div class="card rounded overflow-hidden border-none">
    <TheSlider />

    <div class="card__wrapper p-2">
      <UiTextH2 class="mt-2">{{ props.title }}</UiTextH2>
      <UiDefaultText class="mt-1">{{ props.description }}</UiDefaultText>

      <div class="card__wrapper-link mt-2">
        <UiIconChevronHeart />
        <UiIconChevronCartEmpty class="ml-2" />
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import TheSlider from "../slider/TheSlider.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.card {
  border: none;
  &__wrapper {
    height: 100%;
    background: $secondary-color;
    &-link {
      background: $secondary-color;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>

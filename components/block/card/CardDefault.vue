<template>
  <div class="card rounded overflow-hidden border-none">
    <TheSlider />

    <div class="card__wrapper">
      <UiTextH2 class="card__title">{{ props.title }}</UiTextH2>
      <UiTextParagraph class="card__description">{{ props.description }}</UiTextParagraph>

      <div class="card__wrapper-link">
        <UiIconChevronHeart />
        <UiIconChevronCartEmpty />
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import TheSlider from "../slider/TheSlider.vue";
import UiTextParagraph from "~/components/ui/UiTextParagraph.vue";

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
    background: var(--color-default);

    &-link {
      display: flex;
      justify-content: flex-end;
      padding: calc(var(--spacer) * 2);

      svg {
        stroke: var(--color-secondary);
        height: 20px;
        width: 20px;
        margin-right: var(--spacer);

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  &__title {
    padding: var(--spacer) calc(var(--spacer) * 2);
  }

  &__description {
    padding: var(--spacer) calc(var(--spacer) * 2);
  }
}
</style>

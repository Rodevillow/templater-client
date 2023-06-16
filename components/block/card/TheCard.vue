<template>
  <div>
    <div class="card mb-3">
      <the-slider></the-slider>

      <div class="card__wrapper p-2">
        <ui-text-h-2 class="mt-2">Title</ui-text-h-2>
        <ui-default-text class="mt-1"
          >Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when...</ui-default-text
        >
        <div class="card__wrapper-link mt-2">
          <a href="#"
            ><ui-icon-chevron-heart style="width: 30px; height: 30px"
          /></a>
          <a class="ml-2" href="#"
            ><ui-icon-chevron-cart-empty style="width: 30px; height: 30px"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheSlider from "../slider/TheSlider.vue";
const components = defineComponent({ TheSlider });
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.card {
  width: 306px;
  height: 387px;
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

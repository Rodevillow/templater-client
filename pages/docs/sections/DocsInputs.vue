<template>
  <div>
    <UiInput class="input-custom" type="text" placeholder="Simple input..."/>

    <UiFormControl
        label="Label for input"
        class="input-custom-wrapper"
    >
      <UiInput
          type="text"
          placeholder="Input with label..."
      />
    </UiFormControl>

    <UiFormControl
        label="Label for input with errors"
        class="input-custom-wrapper"
        :errors="['Test error message']"
    >
      <UiInput
          type="text"
          placeholder="Input with errors..."
          :is-dirty="true"
          :is-invalid="true"
      />
    </UiFormControl>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.input-custom {
  margin-bottom: 20px;

  &-wrapper {
    margin-bottom: 20px;
  }
}
</style>
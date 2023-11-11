<template>
  <div class="docs-buttons">
    <UiButtonDefault>Default</UiButtonDefault>
    <UiButtonDefault id="draggable" state="primary">Primary</UiButtonDefault>
    <UiButtonDefault state="secondary">Secondary</UiButtonDefault>
    <UiButtonDefault state="success">Success</UiButtonDefault>
    <UiButtonDefault state="danger">Danger</UiButtonDefault>
    <UiButtonDefault state="warning">Warning</UiButtonDefault>
    <UiButtonDefault state="info">Info</UiButtonDefault>
    <UiButtonDefault state="light">Light</UiButtonDefault>
    <UiButtonDefault state="dark">Dark</UiButtonDefault>
    <UiButtonDefault state="link">Link</UiButtonDefault>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.docs {
  &-buttons {
    margin-bottom: 20px;

    button {
      margin-right: 10px;
      margin-bottom: 10px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
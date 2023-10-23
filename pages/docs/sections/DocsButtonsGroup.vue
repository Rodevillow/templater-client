<template>
  <div class="docs-buttons-group">
    <UiButtonGroup>
      <UiButtonDefault state="info">Info</UiButtonDefault>
      <UiButtonDefault state="success">Success</UiButtonDefault>
      <UiButtonDefault state="danger">Danger</UiButtonDefault>
    </UiButtonGroup>

    <br>

    <!-- TODO :: Check why css styles not ovverided the buttons default styles -->

    <UiButtonGroup>
      <UiButtonDefault state="info"><UiIconInfo /></UiButtonDefault>
      <UiButtonDefault state="success"><UiIconCheck /></UiButtonDefault>
      <UiButtonDefault state="danger"><UiIconRadioactive /></UiButtonDefault>
    </UiButtonGroup>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.docs {
  &-buttons {
    margin-bottom: 20px;
  }
}
</style>
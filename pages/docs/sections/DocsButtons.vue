<template>
  <div class="docs-buttons">
    <UiButtonDefault>Default</UiButtonDefault>
    <UiButtonDefault state="primary">Primary</UiButtonDefault>
    <UiButtonDefault state="secondary">Secondary</UiButtonDefault>
    <UiButtonDefault state="success">Success</UiButtonDefault>
    <UiButtonDefault state="danger">Danger</UiButtonDefault>
    <UiButtonDefault state="warning">Warning</UiButtonDefault>
    <UiButtonDefault state="info">Info</UiButtonDefault>
    <UiButtonDefault state="light">Light</UiButtonDefault>
    <UiButtonDefault state="dark">Dark</UiButtonDefault>
    <UiButtonDefault state="link">Link</UiButtonDefault>
  </div>
  <div class="docs-code-example-wrapper">
    <div class="docs-code-rows-numbers">
      <span v-for="(row, index) in splittedCodeExample" :key="row">{{ index }}</span>
    </div>
    <div class="docs-code-example">
      <div class="docs-code-example__row" v-for="row in splittedCodeExample" :key="row">{{ row }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const codeExample:String = `
    <UiButtonDefault>Default</UiButtonDefault>
    <UiButtonDefault state="primary">Primary</UiButtonDefault>
    <UiButtonDefault state="secondary">Secondary</UiButtonDefault>
    <UiButtonDefault state="success">Success</UiButtonDefault>
    <UiButtonDefault state="danger">Danger</UiButtonDefault>
    <UiButtonDefault state="warning">Warning</UiButtonDefault>
    <UiButtonDefault state="info">Info</UiButtonDefault>
    <UiButtonDefault state="light">Light</UiButtonDefault>
    <UiButtonDefault state="dark">Dark</UiButtonDefault>
    <UiButtonDefault state="link">Link</UiButtonDefault>
`;

const splittedCodeExample = computed(() => {
  return codeExample.split('\n').filter(x => x.length > 0)
})
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

  &-code {
    &-rows-numbers {
      display: flex;
      flex-direction: column;
      width: 20px;
      border-right: 1px solid #8080805e;
      border-top: 1px solid #8080805e;
      border-bottom: 1px solid #8080805e;

      span {
        //background-color: #ded7d7;
        width: 100%;
        display: flex;
        justify-content: center;

        &:nth-child(even) {
          background-color: #f2f2f2
        }
      }
    }
    &-example {
      width: 100%;

      &-wrapper {
        border-radius: 10px;
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        background-color: #e4dfdf;
        border: 1px solid #8080805e;
      }

      &__row {
        color: black;
        padding-left: 10px;
        padding-right: 10px;

        &:nth-child(odd) {
          background-color: #f2f2f2
        }
      }
    }
  }
}
</style>
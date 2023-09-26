<template>
  <div class="docs-alerts">

    <h3>Properties description:</h3>

    <DocsAttributes :attributes-description="attributesDescription" />

    <hr>

    <UiAlert>Default alert.</UiAlert>
    <UiAlert state="info">Info alert.</UiAlert>
    <UiAlert state="success" :text-light="true">Success alert.</UiAlert>
    <UiAlert state="warning" :text-light="true">Warning alert.</UiAlert>
    <UiAlert state="danger" :text-light="true">Danger alert.</UiAlert>

    <UiAlert :outline="true">Default outline alert.</UiAlert>
    <UiAlert state="info" :outline="true">Info outline alert.</UiAlert>
    <UiAlert state="success" :outline="true">Success outline alert.</UiAlert>
    <UiAlert state="warning" :outline="true">Warning outline alert.</UiAlert>
    <UiAlert state="danger" :outline="true">Danger outline alert.</UiAlert>
  </div>
</template>

<script lang="ts" setup>
import DocsAttributes from "~/pages/docs/components/DocsAttributes.vue";

const attributesDescription = [
  {
    name: 'state',
    description: `Has variants: (
        <strong>default</strong>,
        <strong>info</strong>,
        <strong>success</strong>,
        <strong>warning</strong>,
        <strong>danger</strong>).`
  },
  {
    name: 'outline',
    description: 'Change colorizing from background to border (Make background transparent).'
  },
  {
    name: 'text-light',
    description: 'You can use this attribute if the text is not contrasted related background.'
  },
  {
    name: 'with-icon',
    description: 'Include icon by state name (info, success, warning, danger or default).'
  },
]
</script>

<style lang="scss" scoped>
.docs {
  &-alerts {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
}
</style>
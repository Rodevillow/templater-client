<template>
  <div class="docs-badges">

    <h3>Properties description:</h3>

    <DocsAttributes :attributes-description="attributesDescription" />

    <hr>

    <div class="docs-badges__wrapper">
      <UiBadge>Default</UiBadge>
      <UiBadge state="primary" :text-light="true">Primary</UiBadge>
      <UiBadge state="secondary" :text-light="true">Secondary</UiBadge>
      <UiBadge state="info" :text-light="true">Info</UiBadge>
      <UiBadge state="success" :text-light="true">Success</UiBadge>
      <UiBadge state="danger" :text-light="true">Danger</UiBadge>
      <UiBadge state="warning" :text-light="true">Warning</UiBadge>
      <UiBadge state="light">Light</UiBadge>
      <UiBadge state="dark" :text-light="true">Dark</UiBadge>

      <UiBadge :outline="true">Default</UiBadge>
      <UiBadge state="primary" :outline="true">Primary</UiBadge>
      <UiBadge state="secondary" :outline="true">Secondary</UiBadge>
      <UiBadge state="success" :outline="true">Success</UiBadge>
      <UiBadge state="danger" :outline="true">Danger</UiBadge>
      <UiBadge state="warning" :outline="true">Warning</UiBadge>
      <UiBadge state="info" :outline="true">Info</UiBadge>
      <UiBadge state="light">Light</UiBadge>
      <UiBadge state="dark" :outline="true">Dark</UiBadge>
    </div>

  </div>
</template>

<script lang="ts" setup>
import DocsAttributes from "~/pages/docs/components/DocsAttributes.vue";

const attributesDescription = [
  {
    name: 'state',
    description: `Has variants: (
      <strong>default</strong>,
      <strong>primary</strong>,
      <strong>secondary</strong>,
      <strong>info</strong>,
      <strong>success</strong>,
      <strong>warning</strong>,
      <strong>danger</strong>,
      <strong>light</strong>,
      <strong>dark</strong>).`
  },
  {
    name: 'outline',
    description: 'Change colorizing from background to border (Make background transparent).'
  },
  {
    name: 'text-light',
    description: 'You can use this attribute if the text is not contrasted related background.'
  },
]
</script>

<style lang="scss" scoped>
.docs {
  &-badges {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    &__wrapper {
      display: flex;
      flex-wrap: wrap;

      & > span {
        margin-right: 10px;
        margin-bottom: 10px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
<template>
  <div class="docs-breadcrumb">

    <h3>Properties description:</h3>

    <DocsAttributes :attributes-description="attributesDescription" />

    <hr>

    <div class="docs-breadcrumb__wrapper">
      <UiBreadcrumb :list="breadcrumbData" />
    </div>

  </div>
</template>

<script lang="ts" setup>
import DocsAttributes from "~/pages/docs/components/DocsAttributes.vue";

const attributesDescription = [
  {
    name: 'list',
    description: `Type: Array&lt;IBreadcrumb&gt;`
  },
]

const breadcrumbData = [
  {
    name: "Home",
    to: "/"
  },
  {
    name: "Products",
    to: "/"
  },
  {
    name: "Product",
    to: "/"
  },
]
</script>

<style lang="scss" scoped>
.docs {
  &-breadcrumbs {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    &__wrapper {

    }
  }
}
</style>
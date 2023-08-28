<template>
  <div class="the-side-navigator">
    <TheSideNavigatorGroup
        v-for="navGroup in navGroups"
        :title="navGroup.title"
        :items="navGroup.items"
        class="the-side-navigator__group"
        :key="navGroup.title"
    />
  </div>
</template>

<script lang="ts" setup>
import TheSideNavigatorGroup from "~/components/block/TheSideNavigatorGroup.vue";

const navGroups = reactive([
  {
    title: 'Getting started',
    items: [
      'Introduction',
      'Installing',
    ],
  },
  {
    title: 'Ui Elements',
    items: [
      'Content',
      'Inputs',
    ],
  },
  {
    title: 'Components',
    items: [
      'Accordion',
      'Alerts',
      'Badge',
      'Breadcrumb',
      'Buttons',
      'Button group',
      'Card',
      'Carousel',
      'Close button',
      'Collapse',
      'Dropdowns',
      'List group',
      'Modal',
      'Navs & tabs',
      'Navbar',
      'Pagination',
      'Offcanvas',
      'Popovers',
      'Progress',
      'Scrollspy',
      'Spinners',
      'Toasts',
    ],
  },
  {
    title: 'Smart components & Modules',
    items: [
      'Uploader',
      'Pagination',
    ],
  },
])
</script>

<style lang="scss" scoped>
.the-side-navigator {
  top: 0;
  padding: 20px 0;
  position: sticky;
  height: 100vh;
  overflow: scroll;

  &__group {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
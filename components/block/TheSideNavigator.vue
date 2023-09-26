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
      { title: 'Introduction', disabled: true },
      { title: 'Installing', disabled: true },
    ],
  },
  {
    title: 'Ui Elements',
    items: [
      { title: 'Typography', id: 'typography', disabled: false }, // +
      { title: 'Buttons', id: 'buttons', disabled: false }, // +
      { title: 'Inputs', id: 'inputs', disabled: false }, // +
    ],
  },
  {
    title: 'Components',
    items: [
      { title: 'Accordion', disabled: true },
      { title: 'Alerts', id: 'alerts', disabled: false }, // +
      { title: 'Badge', id: 'badges', disabled: false }, // +
      { title: 'Breadcrumb', disabled: true },
      { title: 'Buttons', disabled: true },
      { title: 'Button group', disabled: true },
      { title: 'Card', disabled: true },
      { title: 'Carousel', disabled: true },
      { title: 'Close button', disabled: true },
      { title: 'Collapse', disabled: true },
      { title: 'Dropdowns', disabled: true },
      { title: 'List group', disabled: true },
      { title: 'Modal', disabled: true },
      { title: 'Navs & tabs', disabled: true },
      { title: 'Navbar', disabled: true },
      { title: 'Pagination', disabled: true },
      { title: 'Offcanvas', disabled: true },
      { title: 'Popovers', disabled: true },
      { title: 'Progress', disabled: true },
      { title: 'Scrollspy', disabled: true },
      { title: 'Spinners', disabled: true },
      { title: 'Toasts', disabled: true },
    ],
  },
  {
    title: 'Smart components & Modules',
    items: [
      { title: 'Uploader', disabled: true },
      { title: 'Pagination', disabled: true },
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
  //scroll-behavior: smooth;
  width: 200px;

  &__group {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
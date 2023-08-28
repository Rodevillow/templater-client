<template>
  <div class="the-side-menu-group">
    <UiTextH3>{{ props.title }}</UiTextH3>
    <ul v-if="props.items?.length > 0">
      <li v-for="item in props.items" :key="item">
        <UiTextParagraph>{{ item }}</UiTextParagraph>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import UiTextParagraph from "~/components/ui/UiTextParagraph.vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  items: {
    type: Array,
    default: [],
  }
})
</script>

<style lang="scss" scoped>
.the-side-menu-group {
  ul {
    list-style: none;
    padding-left: 20px;
    border-left: 1px solid gainsboro;

    li {
      margin-top: 10px;
      transition: .1s;

      &:hover {
        transition: .1s;
        opacity: .5;
        cursor: pointer;
      }
    }
  }
}
</style>
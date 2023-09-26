<template>
  <div class="docs-block">
    <UiTextH2
        class="docs-block_title"
        v-if="props.title"
    >
      # {{ props.title }}
    </UiTextH2>

    <div class="docs-block_content">
      <slot name="default"/>
    </div>

    <div class="docs-block_code-example">
      <slot name="codeExample"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
})
</script>

<style lang="scss" scoped>
.docs-block {
  border: 1px solid gainsboro;
  border-radius: 10px;
  padding: 20px;

  &_title {
    margin-bottom: 10px;
  }

  &_content {
    // code ...
  }

  &_code-example {
    margin-top: 20px;
  }
}
</style>
<template>
  <div class="docs-properties-describer">
    <div class="docs-properties-describer__row" v-for="attributeDescription in props.attributesDescription">
      <div class="docs-properties-describer__row_prop-name">
        {{ attributeDescription.name }}</div>
      <div class="docs-properties-describer__row_prop-description"
           v-html="attributeDescription.description"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IDocsAttributes {
  name: String,
  description: String,
}

const props = defineProps({
  attributesDescription: {
    type: Array<IDocsAttributes>,
    default: []
  }
})
</script>

<style lang="scss" scoped>
pre {
  color: #dcd8d1;
  font-weight: 900;
  text-shadow: none;
}

.docs-properties-describer {
  display: grid;
  grid-template-columns: 1fr;

  &__row {
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
    min-height: 40px;
    height: 100%;
    padding: 10px calc(var(--spacer) * 1.5);
    background-color: #6c757d;

    &:nth-child(odd) {
      background-color: #949494;
    }

    &_prop {
      &-name {
        color: var(--color-light);
        font-size: 14px;
        font-weight: bold;
      }
      &-description {
        font-size: 13px;
        color: var(--color-light);
      }
    }
  }
}
</style>
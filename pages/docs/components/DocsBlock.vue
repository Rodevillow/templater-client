<template>
  <div class="docs-block">
    <UiTextH2
        class="docs-block_title"
        v-if="props.title"
    >
      # {{ props.title }}
    </UiTextH2>

    <div class="docs-block_content">
      <slot/>
    </div>

    <p>qwe<slot name="codeExample" />123</p>

<!--    <div class="docs-block__code-example-wrapper">-->
<!--      <div class="docs-block__code-rows-numbers">-->
<!--        <span v-for="(row, index) in splittedCodeExample" :key="row">{{ index }}</span>-->
<!--      </div>-->
<!--      <div class="docs-block__code-example">-->
<!--        <div class="docs-block-code-example__row" v-for="row in splittedCodeExample" :key="row">{{ row }}</div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: ""
  },
  // codeExample: {
  //   type: String,
  //   default: ""
  // }
})


const slots = useSlots();
console.log('AIJSDNAKWJDNAWDJNWAIJWIKd', slots?.codeExample, slots)

// const codeExample:String = `
//     <UiButtonDefault>Default</UiButtonDefault>
//     <UiButtonDefault state="primary">Primary</UiButtonDefault>
//     <UiButtonDefault state="secondary">Secondary</UiButtonDefault>
//     <UiButtonDefault state="success">Success</UiButtonDefault>
//     <UiButtonDefault state="danger">Danger</UiButtonDefault>
//     <UiButtonDefault state="warning">Warning</UiButtonDefault>
//     <UiButtonDefault state="info">Info</UiButtonDefault>
//     <UiButtonDefault state="light">Light</UiButtonDefault>
//     <UiButtonDefault state="dark">Dark</UiButtonDefault>
//     <UiButtonDefault state="link">Link</UiButtonDefault>
// `;
//
// const splittedCodeExample = computed(() => {
//   return codeExample.split('\n').filter(x => x.length > 0)
// })
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

  &__code {
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
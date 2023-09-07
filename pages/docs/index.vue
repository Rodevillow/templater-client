<template>
  <div class="docs">
    <div class="docs__side-navigator">
      <TheSideNavigator/>
    </div>

    <div class="docs__content">
      <UiTextH1 class="docs__content_title">Templater UI</UiTextH1>

      <DocsBlock class="docs__content_block" title="Typography">
        <DocsTypography id="docs-typography"/>
      </DocsBlock>

      <DocsBlock class="docs__content_block" title="Buttons">
        <template #default>
          <DocsButtons id="docs-buttons"/>
        </template>
<!--        <template v-slot:codeExample>-->
<!--          <pre v-pre>-->
<!--            <code>-->
        <template #codeExample>
          <p>Some random asodmasodnasdjnaso dnas djnasdjnasd jnas</p>
        </template>
<!--              <UiButtonDefault>Default</UiButtonDefault>-->
<!--              <UiButtonDefault state="primary">Primary</UiButtonDefault>-->
<!--              <UiButtonDefault state="secondary">Secondary</UiButtonDefault>-->
<!--              <UiButtonDefault state="success">Success</UiButtonDefault>-->
<!--              <UiButtonDefault state="danger">Danger</UiButtonDefault>-->
<!--              <UiButtonDefault state="info">Info</UiButtonDefault>-->
<!--              <UiButtonDefault state="light">Light</UiButtonDefault>-->
<!--              <UiButtonDefault state="dark">Dark</UiButtonDefault>-->
<!--              <UiButtonDefault state="link">Link</UiButtonDefault>-->
<!--            </code>-->
<!--          </pre>-->
      </DocsBlock>

<!--      <DocsBlock class="docs__content_block" title="Inputs">-->
<!--        <DocsInputs id="docs-inputs"/>-->
<!--      </DocsBlock>-->

<!--      <DocsBlock class="docs__content_block" title="Components">-->
<!--        <DocsComponents id="docs-components"/>-->
<!--      </DocsBlock>-->

<!--      <DocsBlock class="docs__content_block" title="Icons">-->
<!--        <DocsIcons id="docs-icons"/>-->
<!--      </DocsBlock>-->

<!--      <hr>-->

      <!--TODO :: THIS IS PLACED HERE JUST FOR TEST-->
<!--      <UISelect :list-of-options="listOfOptions" />-->

<!--      <hr>-->

      <!--TODO :: THIS IS PLACED HERE JUST FOR TEST-->
<!--      <UiRateStars stars-length="5" rate="3" />-->

    </div>
  </div>
</template>

<script lang="ts" setup>

import UISelect from "~/components/ui/UiSelect.vue";
import DocsBlock from "~/pages/docs/components/DocsBlock.vue";
import DocsButtons from "~/pages/docs/sections/DocsButtons.vue";
import DocsComponents from "~/pages/docs/sections/DocsComponents.vue";
import DocsIcons from "~/pages/docs/sections/DocsIcons.vue";
import DocsInputs from "~/pages/docs/sections/DocsInputs.vue";
import DocsTypography from "~/pages/docs/sections/DocsTypography.vue";
import TheSideNavigator from "~/components/block/TheSideNavigator.vue";

const listOfOptions = [
  {
    value: 'test1',
    text: 'Test 1',
  },
  {
    value: 'test2',
    text: 'Test 2',
  },
  {
    value: 'test3',
    text: 'Test 3',
  },
];
</script>

<style lang="scss" scoped>

.code {
  background-color: red;
}

hr {
  margin-top: 40px;
  margin-bottom: 40px;
}

.docs {
  display: flex;

  &__side-navigator {
    max-width: 200px;
    width: 100%;
  }

  &__content {
    width: 100%;
    padding: 40px;

    &_title {
      margin-bottom: 40px;
      text-align: center;
    }

    &_block {
      margin-bottom: 40px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
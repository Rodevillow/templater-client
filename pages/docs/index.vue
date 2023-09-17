<template>
  <div class="docs">
    <div class="docs__side-navigator">
      <TheSideNavigator/>
    </div>

    <div class="docs__content">
      <UiTextH1 class="docs__content_title">Templater UI</UiTextH1>

      <DocsBlock class="docs__content_block" title="Typography">
        <template #default>
          <DocsTypography id="docs-typography"/>
        </template>
        <template #codeExample>
          <TheCodeExampler :codeExample="codeExampleTypography" />
        </template>
      </DocsBlock>

      <DocsBlock class="docs__content_block" title="Buttons">
        <template #default>
          <DocsButtons id="docs-buttons"/>
        </template>
        <template #codeExample>
          <TheCodeExampler :code-example="codeExampleButtons" />
        </template>
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

    </div>
  </div>
</template>

<script lang="ts" setup>
import DocsTypography from "~/pages/docs/sections/DocsTypography.vue";
import DocsButtons from "~/pages/docs/sections/DocsButtons.vue";

import codeExampleTypography from "~/pages/docs/composables/DocsTypography";
import codeExampleButtons from "~/pages/docs/composables/DocsButtons";

import UISelect from "~/components/ui/UiSelect.vue";
import DocsBlock from "~/pages/docs/components/DocsBlock.vue";
import DocsComponents from "~/pages/docs/sections/DocsComponents.vue";
import DocsIcons from "~/pages/docs/sections/DocsIcons.vue";
import DocsInputs from "~/pages/docs/sections/DocsInputs.vue";
import TheSideNavigator from "~/components/block/TheSideNavigator.vue";
import TheCodeExampler from "~/components/block/TheCodeExampler.vue";

</script>

<style lang="scss" scoped>

.code {

}

hr {
  margin-top: 40px;
  margin-bottom: 40px;
}

.docs {
  display: flex;

  &__side-navigator {
    width: 200px;
  }

  &__content {
    max-width: calc(100vw - 200px - 80px);
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
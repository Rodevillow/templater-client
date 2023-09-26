<template>
  <div class="docs">
    <div class="docs__side-navigator">
      <TheSideNavigator/>
    </div>

    <div class="docs__content">
      <UiTextH1 class="docs__content_title">Templater UI</UiTextH1>

      <DocsBlock
          class="docs__content_block"
          title="Typography"
          id="typography"
      >
        <template #default>
          <DocsTypography id="docs-typography"/>
        </template>
        <template #codeExample>
          <TheCodeExampler :codeExample="codeExampleTypography"/>
        </template>
      </DocsBlock>

      <DocsBlock
          class="docs__content_block"
          title="Buttons"
          id="buttons"
      >
        <template #default>
          <DocsButtons id="docs-buttons"/>
        </template>
        <template #codeExample>
          <TheCodeExampler :code-example="codeExampleButtons"/>
        </template>
      </DocsBlock>

      <DocsBlock
          class="docs__content_block"
          title="Inputs"
          id="inputs"
      >
        <template #default>
          <DocsInputs id="docs-inputs"/>
        </template>
        <template #codeExample>
          <TheCodeExampler :code-example="codeExampleInputs"/>
        </template>
      </DocsBlock>

      <DocsBlock
          class="docs__content_block"
          title="Alerts"
          id="alerts"
      >
        <template #default>
          <DocsAlerts id="docs-alerts"/>
        </template>
        <template #codeExample>
          <TheCodeExampler :code-example="codeExampleAlerts"/>
        </template>
      </DocsBlock>

      <DocsBlock
          class="docs__content_block"
          title="Badges"
          id="badges"
      >
        <template #default>
          <DocsBadges id="docs-badges"/>
        </template>
        <template #codeExample>
          <TheCodeExampler :code-example="codeExampleBadges"/>
        </template>
      </DocsBlock>

    </div>
  </div>
</template>

<script lang="ts" setup>
import DocsAlerts from "~/pages/docs/sections/DocsAlerts.vue";
import DocsBadges from "~/pages/docs/sections/DocsBadges.vue";
import DocsBlock from "~/pages/docs/components/DocsBlock.vue";
import DocsButtons from "~/pages/docs/sections/DocsButtons.vue";
import DocsInputs from "~/pages/docs/sections/DocsInputs.vue";
import DocsTypography from "~/pages/docs/sections/DocsTypography.vue";

import TheSideNavigator from "~/components/block/TheSideNavigator.vue";
import TheCodeExampler from "~/components/block/TheCodeExampler.vue";

import codeExampleTypography from "~/pages/docs/composables/DocsTypography";
import codeExampleButtons from "~/pages/docs/composables/DocsButtons";
import codeExampleInputs from "~/pages/docs/composables/DocsInputs";
import codeExampleAlerts from "~/pages/docs/composables/DocsAlerts";
import codeExampleBadges from "~/pages/docs/composables/DocsBadges";

</script>

<style lang="scss" scoped>
.docs {
  display: flex;

  &__side-navigator {
    width: 200px;
  }

  &__content {
    max-width: calc(1000px - 200px);
    width: 100%;
    padding: 40px 0 40px 40px;

    &_title {
      margin-bottom: 40px;
      text-align: center;
    }

    &_block {
      margin-top: 20px;

      &:first-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
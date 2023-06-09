<template>
  <h1>Ui elements</h1>
  <div class="container">
    <div class="row gap-5">
      <div class="d-flex flex-column gap-3 col-2">
        <h3>Buttons</h3>
        <UiButtonPrimary>ButtonPrimary</UiButtonPrimary>
        <UiButtonSuccess>ButtonSuccess</UiButtonSuccess>
        <UiButtonSecondary>UiButtonSecondary</UiButtonSecondary>
        <UiButtonDisabled>UiButtonDisabled</UiButtonDisabled>
      </div>
      <div class="col-10">
        <h3>Fonts</h3>
        <UiTextH1>Default text - H1</UiTextH1>
        <UiTextH2>Default text - H2</UiTextH2>
        <UiTextH3>Default text - H3</UiTextH3>
        <UiTextSmall>Small text - Paragraph</UiTextSmall>
      </div>
      <div class="d-flex flex-column gap-3 col-6">
        <h3>Inputs</h3>
        <UiInput label="Label" placeholder="Placeholder..." />
        <UiInput placeholder="Placeholder..." />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import UiButtonSuccess from "~/components/ui/UiButtonSuccess.vue";
import UiButtonSecondary from "~/components/ui/UiButtonSecondary.vue";
import UiButtonPrimary from "~/components/ui/UiButtonPrimary.vue";
import UiButtonDisabled from "~/components/ui/UiButtonDisabled.vue";

import UiTextH1 from "~/components/ui/UiTextH1.vue";
import UiTextH2 from "~/components/ui/UiTextH2.vue";
import UiTextH3 from "~/components/ui/UiTextH3.vue";
import UiTextSmall from "~/components/ui/UiTextSmall.vue";

import UiInput from "~/components/ui/UiInput.vue";

export default defineComponent({
  name: "Ui",
  components: {
    UiButtonSecondary,
    UiButtonSuccess,
    UiButtonPrimary,
    UiButtonDisabled,
    UiTextH1,
    UiTextH2,
    UiTextH3,
    UiTextSmall,
    UiInput,
  },
});
</script>

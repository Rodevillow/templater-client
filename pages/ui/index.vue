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
        <UiInput type="text" label="Label" placeholder="Placeholder..." />
        <UiInput type="text" placeholder="Placeholder..." />
      </div>
      <div class="d-flex flex-column gap-3 col-12">
        <h3>Block components</h3>
        <TheHeader />
        <TheFooter />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
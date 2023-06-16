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
      <div>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="..." class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
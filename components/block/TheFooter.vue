<template>
  <footer>
    <div class="footer">
      <UiTextH1>TEMPLATER</UiTextH1>
      <UiTextSmall>Ukraine 2023</UiTextSmall>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";

footer {
  padding: 10px 0;

  .footer {

    border-radius: 10px;
    border: 1px solid #8B9BA4;
    //background-color: $secondary-color;

    width: 100%;
    height: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>

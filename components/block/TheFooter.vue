<template>
  <footer class="footer">
    <UiTextH1>TEMPLATER</UiTextH1>
    <UiTextSmall>Ukraine 2023</UiTextSmall>
  </footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";

.footer {
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: $secondary-color;
}
</style>

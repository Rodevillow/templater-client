<template>
  <h1 class="h1">
    <slot />
  </h1>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.h1 {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-size: 21px;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 0em;

  margin: 0;
}
</style>

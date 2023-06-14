<template>
  <p class="paragraph">
    <slot />
  </p>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.paragraph {
  font-size: 12px;
  font-weight: 300;
  line-height: 15px;
  letter-spacing: 0em;
}
</style>

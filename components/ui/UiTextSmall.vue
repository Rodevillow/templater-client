<template>
  <p class="paragraph">
    <slot />
  </p>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.paragraph {
  color: #6b978b;

  font-size: 12px;
  font-weight: 300;
  line-height: 15px;
  letter-spacing: 0em;
}
</style>

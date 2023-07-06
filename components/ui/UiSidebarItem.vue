<template>
  <button class="sidebar-item-default">
    <span class="icon-left"> <slot name="icon-left" /> </span>
    <slot />
  </button>
</template>
<script lang="ts" setup></script>

<style lang="scss">
.sidebar-item-default {
  display: flex;
  align-items: center;

  border: none;
  border-radius: 5px;

  width: 304px;
  height: 41px;

  color: black;
}

.icon-left {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid red;
}
</style>

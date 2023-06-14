<template>
  <header class="header d-flex justify-content-between align-items-center p-5">
    <nuxt-link to="/">
      <UiTextH1>
        TEMPLATER
      </UiTextH1>
    </nuxt-link>

    <div class="header__menu">
      <div class="header__menu-right d-flex">
        <div class="header__menu-right_item">
          <NuxtLink to="/auth/login">Log In</NuxtLink>
        </div>
        <div class="menu__right-item">
          <NuxtLink to="/auth/registration">Sing Up</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables";

.header {
  height: 100px;
  background-color: $secondary-color;

  &__menu {
    &-right {
      &_item {
        margin-right: 20px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>

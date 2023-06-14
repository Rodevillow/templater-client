<template>
  <div class="login-form">
    <UiTextH2 class="mb-1 text-center">LOGIN</UiTextH2>
    <UiFormControl class="mb-1" label="Email">
      <UiInput type="text"
               placeholder="example@test.com"
      />
    </UiFormControl>
    <UiFormControl class="mb-3" label="Password">
      <UiInput type="password"
               placeholder="********"
      />
    </UiFormControl>
    <UiButtonPrimary class="w-100">LOGIN</UiButtonPrimary>

    <div class="mt-2 text-center">
      <nuxt-link to="/auth/forgot">Forgot password?</nuxt-link>
    </div>

  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.login-form {
  //...
}
</style>

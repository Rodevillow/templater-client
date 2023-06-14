<template>
  <div>
    <UiTextH2 class="mb-1 text-center">REGISTRATION</UiTextH2>
    <UiFormControl class="mb-1"
                   label="Email"
    >
      <UiInput type="text"
               placeholder="example@test.com"
      />
    </UiFormControl>
    <UiFormControl class="mb-1"
                   label="Password"
    >
      <UiInput type="password"
               placeholder="********"
      />
    </UiFormControl>
    <UiFormControl class="mb-3"
                   label="Confirm password"
    >
      <UiInput type="password"
               placeholder="********"
      />
    </UiFormControl>
    <UiButtonPrimary class="w-100">REGISTRATION</UiButtonPrimary>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scroped></style>

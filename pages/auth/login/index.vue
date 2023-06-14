<template>
  <div class="row page--min-height">
    <div class="col-4 mx-auto my-auto">
      <LoginForm :formData="formData" :errorsFormData="errorsFormData" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoginForm from "@/pages/auth/login/components/LoginForm.vue";
import { formData, errorsFormData } from "./composables";
</script>

<style lang="scss" scoped></style>

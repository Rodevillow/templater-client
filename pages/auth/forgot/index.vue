<template>
  <div class="row page--min-height">
    <div class="col-4 mx-auto my-auto">
      <ForgotForm :formData="formData" :errorsFormData="errorsFormData" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ForgotForm from "@/pages/auth/forgot/components/ForgotForm.vue";
import { formData, errorsFormData } from "./composables";
</script>

<style lang="scss" scoped></style>

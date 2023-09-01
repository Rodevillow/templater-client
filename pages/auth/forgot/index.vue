<template>
  <div class="page--min-height forgot">
    <div class="forgot-form-wrapper">
      <ForgotForm :formData="formData" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ForgotForm from "@/pages/auth/forgot/components/ForgotForm.vue";
import { formData } from "./composables";

definePageMeta({
  middleware: ["not-auth"]
});
</script>

<style lang="scss" scoped>
.forgot {
  display: flex;
  justify-content: center;
  align-items: center;

  &-form-wrapper {
    max-width: 600px;
    width: 100%;
  }
}
</style>

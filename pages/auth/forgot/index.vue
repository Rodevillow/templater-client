<template>
  <div class="page--min-height">
    <div>
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

<style lang="scss" scoped></style>

<template>
  <div class="page--min-height">
    <div>
      <RegistrationForm :formData="formData" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import RegistrationForm from "@/pages/auth/registration/components/RegistrationForm.vue";
import { formData } from "./composables";

definePageMeta({
  middleware: ["not-auth"]
});
</script>

<style lang="scss" scoped></style>

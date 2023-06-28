<template>
  <div class="row page--min-height">
    <div class="col-4 mx-auto my-auto">
      <RegistrationForm :formData="formData" :errorsFormData="errorsFormData" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import RegistrationForm from "@/pages/auth/registration/components/RegistrationForm.vue";
import { formData, errorsFormData } from "./composables";
</script>

<style lang="scss" scoped></style>

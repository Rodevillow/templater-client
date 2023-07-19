<template>
  <div class="row page--min-height">
    <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 mx-auto my-auto">
      <ForgotForm :formData="formData" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ForgotForm from "@/pages/auth/forgot/components/ForgotForm.vue";
import { formData } from "./composables";
</script>

<style lang="scss" scoped></style>

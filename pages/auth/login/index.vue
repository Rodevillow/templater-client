<template>
  <div class="page--min-height">
    <div>
      <LoginForm :formData="formData" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoginForm from "@/pages/auth/login/components/LoginForm.vue";

import { formData } from "./composables";

definePageMeta({
  middleware: ["not-auth"]
});
</script>

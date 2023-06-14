<template>
  <div class="login-form">
    <UiTextH2 class="mb-1 text-center">LOGIN</UiTextH2>
    <UiFormControl class="mb-1" label="Email" :errors="props.errorsFormData.email.errors">
      <UiInput
        type="text"
        placeholder="example@test.com"
        :value="props.formData.email"
        @focus="onFocusEmail"
        @input="onInputEmail"
        @blur="onBlurEmail"
      />
    </UiFormControl>
    <UiFormControl class="mb-3" label="Password" :errors="props.errorsFormData.password.errors">
      <UiInput type="password" placeholder="********" :value="props.formData.password" />
    </UiFormControl>
    <UiButtonPrimary class="w-100">LOGIN</UiButtonPrimary>

    <div class="mt-2 text-center">
      <nuxt-link to="/auth/forgot">Forgot password?</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { errorsFormData, formData } from "../composables";
import { validateEmail } from "@/pages/auth/login/composables/validation";

const props = defineProps({
  formData: {
    type: Object,
    required: true,
  },
  errorsFormData: {
    type: Object,
    required: true,
  },
});

const onFocusEmail = (event: any) => {
  formData.email = event.target.value;
  errorsFormData.email.isDirty = true;
};
const onInputEmail = (event: any) => {
  formData.email = event.target.value;
  validateEmail(formData.email, errorsFormData.email);
};
const onBlurEmail = (event: any) => {
  formData.email = event.target.value;
};
</script>

<style lang="scss" scoped>
.login-form {
  //...
}
</style>

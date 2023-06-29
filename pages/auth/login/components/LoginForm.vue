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
      <UiInput
        type="password"
        placeholder="********"
        :value="props.formData.password"
        @focus="onFocusPassword"
        @input="onInputPassword"
        @blur="onBlurPassword"
      />
    </UiFormControl>
    <UiButtonPrimary @click="onSubmit" type="submit" class="w-100">LOGIN</UiButtonPrimary>

    <div class="mt-2 text-center">
      <nuxt-link to="/auth/forgot">Forgot password?</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { errorsFormData, formData } from "../composables";
import { validateEmail, validatePassword } from "@/pages/auth/login/composables/validation";

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
  validateEmail(formData.email, errorsFormData.email);
};

const onFocusPassword = (event: any) => {
  formData.password = event.target.value;
  errorsFormData.password.isDirty = true;
};
const onInputPassword = (event: any) => {
  formData.password = event.target.value;
  validatePassword(formData.password, errorsFormData.password);
};
const onBlurPassword = (event: any) => {
  formData.password = event.target.value;
  validatePassword(formData.password, errorsFormData.password);
};

const doValidateForm = () => {
  errorsFormData.email.isDirty = true;
  errorsFormData.password.isDirty = true;

  validateEmail(formData.email, errorsFormData.email);
  validatePassword(formData.password, errorsFormData.password);
};

const isFormValid = () => {
  return Object.values(errorsFormData).some((errorObject) => errorObject.errors.length);
};

const doSendForm = () => {
  // code...
};

const onSubmit = () => {
  doValidateForm();
  if (isFormValid()) {
    doSendForm();
  }

  console.log(formData.email, "email");
  console.log(formData.password, "pass");
};
</script>

<style lang="scss" scoped>
.login-form {
  //...
}
</style>

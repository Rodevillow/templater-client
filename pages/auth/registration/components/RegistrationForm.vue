<template>
  <div>
    <UiTextH2 class="mb-1 text-center">REGISTRATION</UiTextH2>
    <UiFormControl
      class="mb-1"
      label="Email"
      :errors="props.errorsFormData.email.errors"
    >
      <UiInput
        type="text"
        placeholder="example@test.com"
        :value="props.formData.email"
        @focus="onFocusEmail"
        @input="onInputEmail"
        @blur="onBlurEmail"
      />
    </UiFormControl>
    <UiFormControl
      class="mb-1"
      label="Password"
      :errors="props.errorsFormData.password.errors"
    >
      <UiInput
        type="password"
        placeholder="********"
        :value="props.formData.password"
        @focus="onFocusPassword"
        @input="onInputPassword"
        @blur="onBlurPassword"
      />
    </UiFormControl>
    <UiFormControl
      class="mb-3"
      label="Confirm password"
      :errors="props.errorsFormData.confirmPassword.errors"
    >
      <UiInput
        type="password"
        placeholder="********"
        :value="props.formData.confirmPassword"
        @focus="onFocusConfirmPassword"
        @input="onInputConfirmPassword"
        @blur="onBlurConfirmPassword"
      />
    </UiFormControl>
    <UiButtonPrimary class="w-100">REGISTRATION</UiButtonPrimary>
  </div>
</template>

<script lang="ts" setup>
import { errorsFormData, formData } from "../composables";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "@/pages/auth/registration/composables/validation";

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

const onFocusPassword = (event: any) => {
  formData.password = event.target.value.replace(/\D/, "");
  console.log("golova");
  errorsFormData.password.isDirty = true;
};

const onInputPassword = (event: any) => {
  formData.password = event.target.value;
  console.log(event.target.value);
  validatePassword(formData.password, errorsFormData.password);
};

const onBlurPassword = (event: any) => {
  formData.password = event.target.value;
};

const onFocusConfirmPassword = (event: any) => {
  formData.confirmPassword = event.target.value.replace(/\D/, "");
  console.log("golova");
  errorsFormData.password.isDirty = true;
};

const onInputConfirmPassword = (event: any) => {
  formData.confirmPassword = event.target.value;
  console.log(event.target.value);
  validateConfirmPassword(
    formData.confirmPassword,
    errorsFormData.confirmPassword,
    formData.password
  );
};

const onBlurConfirmPassword = (event: any) => {
  formData.confirmPassword = event.target.value;
};
</script>

<style lang="scss" scroped></style>

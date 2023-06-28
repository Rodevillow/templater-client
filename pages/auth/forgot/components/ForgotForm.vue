<template>
  <div>
    <UiTextH2 class="mb-1 text-center">FORGOT PASSWORD</UiTextH2>
    <UiFormControl
      class="mb-3"
      label="Email"
      :errors="props.errorsFormData.email.errors"
    >
      <UiInput
        type="text"
        label="Email"
        placeholder="example@test.com"
        :value="props.formData.email"
        @focus="onFocusEmail"
        @input="onInputEmail"
        @blur="onBlurEmail"
      />
    </UiFormControl>
    <UiButtonPrimary class="w-100">SEND RESET LINK</UiButtonPrimary>
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

<style lang="scss" scroped></style>

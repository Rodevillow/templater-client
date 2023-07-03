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

    <UiButtonPrimary 
      class="w-100" 
      @click="validateRegistrationForm(doSendForm)"
    >
      REGISTRATION
    </UiButtonPrimary>
  </div>
</template>

<script lang="ts" setup>
import { 
  onFocusEmail, 
  onInputEmail, 
  onBlurEmail, 
  onFocusPassword,
  onInputPassword,
  onBlurPassword,
  onFocusConfirmPassword,
  onInputConfirmPassword,
  onBlurConfirmPassword,
  validateRegistrationForm 
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

const doSendForm = (): void => {
  console.log('--- --- --- --- --- --- --- >');
  console.log('RegistrationForm is valid!');
  console.log('--- --- --- --- --- --- --- >');
};
</script>

<style lang="scss" scroped></style>

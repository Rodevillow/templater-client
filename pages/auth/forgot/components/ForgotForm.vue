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

    <UiButtonPrimary 
      class="w-100" 
      @click="validateForgotPasswordForm(doSendForm)"
    >
      SEND RESET LINK
    </UiButtonPrimary>
  </div>
</template>

<script lang="ts" setup>
import { 
  onFocusEmail, 
  onInputEmail, 
  onBlurEmail, 
  validateForgotPasswordForm 
} from "@/pages/auth/forgot/composables/validation";

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

const doSendForm = () => {
  console.log('--- --- --- --- --- --- --- >');
  console.log('ForgotForm is valid!');
  console.log('--- --- --- --- --- --- --- >');
};
</script>

<style lang="scss" scroped></style>

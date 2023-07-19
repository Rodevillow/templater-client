<template>
  <div>
    <UiTextH2 class="mb-1 text-center">FORGOT PASSWORD</UiTextH2>
    
    <UiFormControl
      class="mb-3"
      label="Email"
      :errors="validatorForgotForm?.errorsFormData?.email?.errors"
    >
      <UiInput
        type="text"
        label="Email"
        placeholder="example@test.com"
        @input="validatorForgotForm?.doValidateField('email', $event.target.value)"
        @blur="validatorForgotForm?.doValidateField('email', $event.target.value)"
        :value="props.formData.email"
        :isDirty="validatorForgotForm?.errorsFormData?.email?.isDirty"
        :isInvalid="validatorForgotForm?.errorsFormData?.email?.errors?.length > 0"
      />
    </UiFormControl>

    <UiButtonPrimary 
      class="w-100"
      @click="validateForgotForm(doSendForm)"
      :isLoading="isLoading"
    >SEND RESET LINK</UiButtonPrimary>
  </div>
</template>

<script lang="ts" setup>
import { validateForgotForm, validatorForgotForm } from '../composables/validation';

const props = defineProps({
  formData: {
    type: Object,
    required: true,
  }
});

const isLoading = ref(false);

const doSendForm = () => {
  try {
    isLoading.value = true;
  } catch (e:any) {
    console.log('ForgotForm -> doSendForm -> catch');
  } finally {
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  }
};
</script>

<style lang="scss" scroped></style>

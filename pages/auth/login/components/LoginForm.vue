<template>
  <div class="login-form">
    <UiTextH2 class="mb-1 text-center">LOGIN</UiTextH2>
    
    <UiFormControl
      class="mb-1"
      label="Email"
      :errors="validatorLoginForm?.errorsFormData?.email?.errors"
    >
      <UiInput
        type="text"
        placeholder="example@test.com"
        @input="validatorLoginForm?.doValidateField('email', $event.target.value)"
        @blur="validatorLoginForm?.doValidateField('email', $event.target.value)"
        :value="props.formData.email"
        :isDirty="validatorLoginForm?.errorsFormData?.email?.isDirty"
        :isInvalid="validatorLoginForm?.errorsFormData?.email?.errors?.length > 0"
      />
    </UiFormControl>

    <UiFormControl
      class="mb-3"
      label="Password"
      :errors="validatorLoginForm?.errorsFormData?.password?.errors"
    >
      <UiInput
        type="password"
        placeholder="********"
        @input="validatorLoginForm?.doValidateField('password', $event.target.value)"
        @blur="validatorLoginForm?.doValidateField('password', $event.target.value)"
        :value="props.formData.password"
        :isDirty="validatorLoginForm?.errorsFormData?.password?.isDirty"
        :isInvalid="validatorLoginForm?.errorsFormData?.password?.errors?.length > 0"
      />
    </UiFormControl>
    
    <UiButtonPrimary 
      type="submit"
      class="w-100" 
      @click="validateLoginForm(doSendForm)"
      :isLoading="isLoading"
    >LOGIN</UiButtonPrimary>

    <div class="mt-2 text-center">
      <nuxt-link to="/auth/forgot">Forgot password?</nuxt-link>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { validateLoginForm, validatorLoginForm } from "@/pages/auth/login/composables/validation";

const props = defineProps({formData: { type: Object, required: true }});
const isLoading = ref(false);

const doSendForm = () => {
  try {
    isLoading.value = true;
  } catch (e:any) {
    console.log('LoginForm -> doSendForm -> catch', e.response);
  } finally {
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  }
};
</script>

<template>
  <div>
    <UiTextH2 class="mb-1 text-center">REGISTRATION</UiTextH2>
    
    <UiFormControl
      class="mb-1"
      label="Email"
      :errors="validatorRegistrationForm?.errorsFormData?.email?.errors"
    >
      <UiInput
        type="text"
        placeholder="example@test.com"
        :value="props.formData.email"
        @input="validatorRegistrationForm?.doValidateField('email', $event.target.value)"
        @blur="validatorRegistrationForm?.doValidateField('email', $event.target.value)"
        :isDirty="validatorRegistrationForm?.errorsFormData?.email?.isDirty"
        :isInvalid="validatorRegistrationForm?.errorsFormData?.email?.errors?.length > 0"
      />
    </UiFormControl>

    <UiFormControl
      class="mb-1"
      label="Password"
      :errors="validatorRegistrationForm?.errorsFormData?.password.errors"
    >
      <UiInput
        type="password"
        placeholder="********"
        @input="validatorRegistrationForm?.doValidateField('password', $event.target.value)"
        @blur="validatorRegistrationForm?.doValidateField('password', $event.target.value)"
        :value="props.formData.password"
        :isDirty="validatorRegistrationForm?.errorsFormData?.password?.isDirty"
        :isInvalid="validatorRegistrationForm?.errorsFormData?.password?.errors?.length > 0"
      />
    </UiFormControl>

    <UiFormControl
      class="mb-3"
      label="Confirm password"
      :errors="validatorRegistrationForm?.errorsFormData?.confirmPassword.errors"
    >
      <UiInput
        type="password"
        placeholder="********"
        @input="validatorRegistrationForm?.doValidateField('confirmPassword', $event.target.value)"
        @blur="validatorRegistrationForm?.doValidateField('confirmPassword', $event.target.value)"
        :value="props.formData.confirmPassword"
        :isDirty="validatorRegistrationForm?.errorsFormData?.confirmPassword?.isDirty"
        :isInvalid="validatorRegistrationForm?.errorsFormData?.confirmPassword?.errors?.length > 0"
      />
    </UiFormControl>

    <UiButtonPrimary 
      class="w-100" 
      @click="validateRegistrationForm(doSendForm)"
      :isLoading="isLoading"
    >
      REGISTRATION
    </UiButtonPrimary>
  </div>
</template>

<script lang="ts" setup>
import { validateRegistrationForm, validatorRegistrationForm } from "../composables/validation";
// import { serverSideErrorsHandler } from "@/utils/validation/server-side-errors-handler.helper";

const props = defineProps({ formData: { type: Object, required: true }});

const isLoading = ref(false);
const appCore = useAppCore();

const doSendForm = async (): Promise<void> => {
  isLoading.value = true;
  
  try {
    await appCore.auth.doRegistration(props.formData);
    useRouter().push({path: '/auth/login'});
  } catch (e:any) {
    const serverValidationErrors = e?.response?.data?.description;
    console.log('CATCH: ', serverValidationErrors);
    // if (serverValidationErrors) serverSideErrorsHandler(serverValidationErrors);
  } finally {
      isLoading.value = false;
  }
}
</script>

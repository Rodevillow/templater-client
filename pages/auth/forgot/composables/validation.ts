import {
  isRequired,
  isEmail,
  maxValue,
} from "~/composables/services/validation/rules";

export const validateEmail = (value: any, errorObject: any) => {
  errorObject.errors = [];
  const clearValue = value.trim();

  if (isRequired(clearValue)) {
    errorObject.errors.push("Email field is required!");
    return;
  }

  if (maxValue(clearValue, 20)) {
    errorObject.errors.push("Email should not be longer than 50 characters!");
    return;
  }

  if (!isEmail(clearValue)) {
    errorObject.errors.push("Incorrect Email!");
    return;
  }
};

// --- --- ---

import { errorsFormData, formData } from "../composables";

export const onFocusEmail = (event: any) => { formData.email = event.target.value; errorsFormData.email.isDirty = true; };
export const onInputEmail = (event: any) => validateEmail(formData.email = event.target.value, errorsFormData.email);
export const onBlurEmail = (event: any) => validateEmail(formData.email = event.target.value, errorsFormData.email);

export const doValidateForm = () => {
  errorsFormData.email.isDirty = true;

  validateEmail(formData.email, errorsFormData.email);
};

export const isFormValid = () => !Object.values(errorsFormData).some(
  (errorObject) => errorObject.isDirty && errorObject.errors.length > 0
);

export const validateForgotPasswordForm = (doSendFormCallback: any) => { doValidateForm(); isFormValid() && doSendFormCallback(); }

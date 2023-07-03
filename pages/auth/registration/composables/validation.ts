import {
  isRequired,
  isEmail,
  maxValue,
  minValue,
  confirmPassword,
} from "~/composables/services/validation/rules";

export const validateEmail = (value: String, errorObject: any) => {
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

export const validatePassword = (value: String, errorObject: any) => {
  errorObject.errors = [];
  const clearValue = value.trim();

  if (isRequired(clearValue)) {
    errorObject.errors.push("Password field is required!");
    return;
  }

  if (maxValue(clearValue, 50)) {
    errorObject.errors.push(
      "Password should not be longer than 50 characters!"
    );
    return;
  }

  if (minValue(clearValue, 6)) {
    errorObject.errors.push(
      "Password should not be longer less than 6 characters!"
    );
    return;
  }
};

export const validateConfirmPassword = (
  value: String,
  errorObject: any,
  password: String
) => {
  errorObject.errors = [];
  const clearValue = value.trim();

  if (
    isRequired(clearValue) || 
    confirmPassword(clearValue, password)
  ) {
    errorObject.errors.push("Confirm password must match the \"Password\" field!");
    return;
  }
};

// --- --- ---

import { errorsFormData, formData } from "../composables";

export const onFocusEmail = (event: any) => { formData.email = event.target.value; errorsFormData.email.isDirty = true; };
export const onInputEmail = (event: any) => validateEmail(formData.email = event.target.value, errorsFormData.email);
export const onBlurEmail = (event: any) => validateEmail(formData.email = event.target.value, errorsFormData.email);

export const onFocusPassword = (event: any) => { formData.password = event.target.value; errorsFormData.password.isDirty = true; };
export const onInputPassword = (event: any) => validatePassword(formData.password = event.target.value, errorsFormData.password);
export const onBlurPassword = (event: any) => validatePassword(formData.password = event.target.value, errorsFormData.password);

export const onFocusConfirmPassword = (event: any) => { formData.confirmPassword = event.target.value; errorsFormData.confirmPassword.isDirty = true; };
export const onInputConfirmPassword = (event: any) => validateConfirmPassword(formData.confirmPassword = event.target.value, errorsFormData.confirmPassword, formData.password);
export const onBlurConfirmPassword = (event: any) => validateConfirmPassword(formData.confirmPassword = event.target.value, errorsFormData.confirmPassword, formData.password);

export const doValidateForm = () => {
  errorsFormData.email.isDirty = true;
  errorsFormData.password.isDirty = true;
  errorsFormData.confirmPassword.isDirty = true;

  validateEmail(formData.email, errorsFormData.email);
  validatePassword(formData.password, errorsFormData.password);
  validateConfirmPassword(formData.confirmPassword, errorsFormData.confirmPassword, formData.password);
};

export const isFormValid = () => !Object.values(errorsFormData).some(
  (errorObject) => errorObject.isDirty && errorObject.errors.length > 0
);

export const validateRegistrationForm = (doSendFormCallback: any) => { doValidateForm(); isFormValid() && doSendFormCallback(); }

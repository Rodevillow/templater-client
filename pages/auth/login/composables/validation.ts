import { isRequired, isEmail, maxValue, minValue } from "~/composables/services/validation/rules";

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

export const validatePassword = (value: any, errorObject: any) => {
  errorObject.errors = [];
  const clearValue = value.trim();

  if (isRequired(clearValue)) {
    errorObject.errors.push("Password field is required!");
    return;
  }

  if (maxValue(clearValue, 50)) {
    errorObject.errors.push("Password should not be longer than 50 characters!");
    return;
  }

  if (minValue(clearValue, 6)) {
    errorObject.errors.push("Password should not be longer less than 6 characters!");
    return;
  }
};

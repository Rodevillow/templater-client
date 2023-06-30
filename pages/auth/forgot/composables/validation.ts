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

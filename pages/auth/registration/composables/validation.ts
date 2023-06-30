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
  const clearPassword = value.trim();

  if (isRequired(clearPassword)) {
    errorObject.errors.push("Password field is required!");
    return;
  }

  if (maxValue(clearPassword, 50)) {
    errorObject.errors.push(
      "Password should not be longer than 50 characters!"
    );
    return;
  }

  if (minValue(clearPassword, 6)) {
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
  const clearConfirmPassword = value.trim();

  if (isRequired(clearConfirmPassword)) {
    errorObject.errors.push("Email field is required!");
    return;
  }

  if (confirmPassword(clearConfirmPassword, password)) {
    errorObject.errors.push("Password must match the password field!");
    return;
  }
};

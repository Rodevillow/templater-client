export const validateEmail = (value: String, errorObject: any) => {
  errorObject.errors = [];
  const clearValue = value.trim();

  if (clearValue.length === 0) {
    errorObject.errors.push("Email field is required!");
  }
};

export const validatePassword = (value: String, errorObject: any) => {
  errorObject.errors = [];
  const clearPassword = value.trim();

  if (clearPassword.length === 0) {
    errorObject.errors.push("Password field is required!");
  } else if (clearPassword.length < 6) {
    errorObject.errors.push("Password must be longer than six characters");
  }
};

export const validateConfirmPassword = (
  value: String,
  errorObject: any,
  password: String
) => {
  errorObject.errors = [];
  const clearConfirmPassword = value.trim();

  if (clearConfirmPassword.length === 0) {
    errorObject.errors.push("This field is required!");
  } else if (clearConfirmPassword != password) {
    errorObject.errors.push("Password must match the password field!");
  }
};

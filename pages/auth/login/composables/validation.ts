export const validateEmail = (value: any, errorObject: any) => {
  errorObject.errors = [];
  const clearValue = value.trim();

  if (clearValue.length === 0) {
    errorObject.errors.push("Email field is required!");
  }
};

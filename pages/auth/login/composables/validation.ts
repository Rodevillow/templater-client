export const validateEmail = (value: any, errorObject: any) => {
  errorObject.errors = [];
  const clearValue = value.trim();

  if (!clearValue) {
    errorObject.errors.push("Email field is required!");
    return;
  }

  if (clearValue.length > 30) {
    errorObject.errors.push("Email should not be longer than 50 characters!");
    return;
  }

  if (
    !String(clearValue)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    errorObject.errors.push("Incorrect Email!");
    return;
  }
};

export const validatePassword = (value: any, errorObject: any) => {
  errorObject.errors = [];
  const clearValue = value.trim();

  if (!clearValue) {
    errorObject.errors.push("Password field is required!");
    return;
  }

  if (clearValue.length > 30) {
    errorObject.errors.push("Password should not be longer than 30 characters!");
    return;
  }

  if (
    clearValue.length < 8 ||
    !String(clearValue)
      .toLowerCase()
      .match(/^[a-zA-Z0-9]+$/ && /(?:[^`!@#$%"^&*<>|\\\-_=+'\/.,]*[`!@#$%"^&*<>|\\\-_=+'\/.,]){1}/)
  ) {
    errorObject.errors.push("Min 8 characters! A-Z, 0-9 and at least 1 special symbol!");
    return;
  }
};

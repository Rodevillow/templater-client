export const formData = reactive({
  email: "",
  password: "",
  confirmPassword: "",
});

const defaultErrorObject = {
  isDirty: false,
  errors: [],
};

export const errorsFormData = reactive({
  email: { ...defaultErrorObject },
  password: { ...defaultErrorObject },
  confirmPassword: { ...defaultErrorObject },
});

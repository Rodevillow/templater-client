export const formData = reactive({
  email: "",
  password: "",
});

const defaultErrorObject = {
  isDirty: false,
  errors: [],
};

export const errorsFormData = reactive({
  email: { ...defaultErrorObject },
  password: { ...defaultErrorObject },
});

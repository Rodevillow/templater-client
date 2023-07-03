export const formData = reactive({
  email: "",
});

const defaultErrorObject = {
  isDirty: false,
  errors: [],
};

export const errorsFormData = reactive({
  email: { ...defaultErrorObject },
});

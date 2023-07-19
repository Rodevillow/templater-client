import useValidation from "@/composables/useValidation";

import { formData } from "../composables";

export const validatorRegistrationForm:any = useValidation(formData, {
  email: ["required", "isEmail"],
  password: ["required"],
  confirmPassword: ["required"]
});

export const validateRegistrationForm:any = (doSendFormCallback: any): void => validatorRegistrationForm.doValidate() && doSendFormCallback();

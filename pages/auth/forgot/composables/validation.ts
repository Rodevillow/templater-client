import useValidation from "@/composables/useValidation";

import { formData } from "../composables";

export const validatorForgotForm:any = useValidation(formData, {
  email: [
    "required", 
    "isEmail"
  ]
});

export const validateForgotForm:any = (doSendFormCallback: any): void => validatorForgotForm.doValidate() ? doSendFormCallback() : null;
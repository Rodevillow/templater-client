import useValidation from "@/composables/useValidation";

import { formData } from "../composables";

export const validatorLoginForm:any = useValidation(formData, {
  email: [
    "required", 
    "isEmail"
  ],
  password: [
    "required"
  ]
});

export const validateLoginForm:any = (doSendFormCallback: any): void => validatorLoginForm.doValidate() && doSendFormCallback();
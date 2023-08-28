import useValidation from "@/composables/useValidation";

import {formData} from "../composables";

export const validatorLoginForm: any = useValidation(formData, {
    email: [
        "required",
        "isEmail"
    ],
    password: [
        "required",
        "min:6",
        "max:32"
    ],
});

export const validateLoginForm: any = (doSendFormCallback: any): void => validatorLoginForm.doValidate() && doSendFormCallback()
export const resetValidationLoginForm: any = (): void => validatorLoginForm.clearFieldsErrors() && resetFormData()

export const resetFormData: any = (): void => {
    formData.email = ''
    formData.password  = ''
}
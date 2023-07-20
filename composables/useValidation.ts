import { IFormDataDto } from "~/pages/auth/login/composables";

import IsRequired from "./services/validation/rules/isRequired";
import IsEmail from "./services/validation/rules/isEmail";
import MinLength from "./services/validation/rules/minLength";
import MaxLength from "./services/validation/rules/maxLength";

const rulesBindingsList = {
    'required': IsRequired,
    'isEmail': IsEmail,
    'min': MinLength,
    'max': MaxLength,
}

const defaultErrorObject = { isDirty: false, errors: [] };

const generateErrorsFormData = (formData:any) => {

    let newErrorsFormData = reactive({...formData});

    for (let [key, value] of Object.entries(formData)) {
        if (typeof value !== "object") {
            newErrorsFormData[key] = {...defaultErrorObject};
        }
    }

    return newErrorsFormData;
}

export const useValidation = (formData: IFormDataDto, validationFormRules: any):any => {

    const errorsFormData = generateErrorsFormData({...formData});

    const validateField = (fieldName: String|any, fieldRules: String|Array<any>|any) => {

        const formDataField:Object = Object.fromEntries(Object.entries(formData).filter(([key]) => key === fieldName));
        const fieldValue = formDataField[fieldName as keyof typeof formDataField];
        const errorObject = errorsFormData[fieldName as keyof typeof errorsFormData];
        errorObject.errors = [];

        for (let ruleStr of fieldRules) {
            const splittedRuleStr = ruleStr.trim().split(':');
            const paramsForRule = splittedRuleStr.length > 1 ? { value: splittedRuleStr[1] } : {};

            const validationRuleClass = rulesBindingsList[splittedRuleStr[0] as keyof typeof rulesBindingsList];
            if (!validationRuleClass) { 
                console.error('CALLBACK RULE ERROR: rule -> ' + ruleStr); 
                continue; 
            }

            const validationRuleObject = new validationRuleClass();
            if (!validationRuleObject.passes(fieldValue, paramsForRule)) {
                clearFieldErrors(fieldName);
                errorObject.errors.push(validationRuleObject.message(fieldName, paramsForRule));
                break;
            }
        }
    }

    const doValidateField = (fieldName: String, value: any = null) => {
        if (value !== null) formData[fieldName as keyof typeof formData] = value;
        setIsDirty(fieldName);
        validateField(fieldName, validationFormRules[fieldName as keyof typeof validationFormRules]);
    }

    
    const setAllFieldsAsIsDirtyAndClearErrors = () => {
        for (let errorEntry of Object.entries(errorsFormData)) {
            let errorObject:any = Object.fromEntries([errorEntry])[errorEntry[0]]
            errorObject.isDirty = true;
            errorObject.errors = [];
        }
    }
    
    const clearFieldErrors = (fieldName: String) => { errorsFormData[fieldName as keyof typeof errorsFormData].errors = []; }

    const setIsDirty = (fieldName: String, isDirtyValue: Boolean = true):void => { errorsFormData[fieldName as keyof typeof errorsFormData].isDirty = isDirtyValue; }

    const isFormValid = () => !Object.values(errorsFormData).some((e:any) => e.errors.length > 0);

    const doValidate = () => {

        setAllFieldsAsIsDirtyAndClearErrors();

        Object.entries(validationFormRules)
            .forEach(([fieldName, fieldRules]) => validateField(fieldName, fieldRules));
            
        return isFormValid();
    }

    return {
        errorsFormData,
        validateField,
        doValidateField,
        setIsDirty,
        doValidate,
    }
}

export default useValidation;

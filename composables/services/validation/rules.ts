import { isEmailRegEx } from "~/constans/validation";

export const isRequired = (value: any): Boolean => {
  return !value;
};

export const isEmail = (value: any): Boolean => {
  return isEmailRegEx.test(value);
};

export const maxValue = (value: any, maxValue: any): Boolean => {
  return value.length > maxValue;
};

export const minValue = (value: any, minValue: any): Boolean => {
  return value.length < minValue;
};

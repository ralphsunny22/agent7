import useFormValidation from "./useFormValidation";

// const { validatePasswordField } = useFormValidation();
// const { fieldName, fieldValue } = validatePasswordField();

export default function useValidators() {
    const isEmpty = (fieldName, fieldValue) => {
     return !fieldValue ? "The " + fieldName + " field is required" : "";
    }
    const minLength = (fieldName, fieldValue, min) => {
         return fieldValue.length < min ? `The ${fieldName} field must be atleast ${min} characters long` : "";
   }
   const isEmail = (fieldName, fieldValue) => {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !re.test(fieldValue) ? "The input is not a valid " + fieldName + " address" : "";
    }

    const isSameAsPassword = (fieldName, fieldValue, min) => {
        console.log('lorem')
        return fieldValue.length < min ? `The ${fieldName} field must be atleast ${min} characters long` : "";
  }
    return { isEmpty, minLength, isEmail }
}
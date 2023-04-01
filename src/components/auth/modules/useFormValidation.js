import { reactive, defineEmits } from "vue";
import useValidators from "./Validators";

const errors = reactive({});

const { isEmpty, minLength, isEmail } = useValidators();

export default function useFormValidation() {
    // const validateNameField = (fieldName, fieldValue) => {
    //     //attach key to error if fieldvalue is empty
    //     errors[fieldName] = fieldValue === "" ? "The " + fieldName + " field is required" : "";
    // }
    const validateNameField = (fieldName, fieldValue) => {
        errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : minLength(fieldName, fieldValue, 4)
     }
     const validateEmailField = (fieldName, fieldValue) => {
        errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : isEmail(fieldName, fieldValue)
    }
    const validatePasswordField = (fieldName, fieldValue) => {
        errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : minLength(fieldName, fieldValue, 6);
     }
     const validateConfirmPasswordField = (fieldName, fieldValue) => {
        errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : minLength(fieldName, fieldValue, 6)
     }
    return { errors, validateNameField, validateEmailField, validatePasswordField, validateConfirmPasswordField }
}
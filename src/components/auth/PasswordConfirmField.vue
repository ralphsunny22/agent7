<script setup>
import { computed, ref } from "vue";
import useFormValidation from "./modules/useFormValidation";

// let input = ref(null);
// const error = computed(() => {
//     return input.value === "" ? "The Input field is required" : "";
// });
    //return { input, error };

// let input = ref("");
// let error = ref("");
// const validateInput = () => {
//     error.value = input.value === "" ? "The Input field is required" : "";
// };

let input = ref("");
const { validateConfirmPasswordField, errors } = useFormValidation();
const validateInput = () => {
    validateConfirmPasswordField("confirm_password", input.value);
    
};
    
</script>

<template>
    <div class="form-group mb-3">
        <label for="confirm_password">Confirm Password</label>
        <input type="text" id="confirm_password" class="reg-input form-control" placeholder="Enter Password" autocomplete="false" v-model="input" @keyup="validateInput" @blur="validateInput"
        @input="$emit('update:modelValue', $event.target.value)">

        <div class="text-danger" v-if="errors.confirm_password">
            {{ errors.confirm_password }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
%text {
    font-family: var(--brand-font-family);
    font-weight: 600 !important;
    font-size: 14px !important;
    color: rgba(0,0,0,0.7);
}
label{
    @extend %text;
}
</style>
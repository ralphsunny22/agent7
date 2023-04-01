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
let error = ref("");
const { validateNameField, errors } = useFormValidation();
const validateInput = () => {
    validateNameField("name", input.value);
};
    
</script>

<template>
    <div class="form-group mb-3">
        <label for="name">Full name</label>
        <input type="text" id="name" class="reg-input form-control" placeholder="e.g John Doe" v-model="input" @keyup="validateInput" @blur="validateInput"
        @input="$emit('update:modelValue', $event.target.value)">

        <div class="text-danger" v-if="errors.name">
            {{ errors.name }}
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
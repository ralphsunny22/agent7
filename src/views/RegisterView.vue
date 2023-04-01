<script setup>
import { computed, reactive, ref } from "vue";
import NameField from '../components/auth/NameField.vue';
import EmailField from '../components/auth/EmailField.vue';
import PasswordField from '../components/auth/PasswordField.vue';
import PasswordConfirmField from '../components/auth/PasswordConfirmField.vue';

import InviteModal from "../components/modal/InviteModal.vue";

import useFormValidation from "../components/auth/modules/useFormValidation";
import useSubmitButtonState from "../components/auth/modules/useSubmitButtonState";

    const { errors } = useFormValidation();
    
    const step = ref(1);
    const showCaretIcon = ref(true);
    const showWorkspace = ref(true);
    const showInviteModal = ref(false);

    let user = reactive({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const { isSignupButtonDisabled } = useSubmitButtonState(user, errors);

    const signUpNext = () => {
      step.value++
      console.log(showCaret.value);
    };

    const showCaret = () => {
        showCaretIcon.value = !showCaretIcon.value;
    }

    const workspaceTrue = () => {
        showWorkspace.value = true;
    }
    const workspaceFalse = () => {
        showWorkspace.value = false;
    }

</script>

<template>
    <div>
        <div class="register">
            <section class="mt-3">
                <div class="row d-flex">
                    <div class="logo ms-5">
                        <img alt="Vue logo" src="@/assets/logo.png" />
                    </div>
                </div>
            </section>
            
            <section class="form-section mt-3">
                <div class="row d-flex justify-content-center">
                    <div class="card col-lg-5 col-md-6">
                        <div class="card-body">
                            <div class="title text-left mb-1">
                                <h1 @click="signUpButtonPressed">Join us today</h1>
                                <p>Please get started by filling out these forms for us. Thanks!</p>
                            </div>

                            <div class="mb-5">
                                <ul class="steps-wrap mx-auto">
                                    <li id="personal-step" class="step active"> 
                                        <span class="icon">1</span>
                                        <span class="text">Personal Details</span>
                                    </li> <!-- step.// --> 
                                    <li id="subscription-step" class="step" :class="{'active' : step > 1}">
                                        <span class="icon">2</span>
                                        <span class="text">Subscription Plans</span>
                                    </li> <!-- step.// --> 
                                    <li id="workspace-step" class="step" :class="{'active' : step === 3}">
                                        <span class="icon">3</span>
                                        <span class="text">Create Workspace</span>
                                    </li> <!-- step.// --> 
                                    
                                </ul>
                            </div>

                            <div class="form-section" v-show="step === 1">
                                <form @submit.prevent>
                                
                                    <NameField v-model="user.name"/>

                                    <EmailField v-model="user.email"/>

                                    <PasswordField v-model="user.password"/>

                                    <PasswordConfirmField v-model="user.confirm_password"/>

                                    <div class="btn-submit form-group mt-5 text-center" :class="{'active_btn' : isSignupButtonDisabled === false}">
                                        <button type="button" :class="{'text-white' : isSignupButtonDisabled === false}"
                                            @click="signUpNext" :disabled="isSignupButtonDisabled">
                                            Continue
                                        </button>
                                    </div>
                                </form>
                            </div>
                            
                            <div class="subscription-section" v-show="step === 2">
                                <form id="subscription-nav">
                                    <ul class="subscription-list">
                                        <hr>
                                        <li class="nav-item">
                                            
                                            <a class="nav-link collapsed d-flex" data-bs-target="#starter-nav" data-bs-toggle="collapse" href="#" aria-expanded="false">
                                                
                                                <div class="form-check">
                                                    <input class="subscription_radio form-check-input" type="radio" name="exampleRadios" id="starter_plan" value="option1" checked>
                                                    <label class="form-check-label" for="starter_plan">
                                                        Starter Plan
                                                    </label>
                                                    <p>Free, but you will have limited access to the functionalities of agent7</p>
                                                    
                                                </div>
                                                <span class="ms-auto" @click="showCaret">
                                                    <i class="bi bi-chevron-down ms-auto" v-if="showCaretIcon"></i>
                                                    <i class="bi bi-chevron-up ms-auto" v-else></i>
                                                </span>
                                            </a>
                                            
                                            <ul id="starter-nav" class="nav-content collapse" data-bs-parent="#subscription-nav" style="">
                                                <li>
                                                    <div href="#" class="nav-content-sub-list">
                                                        <i style="font-size: 100%!important;" class="bi bi-check-circle-fill text-success"></i>
                                                        <span>Free</span>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div href="#" class="nav-content-sub-list">
                                                        <i style="font-size: 100%!important;" class="bi bi-check-circle-fill text-success"></i>
                                                        <span>24/7 support availability</span>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div href="#" class="nav-content-sub-list">
                                                        <i style="font-size: 100%!important;" class="bi bi-x-circle-fill text-danger"></i>
                                                        <span>Website integrations</span>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div href="#" class="nav-content-sub-list">
                                                        <i style="font-size: 100%!important;" class="bi bi-x-circle-fill text-danger"></i>
                                                        <span>Third-Party integrations</span>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div href="#" class="nav-content-sub-list">
                                                        <i style="font-size: 100%!important;" class="bi bi-x-circle-fill text-danger"></i>
                                                        <span>Consultation with experts</span>
                                                    </div>
                                                </li>
                                                
                                            </ul>
                                        </li>
                                        <hr>

                                        <li class="nav-item">
                                            
                                            <a class="nav-link collapsed d-flex" data-bs-target="#standard-nav" data-bs-toggle="collapse" href="#" aria-expanded="false">
                                                
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="standard_plan" value="option1">
                                                    <label class="form-check-label" for="standard_plan">
                                                        Standard Plan
                                                    </label>
                                                    <p>Unlimited access to all functionalities</p>
                                                    
                                                </div>

                                                <span class="ms-auto" @click="showCaret">
                                                    <i class="bi bi-chevron-down ms-auto" v-if="showCaretIcon"></i>
                                                    <i class="bi bi-chevron-up ms-auto" v-else></i>
                                                </span>
                                            </a>
                                            
                                            <ul id="standard-nav" class="nav-content collapse" data-bs-parent="#subscription-nav" style="">
                                                <li>
                                                    <div href="#" class="nav-content-sub-list">
                                                        <i style="font-size: 100%!important;" class="bi bi-check-circle-fill text-success"></i>
                                                        <span>Free</span>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div href="#" class="nav-content-sub-list">
                                                        <i style="font-size: 100%!important;" class="bi bi-check-circle-fill text-success"></i>
                                                        <span>24/7 support availability</span>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div href="#" class="nav-content-sub-list">
                                                        <i style="font-size: 100%!important;" class="bi bi-x-circle-fill text-danger"></i>
                                                        <span>Website integrations</span>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div href="#" class="nav-content-sub-list">
                                                        <i style="font-size: 100%!important;" class="bi bi-x-circle-fill text-danger"></i>
                                                        <span>Third-Party integrations</span>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div href="#" class="nav-content-sub-list">
                                                        <i style="font-size: 100%!important;" class="bi bi-x-circle-fill text-danger"></i>
                                                        <span>Consultation with experts</span>
                                                    </div>
                                                </li>
                                                
                                            </ul>
                                        </li>
                                        <hr>

                                        <li class="nav-item">
                                            
                                            <a class="nav-link collapsed d-flex" data-bs-target="#premium-nav" data-bs-toggle="collapse" href="#" aria-expanded="false">
                                                
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="premium_plan" value="option1">
                                                    <label class="form-check-label" for="premium_plan">
                                                        Premium Plan
                                                    </label>
                                                    <p>Unlimited access to all functionalities, with additional tools</p>
                                                    
                                                </div>
                                                <span class="ms-auto" @click="showCaret">
                                                    <i class="bi bi-chevron-down ms-auto" v-if="showCaretIcon"></i>
                                                    <i class="bi bi-chevron-up ms-auto" v-else></i>
                                                </span>
                                            </a>
                                            
                                            <ul id="premium-nav" class="nav-content collapse" data-bs-parent="#subscription-nav" style="">
                                                <li>
                                                    <div href="#" class="nav-content-sub-list">
                                                        <i style="font-size: 100%!important;" class="bi bi-check-circle-fill text-success"></i>
                                                        <span>Free</span>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div href="#" class="nav-content-sub-list">
                                                        <i style="font-size: 100%!important;" class="bi bi-check-circle-fill text-success"></i>
                                                        <span>24/7 support availability</span>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div href="#" class="nav-content-sub-list">
                                                        <i style="font-size: 100%!important;" class="bi bi-x-circle-fill text-danger"></i>
                                                        <span>Website integrations</span>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div href="#" class="nav-content-sub-list">
                                                        <i style="font-size: 100%!important;" class="bi bi-x-circle-fill text-danger"></i>
                                                        <span>Third-Party integrations</span>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div href="#" class="nav-content-sub-list">
                                                        <i style="font-size: 100%!important;" class="bi bi-x-circle-fill text-danger"></i>
                                                        <span>Consultation with experts</span>
                                                    </div>
                                                </li>
                                                
                                            </ul>
                                        </li>
                                        <hr>
                                    </ul>

                                    <div class="btn-submit form-group mt-5 text-center" :class="{'active_btn' : isSignupButtonDisabled === false}">
                                        <button type="button" class="text-center" :class="{'text-white' : isSignupButtonDisabled === false}"
                                        @click="signUpNext" :disabled="isSignupButtonDisabled">
                                            Continue
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div class="workspace-section" v-show="step === 3">
                                <form>
                                    <div class="workspace-accordion p-2 rounded d-flex justify-content-between align-items-center">

                                        <a class="workspace-details-btn w-50 text-center" :class="{'active_tab' : showWorkspace === true}" data-toggle="tab" href="#collapseOne" @click="workspaceTrue">
                                            <div class="p-2 rounded text-dark font_family" :class="{'bg-white' : showWorkspace === true}">Workspace Details</div>
                                        </a>

                                        <a class="manage-team-btn w-50 text-center" :class="{'active_tab' : showWorkspace === false}" data-toggle="tab" href="#collapseTwo" @click="workspaceFalse">
                                            <div class="p-2 rounded text-dark font_family" :class="{'bg-white' : showWorkspace === false}">Manage Team</div>
                                        </a>
                                    </div>

                                    <div id="collapseOne" class="workspace-content tab-pane mt-5" :class="{'d-block' : showWorkspace === true, 'd-none' : showWorkspace === false}">
                                        <div class="form-group mb-3">
                                            <label for="workspace_name">Workspace name</label>
                                            <input type="text" id="workspace_name" class="reg-input form-control text-dark" value="Agent7">

                                            <div class="text-danger" v-if="errors.name">
                                                {{ errors.name }}
                                            </div>
                                        </div>

                                        <div class="form-group mb-3">
                                            <label for="workspace_name">Timezone</label>
                                            <select name="" id="" class="reg-input form-control">
                                                <option value="cst" selected>Central Standard Time</option>
                                                <option value="wat">West African Time</option>
                                                <option value="gmt">Green Meridian Time</option>
                                            </select>

                                            <div class="text-danger" v-if="errors.name">
                                                {{ errors.name }}
                                            </div>
                                        </div>

                                        <div class="form-group mb-3">
                                            <label>Workspace logo</label>
                                            <div class="workspace_logo p-5 border border-dotted rounded text-center">
                                                Drag & Drop or <span class="text-primary">browse your device</span>
                                            </div>

                                            <div class="text-danger" v-if="errors.name">
                                                {{ errors.name }}
                                            </div>
                                        </div>
                                    </div>

                                    <div id="collapseTwo" class="manage-content tab-pane mt-5" :class="{'d-block' : showWorkspace === false, 'd-none' : showWorkspace === true}">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group mb-3">
                                                    <label for="workspace_name">Fullname</label>
                                                    <hr>
                                                    <div>
                                                        John Doe <span class="text-light">(You)</span> 
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group mb-3">
                                                    <label for="workspace_name">Role</label>
                                                    <hr>
                                                    <div>
                                                        <select name="" id="" class="form-control border-0">
                                                            <option value="owner" selected>Owner</option>
                                                        </select> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row mt-5">
                                            <div class="col-md-4">
                                                <div class="mb-3 p-1 d-flex rounded" style="background-color: lightblue;" @click="showInviteModal = true">
                                                    <span><i class="bi bi-plus"></i></span>
                                                    <label class="text-primary">Invite Team Member</label>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div class="btn-submit form-group mt-5 text-center" :class="{'active_btn' : isSignupButtonDisabled === false}" style="padding: 5px 182px;">
                                        <button type="button" class="text-center w-100 cursor-pointer" :class="{'text-white' : isSignupButtonDisabled === false}"
                                        @click="signUpNext" :disabled="isSignupButtonDisabled">
                                            Complete registration
                                        </button>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
        <InviteModal v-show="showInviteModal" @close-modal="showInviteModal = false"/>
    </div>
</template>

<style lang="scss" scoped>
%fontFamily {
    font-family: var(--brand-font-family);
}
%lightNormal {
    font-family: var(--montserrat-font-family);
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #606060;
}
%text {
    font-family: var(--brand-font-family);
    font-weight: 600 !important;
    font-size: 14px !important;
    color: rgba(0,0,0,0.7);
}
%step_active{
    font-family: var(--brand-font-family);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #131313;
}
.cursor-pointer{
    cursor: pointer !important;
}
    .register{
        position: relative;
        .card{
            .steps-wrap {
                list-style: none;
                margin: 0;
                padding: 0;
                margin-top: 30px;
                position: relative;
                display: flex;
                border-radius: 30px;
            }
            .steps-wrap .step:not(:first-child):before {
                background-color: #ccd1d6;
                height: 4px;
                position: absolute;
                content: " ";
                width: 100%;
                right: 50%;
                top: 10px;
            }
            .steps-wrap .step {
                width: 100%;
                text-align: center;
                position: relative;
                flex-grow: 1;
                font-size: 14px;
                line-height: 24px;
            }
            .steps-wrap .icon {
                color: #fff;
                display: inline-block;
                position: relative;
                z-index: 10;
                width: 24px;
                height: 24px;
                border-radius: 24px;
                text-align: center;
                background: #ccd1d6;
            }
            .steps-wrap .text {
                display: block;
                padding-top: 5px;
                text-align: center;
                color: #9da1a7;
            }
            .steps-wrap .step.active .icon {
                background: var(--brand-color);
                color: #fff;
            }
            .steps-wrap .step.active .text {
                @extend %step_active;
            }
            .steps-wrap .step.active:after {
                //background: var(--brand-color);
                height: 4px;
                position: absolute;
                content: " ";
                z-index: 5;
                width: 50%;
                right: 0%;
                top: 10px;
            }

            label{
                @extend %text;
            }
            .reg-input{
                width: 100%;
            }
            .btn-submit{
                padding: 5px 184px;
                background: linear-gradient(92.19deg, #A3A3A3 21.83%, #D1D0D0 38.77%, #D1D0D0 55.45%, #A3A3A3 72.17%);
                //border-radius: 8px;
                button{
                    background: none;
                    @extend %lightNormal;
                }
            }

            .active_btn{
                background: linear-gradient(92.19deg, #131313 21.83%, #2F2F2F 38.77%, #2F2F2F 55.45%, #131313 72.17%) !important;
            }

            .subscription-section{
                .subscription_radio{
                    background-color: var(--brand-color);
                    border: 1px solid var(--brand-color);
                }
                .nav-content-sub-list{
                    display: flex;
                    gap: 10px;
                }
            }
            .workspace-accordion {
                background-color: #EBEBEB;
                .font_family{
                    @extend %fontFamily;
                }
                .active_tab{
                    @extend %text;
                }
                
            }
        }
        .logo{
            width: 181px;
            height: 41.03px;
        }
    }
</style>
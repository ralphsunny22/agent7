<script setup>
import Sidebar from '../components/Sidebar.vue';
import HeaderSection from '../components/HeaderSection.vue';
import SubscribeFreeModal1 from '../components/modal/SubscribeFreeModal1.vue';
import VerifyPaymentModal from '../components/modal/VerifyPaymentModal.vue';
import { ref } from 'vue';

const showSubscribeModal1 = ref(false);
const showVerifyPaymentModal = ref(false);
const title = ref("");

const showSubscribeModalFunc = (subparam) => {
    title.value = subparam
    showSubscribeModal1.value = true
}

const showVerifyPaymentModalFunc = () => {
    showSubscribeModal1.value = false;
    showVerifyPaymentModal.value = true
}

// const emit = defineEmits(['free-modal', 'premium-modal', 'standard-modal'])

</script>

<template>
    <div class="container">
        <Sidebar/>
        <div class="main">
            <HeaderSection/>
            <!-- dynamic content -->
            <section class="subscriptions-view mt-5">
                <div class="title mb-4">Subscriptions Plan</div>

                <div class="plans">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="free border p-3 mt-3">
                                <div class="textLight mb-3 text-white">Starter Plan</div>

                                <div class="text mb-3 text-white">$0.00/month</div>

                                <!-- <div>Current Plan</div> -->
                                <div class="form-group mb-3">
                                    <button type="button" class="w-100 p-3 text-dark light-btn rounded" @click="showSubscribeModalFunc('Free')">
                                        Current Plan
                                    </button>
                                </div>

                                <div class="sub-list">
                                    <div class="d-flex align-items-center gap-2 mb-2"><i class="bi bi-check-circle-fill text-success"></i> <span class="text text-white">Free</span></div>
                                    <div class="d-flex align-items-center gap-2 mb-2"><i class="bi bi-check-circle-fill text-success"></i> <span class="text text-white">24 / 7 availability</span></div>
                                    <div class="d-flex align-items-center gap-2 mb-2"><i class="bi bi-check-circle-fill text-success"></i> <span class="text text-white">Third-party integrations</span></div>
                                    <div class="d-flex align-items-center gap-2"><i class="bi bi-check-circle-fill text-success"></i> <span class="text text-white">Consultation</span></div>
                                </div>
                                
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="premium border p-3">
                                <div class="textLight mb-3 text-white">Premium Plan</div>

                                <div class="text mb-3 text-white">$0.00/month</div>

                                <!-- <div>Current Plan</div> -->
                                <div class="form-group mb-3">
                                    <button type="button" class="w-100 p-3 text-dark bg-white rounded" @click="showSubscribeModalFunc('Premium')">
                                        Premium Plan
                                    </button>
                                </div>

                                <div class="sub-list">
                                    <div class="d-flex align-items-center gap-2 mb-2"><i class="bi bi-check-circle-fill text-success"></i> <span class="text text-white">Free</span></div>
                                    <div class="d-flex align-items-center gap-2 mb-2"><i class="bi bi-check-circle-fill text-success"></i> <span class="text text-white">24 / 7 availability</span></div>
                                    <div class="d-flex align-items-center gap-2 mb-2"><i class="bi bi-check-circle-fill text-success"></i> <span class="text text-white">Third-party integrations</span></div>
                                    <div class="d-flex align-items-center gap-2"><i class="bi bi-check-circle-fill text-success"></i> <span class="text text-white">Consultation</span></div>
                                </div>
                                
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="standard border p-3 mt-3">
                                <div class="textLight mb-3 text-white">Standard Plan</div>

                                <div class="text mb-3 text-white">$0.00/month</div>

                                <!-- <div>Current Plan</div> -->
                                <div class="form-group mb-3">
                                    <button type="button" class="w-100 p-3 text-dark bg-white rounded" @click="showSubscribeModalFunc('Standard')">
                                        Standard Plan
                                    </button>
                                </div>

                                <div class="sub-list">
                                    <div class="d-flex align-items-center gap-2 mb-2"><i class="bi bi-check-circle-fill text-success"></i> <span class="text text-white">Free</span></div>
                                    <div class="d-flex align-items-center gap-2 mb-2"><i class="bi bi-check-circle-fill text-success"></i> <span class="text text-white">24 / 7 availability</span></div>
                                    <div class="d-flex align-items-center gap-2 mb-2"><i class="bi bi-check-circle-fill text-success"></i> <span class="text text-white">Third-party integrations</span></div>
                                    <div class="d-flex align-items-center gap-2"><i class="bi bi-check-circle-fill text-success"></i> <span class="text text-white">Consultation</span></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- dynamic content -->
            <SubscribeFreeModal1 v-show="showSubscribeModal1" @close-modal="showSubscribeModal1 = false" @show-verify-payment="showVerifyPaymentModalFunc" :title="title"/>
            <VerifyPaymentModal v-show="showVerifyPaymentModal" @close-modal="showVerifyPaymentModal = false"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main{
    margin-top: 1.4rem;
}
%text {
	font-family: var(--montserrat-font-family);
	font-weight: 600 !important;
	font-size: 14px !important;
	color: rgba(0,0,0,0.7);
}
.text{
	@extend %text
}
.text-bold{
	font-family: var(--montserrat-font-family);
	font-weight: 700 !important;
	font-size: 14px !important;
	color: rgba(0,0,0);
}
.textLight{
	font-family: var(--montserrat-font-family);
	font-weight: 400 !important;
	font-size: 14px !important;
	color: rgba(0,0,0,0.5);
}
.title{
	font-family: var(--montserrat-font-family);
	font-style: normal !important;
	font-weight: 500 !important;
	font-size: 32px !important;
	line-height: 40px !important;
	color: #131313 !important;
}
.free{
    width: 300px;
    height: 380px;
    background: linear-gradient(241.98deg, #393939 16.39%, #000000 88%);
    backdrop-filter: blur(15px);
    border-radius: 20px;
}
.premium{
    width: 300px;
    height: 416px;
    background: linear-gradient(241.98deg, #6D24E4 16.39%, #2A0C6A 88%);
    backdrop-filter: blur(15px);
    border-radius: 20px;
}
.standard{
    width: 300px;
    height: 380px;
    background: linear-gradient(241.98deg, #274D96 16.39%, #041B55 88%);
    backdrop-filter: blur(15px);
    border-radius: 20px;
}

.light-btn{
    background: linear-gradient(92.19deg, #A3A3A3 21.83%, #D1D0D0 38.77%, #D1D0D0 55.45%, #A3A3A3 72.17%) !important;
}

</style>
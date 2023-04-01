<script setup>
import Sidebar from '../components/Sidebar.vue';
import HeaderSection from '../components/HeaderSection.vue';
import Automation from '../components/main/integrations/Automation.vue';

import { ref } from 'vue';

const showNav = ref(1);
const toggleNavigator = (nav) => {
	showNav.value = nav
	// console.log(nav)
}
</script>

<template>
    <div class="container">
        <Sidebar/>
        <div class="main">
            <HeaderSection/>
            <!-- dynamic content -->
            <section class="integrations-view mt-5">
                <div class="row">
                    <div class="col-md-12">
                        <h4 class="title">Integrations</h4>

                        <div class="navigators mt-4 mb-4">
                            <div class="row">
                                <div class="col-md-2">
                                    <div class="item text-center p-2" :class="{'active':showNav===1}" @click="toggleNavigator(1)">
                                        Automation
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="item text-center p-2" :class="{'active':showNav===2}" @click="toggleNavigator(2)">
                                        Messaging
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="item text-center p-2" :class="{'active':showNav===3}" @click="toggleNavigator(3)">
                                        Collaboration
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="item text-center p-2" :class="{'active':showNav===4}" @click="toggleNavigator(4)">
                                        Content Management
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="item text-center p-2" :class="{'active':showNav===4}" @click="toggleNavigator(4)">
                                        Others
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Automation v-if="showNav===1"/>
                        
                    </div>

                    
                </div>
            </section>
            <!-- dynamic content -->

        </div>
    </div>
</template>

<style lang="scss" scoped>
.main{
    margin-top: 1.4rem;
}
%text {
	font-family: var(--brand-font-family);
	font-weight: 600 !important;
	font-size: 14px !important;
	color: rgba(0,0,0,0.7);
}

%navtext {
	font-family: var(--brand-font-family);
	font-weight: 600 !important;
	font-size: 12px !important;
	color: rgba(0,0,0,0.7);
}
.text{
	@extend %text
}
.text-bold{
	font-family: var(--brand-font-family);
	font-weight: 700 !important;
	font-size: 14px !important;
	color: rgba(0,0,0);
}
.title{
	font-family: var(--brand-font-family);
	font-style: normal !important;
	font-weight: 500 !important;
	font-size: 32px !important;
	line-height: 40px !important;
	color: #131313 !important;
}

.navigators{
	.item{
		background-color: #fafafa;
		@extend %navtext
	}
	.active{
		background-color: var(--brand-color);
		color: #fff;
	}
}
// general-styles-ends
</style>
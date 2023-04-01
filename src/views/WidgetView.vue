<script setup>
import Sidebar from '../components/Sidebar.vue';
import HeaderSection from '../components/HeaderSection.vue';
import AddNewWidget from '../components/main/widget/AddNewWidget.vue';
import Overview from '../components/main/widget/Overview.vue';
import ChatWidget from '../components/main/widget/ChatWidget.vue';
import SettingsWidget from '../components/main/widget/SettingsWidget.vue';
import KnowledgeBase from '../components/main/widget/KnowledgeBase.vue';
import WidgetPreview from '../components/main/widget/WidgetPreview.vue';

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
            <AddNewWidget class="d-none"/>

            <section class="main-widget mt-5">
                <div class="row">
                    <div class="col-md-8">
                        <h4 class="title">Widget</h4>

                        <div class="navigators mt-4 mb-4">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="item text-center p-2" :class="{'active':showNav===1}" @click="toggleNavigator(1)">
                                        Overview
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="item text-center p-2" :class="{'active':showNav===2}" @click="toggleNavigator(2)">
                                        Chat Widget
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="item text-center p-2" :class="{'active':showNav===3}" @click="toggleNavigator(3)">
                                        Settings
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="item text-center p-2" :class="{'active':showNav===4}" @click="toggleNavigator(4)">
                                        Add-ons
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Overview v-if="showNav===1"/>
                        <ChatWidget v-if="showNav===2"/>
                        <SettingsWidget v-if="showNav===3"/>
                        <KnowledgeBase v-if="showNav===4"/>

                    </div>

                    <div class="col-md-4">
                        <WidgetPreview/>
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
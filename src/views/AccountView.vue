<script setup>
import Sidebar from '../components/Sidebar.vue';
import HeaderSection from '../components/HeaderSection.vue';
import ProfileSettings from '../components/main/account/ProfileSettings.vue';
import NotificationPreferences from '../components/main/account/NotificationPreferences.vue';
import SignIn from '../components/main/account/SignIn.vue';
import AccountManagement from '../components/main/account/AccountManagement.vue';

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
	  <h4 class="title mt-5">My Account</h4>

      <div class="navigators mt-4 mb-4">
		<div class="row">
			<div class="col-md-3">
				<div class="item text-center p-2" :class="{'active':showNav===1}" @click="toggleNavigator(1)">
					Profile Settings
				</div>
			</div>
			<div class="col-md-3">
				<div class="item text-center p-2" :class="{'active':showNav===2}" @click="toggleNavigator(2)">
					Notification Preferences
				</div>
			</div>
			<div class="col-md-3">
				<div class="item text-center p-2" :class="{'active':showNav===3}" @click="toggleNavigator(3)">
					Sign-in Options
				</div>
			</div>
			<div class="col-md-3">
				<div class="item text-center p-2" :class="{'active':showNav===4}" @click="toggleNavigator(4)">
					Account Management
				</div>
			</div>
		</div>
	  </div>

	  <ProfileSettings v-if="showNav===1"/>

	  <NotificationPreferences v-if="showNav===2"/>

	  <SignIn v-if="showNav===3"/>

	  <AccountManagement v-if="showNav===4"/>

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

</style>

<script setup></script>

<template>
    <section class="notification-preferences">
		<div class="inner w-50">
			<div class="disable-account border rounded p-3 mb-4">
				<div class="text-bold mb-2">Disable Account</div>
				<div class="content mb-3">
					Disabling your account means that it will be temporarily deactivated and can be reactivated at any time.
				</div>
				<div class="form-group">
					<button type="button" class="w-100 p-3 text-white rounded form-btn">
						Save Changes
					</button>
				</div>
			</div>
			<div class="delete-permanently border rounded p-3">
				<div class="text-bold mb-2">Delete permanently</div>
				<div class="content mb-3">
					Deleting your account permanently removes all data associated with the account, including profile & account information, chats, widgets, etc.
				</div>
				<div class="form-group">
					<button type="button" class="w-100 p-3 text-white rounded error-btn">
						Save Changes
					</button>
				</div>
			</div>
		</div>
		
	</section>
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
.text{
	@extend %text
}
.text-bold{
	font-family: var(--brand-font-family);
	font-weight: 700 !important;
	font-size: 14px !important;
	color: rgba(0,0,0);
}
.form-btn{
	background: linear-gradient(92.19deg, #131313 21.83%, #2F2F2F 38.77%, #2F2F2F 55.45%, #131313 72.17%) !important;
}
.inactive-btn{
	background: linear-gradient(92.19deg, #A3A3A3 21.83%, #D1D0D0 38.77%, #D1D0D0 55.45%, #A3A3A3 72.17%);
	color: #131313 !important;
}
.error-btn{
	background-color: var(--color-error);
}

</style>
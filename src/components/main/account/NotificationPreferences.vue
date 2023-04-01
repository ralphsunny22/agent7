<script setup>

</script>

<template>
    <section class="notification-preferences">
		<div class="text">Get Notified On:</div>

		<div class="notify-list w-50">
			<div class="notify-list-item mt-3 p-3 d-flex justify-content-between align-items-center border rounded">
				<div class="text-bold text-side">New Chats</div>

				<div class="input-side">
					<div class="form-check form-switch">
						<input class="form-check-input notify-switch" type="checkbox" role="switch" checked>
					</div>
				</div>
			</div>

			<div class="notify-list-item mt-3 p-3 d-flex justify-content-between align-items-center border rounded">
				<div class="text-bold text-side">New visitors</div>

				<div class="input-side">
					<div class="form-check form-switch">
						<input class="form-check-input notify-switch" type="checkbox" role="switch" checked>
					</div>
				</div>
			</div>

			<div class="notify-list-item mt-3 p-3 d-flex justify-content-between align-items-center border rounded">
				<div class="text-bold text-side">System prompts</div>

				<div class="input-side">
					<div class="form-check form-switch">
						<input class="form-check-input notify-switch" type="checkbox" role="switch" checked>
					</div>
				</div>
			</div>

			<div class="notify-list-item mt-3 p-3 d-flex justify-content-between align-items-center border rounded">
				<div class="text-bold text-side">Customer login</div>

				<div class="input-side">
					<div class="form-check form-switch">
						<input class="form-check-input notify-switch" type="checkbox" role="switch" checked>
					</div>
				</div>
			</div>

			<div class="form-group mt-5">
				<button type="button" class="w-100 p-3 text-white rounded form-btn">
					Save Changes
				</button>
			</div>
			
		</div>
	</section>
</template>

<style lang="scss" scoped>

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
.notify-switch{
	background-color: var(--brand-color);
	border-color: var(--brand-color);
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
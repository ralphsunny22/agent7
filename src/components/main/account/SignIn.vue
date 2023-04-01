<script setup>

</script>

<template>
    <section class="notification-preferences">
		<div class="form-section mb-5">
			<div class="text-bold mb-3">Update Email Address</div>
			<form action="">
				
				<div class="form-group mb-3">
					<label for="email" class="text">Enter new email address</label>
					<input type="email" class="reg-input form-control w-50 text-dark fw-bold">

					<div class="text-danger">
						
					</div>
				</div>

				<div class="form-group mb-3">
					<label for="email" class="text">Enter password to continue</label>
					<input type="text" class="reg-input form-control w-50 text-dark fw-bold">

					<div class="text-danger">
						
					</div>
				</div>

				<div class="form-group mt-4">
					<button type="button" class="w-50 p-3 text-white rounded inactive-btn">
						Save Changes
					</button>
                </div>
			</form>
		</div>

		<div class="form-section">
			<div class="text-bold mb-3">Update Password</div>
			<form action="">
				
				<div class="form-group mb-3">
					<label for="current_password" class="text">Current password</label>
					<input type="text" id="current_password" class="reg-input form-control w-50 text-dark fw-bold">

					<div class="text-danger">
						
					</div>
				</div>

				<div class="form-group mb-3">
					<label for="new_password" class="text">New password</label>
					<input type="text" id="new_password" class="reg-input form-control w-50 text-dark fw-bold">

					<div class="text-danger">
						
					</div>
				</div>

				<div class="form-group mt-4">
					<button type="button" class="w-50 p-3 text-white rounded inactive-btn">
						Save Changes
					</button>
                </div>
			</form>
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
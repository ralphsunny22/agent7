<script setup></script>

<template>
    <section class="profile-settings">
		<div class="image mb-4">
			<div class="text">Profile Image</div>
			<div class="img-section">
				<img alt="Profile Image" src="@/assets/profile-lg.png" />
			</div>
		</div>

		<div class="form-section">
			<form action="">
				<div class="form-group mb-3">
					<label for="name" class="text">Full name</label>
					<input type="text" id="name" class="reg-input form-control w-50 text-dark fw-bold" placeholder="e.g John Doe" value="Martha">

					<div class="text-danger">
						
					</div>
				</div>

				<div class="form-group mb-3">
					<label for="middlename" class="text">Middle name</label>
					<input type="text" id="middlename" class="reg-input form-control w-50 text-dark fw-bold" placeholder="">

					<div class="text-danger">
						
					</div>
				</div>

				<div class="form-group mb-3">
					<label for="lastname" class="text">Last name</label>
					<input type="text" id="lastname" class="reg-input form-control w-50 text-dark fw-bold" placeholder="" value="John">

					<div class="text-danger">
						
					</div>
				</div>

				<div class="form-group mb-3">
					<label for="email" class="text">Email address</label>
					<input type="text" id="email" class="reg-input form-control w-50 text-dark fw-bold" placeholder="" value="martha@email.com">

					<div class="text-danger">
						
					</div>
				</div>

				<div class="form-group mt-5">
					<button type="button" class="w-50 p-3 text-white rounded form-btn">
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

.text{
	@extend %text
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

.img-section{
	width: 126.07px;
	height: 126.07;
	border-radius: 50%;
	img{
		object-fit: contain;
	}
	
}
</style>

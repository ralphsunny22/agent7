<script setup>
</script>

<template>
    <section class="overview">
        <section class="profile-settings">
            <div class="image mb-4">
                <div class="text">Widget Image</div>
                <div class="img-section">
                    <img alt="Profile Image" src="@/assets/widget-overview.png" />
                </div>
            </div>

            <div class="form-section">
                <form action="">
                    <div class="form-group mb-3">
                        <label for="name" class="text">Project name</label>
                        <input type="text" id="name" class="reg-input form-control text-dark fw-bold" placeholder="" value="Google">

                        <div class="text-danger">
                            
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        <label for="middlename" class="text">Website URL</label>
                        <input type="text" id="middlename" class="reg-input form-control text-dark fw-bold" placeholder="" value="https://www.google.com">

                        <div class="text-danger">
                            
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <label class="modal-text">Code</label>
                            <div class="p-2 d-flex gap-2 rounded" style="background-color: #fafafa; cursor: pointer;">
                                <span class="text-primary"><i class="bi bi-clipboard-check-fill"></i></span>
                                <small class="text-primary text-small">Copy Code</small>
                            </div>
                        </div>
                        <textarea name="" id="" cols="30" rows="10" class="form-control text-dark fw-bold"><!DOCTYPE html>
                        <html lang="en">
                                <head>
                                    <meta charset="UTF-8">
                                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    <title>Document</title>
                                </head>
                                <body>
                                
                                </body>
                            </html></textarea>

                        <div class="text-danger">
                            
                        </div>
                    </div>

                    <div class="form-group mt-5">
                        <button type="button" class="w-100 p-3 text-white rounded form-btn">
                            Save Changes
                        </button>
                    </div>

                    <div class="d-flex gap-3 mt-3">
                        <div><i class="bi bi-info-circle-fill"></i></div>
                        <div>You can always copy the code once you add the widget, in case you cannot add it to your website at the moment.</div>
                    </div>
                </form>
            </div>
        </section>
    </section>
</template>

<style lang="scss" scoped>
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
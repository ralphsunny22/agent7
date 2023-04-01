<script setup>
</script>

<template>
    <section class="overview">
        <section class="profile-settings">
            
            <div class="form-section">
                <form action="">

                    <div class="form-group mb-3">
                        <label for="middlename" class="text">Widget language</label>
                        <select name="" id="" class="form-control text-dark fw-bold">
                            <option value="english">English Language</option>
                        </select>

                        <div class="text-danger">
                            
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        <label for="middlename" class="text">Timezone</label>
                        <select name="" id="" class="form-control text-dark fw-bold">
                            <option value="cst">Central Standard Time (CST)</option>
                        </select>

                        <div class="text-danger">
                            
                        </div>
                    </div>

                    <div class="text">Visibility Settings</div>
                    <div class="form-group mb-3">
                        
                        <div class="d-flex justify-content-between align-items-center border rounded form-control">
                            <div class="text-dark fw-bold">Hide widget when offline</div>
                            <div class="form-check form-switch">
                                <input class="form-check-input notify-switch bg-warning border-warning" type="checkbox" role="switch" checked>
                            </div>
                        </div>
                        

                        <div class="text-danger">
                            
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        
                        <div class="d-flex justify-content-between align-items-center border rounded form-control">
                            <div class="text-dark fw-bold">Hide widget during loading on desktop</div>
                            <div class="form-check form-switch">
                                <input class="form-check-input notify-switch bg-warning border-warning" type="checkbox" role="switch" checked>
                            </div>
                        </div>
                        
                        <div class="text-danger">
                            
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        
                        <div class="d-flex justify-content-between align-items-center border rounded form-control">
                            <div class="text-dark fw-bold">Hide widget during loading on desktop</div>
                            <div class="form-check form-switch">
                                <input class="form-check-input notify-switch bg-warning border-warning" type="checkbox" role="switch" checked>
                            </div>
                        </div>
                        
                        <div class="text-danger">
                            
                        </div>
                    </div>

                    <div class="p-2 d-flex gap-2 rounded" style="background-color: #fafafa; cursor: pointer;">
                        <span class="text-danger"><i class="bi bi-trash-fill"></i></span>
                        <small class="text-danger text-small">Copy Code</small>
                    </div>

                    <div class="form-group mt-5">
                        <button type="button" class="w-100 p-3 text-white rounded form-btn">
                            Save Changes
                        </button>
                    </div>

                </form>
            </div>
        </section>
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

</style>
<script setup>
</script>

<template>
    <section class="overview">
        <section class="profile-settings">
            
            <div class="mb-4">
                <div class="text">
                    Chat widget colour
                    <div class="widget-colors d-flex justify-content-between border rounded p-3 mt-1">
                        <div class="badge bg-primary rounded-circle p-4"><i class="bi bi-check-circle-fill text-white"></i></div>
                        <div class="badge bg-success rounded-circle p-4"><i class="bi bi-check-circle-fill text-white invisible"></i></div>
                        <div class="badge bg-danger rounded-circle p-4"><i class="bi bi-check-circle-fill text-white invisible"></i></div>
                        <div class="badge rounded-circle p-4" style="background-color: #E67E22;"><i class="bi bi-check-circle-fill text-white invisible"></i></div>
                        <div class="badge rounded-circle p-4" style="background-color: #CEA007;"><i class="bi bi-check-circle-fill text-white invisible"></i></div>
                        <div class="badge rounded-circle p-4" style="background-color: #9328E7;"><i class="bi bi-check-circle-fill text-white invisible"></i></div>
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <form action="">

                    <div class="form-group mb-3">
                        <label class="text">Profile Logo</label>
                        <div class="workspace_logo p-5 border border-dotted rounded text-center">
                            Drag & Drop or <span class="text-primary">browse your device</span>
                        </div>

                        <div class="text-danger">
                           
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        <label for="middlename" class="text">Name on widget</label>
                        <input type="text" id="middlename" class="reg-input form-control text-dark fw-bold" placeholder="" value="Martha Kent">

                        <div class="text-danger">
                            
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        <label for="middlename" class="text">Caption Text</label>
                        <input type="text" id="middlename" class="reg-input form-control text-dark fw-bold" placeholder="" value="Ask me, I’ll answer">

                        <div class="text-danger">
                            
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        <label for="middlename" class="text">Website widget status</label>
                        <div class="d-flex justify-content-between align-items-center border rounded form-control">
                            <div class="text-dark fw-bold">Active</div>
                            <div class="form-check form-switch">
                                <input class="form-check-input notify-switch bg-warning border-warning" type="checkbox" role="switch" checked>
                            </div>
                        </div>
                        

                        <div class="text-danger">
                            
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        <label for="middlename" class="text">Emoji Selection</label>
                        <div class="d-flex justify-content-between align-items-center border rounded form-control">
                            <div class="text-dark fw-bold">Enable</div>
                            <div class="form-check form-switch">
                                <input class="form-check-input notify-switch bg-warning border-warning" type="checkbox" role="switch" checked>
                            </div>
                        </div>
                        

                        <div class="text-danger">
                            
                        </div>
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
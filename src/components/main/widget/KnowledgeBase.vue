<script setup>
</script>

<template>
    <section class="overview">
        <section class="profile-settings">
            
            <div class="form-section">
                <form action="">

                    <div class="border rounded p-3 box-shadow">
                        <div class="text text-dark">Knowledge Base</div>
                        <p class="text">
                            Knowledge bases are used for customer support, technical documentation, training, and research.
                            They provide the knowledge required for systems to make informed decisions, answer questions, and perform various tasks
                        </p>
                        <div class="form-group mt-5">
                            <button type="button" class="w-100 p-3 text-dark border border-dark rounded bg-white">
                                Create knowledge base
                            </button>
                        </div>
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
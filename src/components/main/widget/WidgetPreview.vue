<script setup></script>

<template>
    <div>
        <h4 class="title">Widget Preview</h4>
        <section class="preview text-center border rounded p-3">
            <div class="profile border border border-primary rounded-top bg-primary py-3 mb-3">
                <div class="badge bg-white border border-primary rounded-circle p-3"><i class="bi bi-person-circle text-dark" style="font-size: 20px;"></i></div>
                <div class="text text-white">Agent Smith</div>
                <div class="text text-white"><small>Ask anything, I'll answer</small></div>
                <div class="text text-white"><small><i class="bi bi-dot" style="font-size: 18px; color: #DEE6ED;"></i></small> <small>Active</small></div>
            </div>

            <div class="chat-side">
                <div class="active-user mb-3">
                    <div class="d-flex gap-3">
                        <span class="badge bg-primary border border-primary p-1 rounded-circle"><i class="bi bi-person-fill text-white"></i></span>
                        <span class="text">Martha Kent</span>
                    </div>
                </div>

                <div class="chat-list">
                    <div class="from-left d-flex">
                       <p class="bg-primary text-white p-2" style="margin-right: auto; border-radius: 5px 5px 5px 0;">Hello! How can I help you today?</p>
                    </div>
                    <div class="from-right d-flex">
                       <p class="text p-2 text-dark" style="margin-left: auto; background-color: #F9F8F7; border-radius: 5px 5px 0px 5px;" >Good evening, Martha!</p>
                    </div>
                </div>

                <!-- typing-area -->
                <div class="typing-area mt-5">
                    <div class="has-input-icon">
                        <div class="form-control-feedback">
                            <i class="bi bi-send-fill send"></i>
                        </div>
                        <input type="text" class="form-control p-3" placeholder="Write your message">
                    </div>
                </div>
            </div>
        </section>
    </div>
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
.title{
	font-family: var(--brand-font-family);
	font-style: normal !important;
	font-weight: 500 !important;
	font-size: 32px !important;
	line-height: 40px !important;
	color: #131313 !important;
}

.typing-area{
        .has-input-icon .form-control {
            padding-left: 2.375rem;
        }

        .has-input-icon .form-control-feedback {
            
            i{
                position: absolute;
                margin-left: 7%;
                transform: rotate(45deg);
                font-size: 30px;
            }
            .send{
                color: var(--brand-color);
            }
        }
        input{
            background: #FFFFFF;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
            border-radius: 20px;
            // height: 64px;
        }
    }
</style>
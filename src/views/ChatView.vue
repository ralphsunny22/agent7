<script setup>
import Sidebar from '../components/Sidebar.vue';
import HeaderSection from '../components/HeaderSection.vue';

</script>

<template>
    <div class="container">
        <Sidebar/>
        <div class="main">
            <HeaderSection/>

            <!-- dynamic content -->
            <section>
                <div class="chat-section mt-3">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="chat-list">
                                <div class="white-bg p-2 mb-3">
                                    <div class="chat-intro d-flex justify-content-start align-items-center">
                                        <div class="title">Chats</div>
                                        <div class="badge bg-danger rounded-circle">2</div>
                                    </div>
                                    <div><small class="caption-text">Find chats with teams, customers and visitors here</small></div>
                                </div>

                                <div class="users-list">
                                    <div class="list-item mb-3 d-flex justify-content-between align-items-center bg-white p-2 border border-white rounded">
                                        <div class="user-image">
                                            <img src="@/assets/user-chat.png" alt="">
                                        </div>
                                        <div class="username-message">
                                            <div class="username text text-dark">Alex Morgan</div>
                                            <div class="last-message-dark">I guess we’ll have to use the other for...</div>
                                        </div>
                                        <div class="badge bg-danger rounded-circle">2</div>
                                    </div>

                                    <div class="list-item mb-3 d-flex justify-content-between align-items-center bg-white p-2 border border-white rounded">
                                        <div class="user-image">
                                            <img src="@/assets/user-chat.png" alt="">
                                        </div>
                                        <div class="username-message">
                                            <div class="username text text-dark">Alex Morgan</div>
                                            <div class="last-message-light">I guess we’ll have to use the other for...</div>
                                        </div>
                                        <div class="badge bg-danger rounded-circle d-none">2</div>
                                    </div>

                                    <div class="list-item mb-3 d-flex justify-content-between align-items-center bg-white p-2 border border-white rounded">
                                        <div class="user-image">
                                            <img src="@/assets/user-chat.png" alt="">
                                        </div>
                                        <div class="username-message">
                                            <div class="username text text-dark">Alex Morgan</div>
                                            <div class="last-message-dark">I guess we’ll have to use the other for...</div>
                                        </div>
                                        <div class="badge bg-danger rounded-circle">2</div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>

                        <div class="col-md-8">
                            <div class="chat-side p-5">
                                <div class="user-active d-flex justify-content-between align-items-center p-3">

                                    <div class="right-side d-flex justify-content-between align-items-center">
                                        <div><i class="bi bi-person-circle"></i></div>
                                        <div class="text text-dark" style="font-size: 11px !important;">Alex Morgan <br> <span class="text-muted">alex@email.com</span></div>
                                        <div class="badge border border-success text-success">Active</div>
                                    </div>

                                    <div class="left-side d-flex justify-content-center align-items-center">
                                        <div class="text-danger"><i class="bi bi-trash"></i></div>
                                        <div class="text-dark"><i class="bi bi-x-circle-fill"></i></div>
                                    </div>
                                </div>

                                <!---main-chat-area--->
                                <div class="main-chat-area mt-3">
                                    <div class="left-chat-area w-50">
                                        
                                        <div class="mb-3 d-flex justify-content-start align-items-end gap-1">
                                            <div><i class="bi bi-person-circle"></i></div>
                                            <div class="bg-white text-muted text left-chat-area-msg">Hello, I said it was a minor issue. So it was gonna be resolved yesterday but there wasn’t any redeployment</div>
                                            <small class="time text-muted text d-flex gap-1"><span>08:33</span> <span>AM</span></small>
                                        </div>

                                        <div class="mb-3 d-flex justify-content-start align-items-end gap-1">
                                            <div><i class="bi bi-person-circle"></i></div>
                                            <div class="bg-white text-muted text left-chat-area-msg">Do you understand now?</div>
                                            <small class="time text-muted text d-flex gap-1"><span>08:33</span> <span>AM</span></small>
                                        </div>
                                    </div>
                                    
                                    <div class="right-chat-area">
                                        <div class="inner mb-3 d-flex justify-content-start align-items-end gap-1 flex-row-reverse">
                                            <div><i class="bi bi-person-circle"></i></div>
                                            <div class="text right-chat-area-msg">So it was gonna be resolved yesterday</div>
                                            <small class="time text-muted text d-flex gap-1"><span>08:33</span> <span>AM</span></small>
                                        </div>

                                        <div class="inner mb-3 d-flex justify-content-start align-items-end gap-1 flex-row-reverse">
                                            <div><i class="bi bi-person-circle"></i></div>
                                            <div class="text right-chat-area-msg">Hello, I said it was a minor issue. So it was gonna be resolved yesterday but there wasn’t any redeployment</div>
                                            <small class="time text-muted text d-flex gap-1"><span>08:33</span> <span>AM</span></small>
                                        </div>
                                    </div>

                                    <div class="left-chat-area w-50">
                                        <div class="mb-3 d-flex justify-content-start align-items-end gap-1">
                                            <div><i class="bi bi-person-circle"></i></div>
                                            <div class="bg-white text-muted text left-chat-area-msg">Do you understand now?</div>
                                            <small class="time text-muted text d-flex gap-1"><span>08:33</span> <span>AM</span></small>
                                        </div>
                                    </div>
                                </div>

                                <!-- typing-area -->
                                <div class="typing-area mt-5">
                                    <div class="has-input-icon">
                                        <div class="form-control-feedback d-flex gap-4">
                                            <i class="bi bi-emoji-smile-fill"></i>
                                            <i class="bi bi-link-45deg"></i>
                                            <i class="bi bi-send-fill send"></i>
                                        </div>
                                        <input type="text" class="form-control p-3" placeholder="Write a message">
                                    </div>
                                </div>

                            </div>

                            <div class="d-none no-chat-side d-flex justify-content-center align-items-center flex-column">
                                <div class="last-message-light" style="font-size: 14px !important;">No Chats Openned</div>
                                <div class="no-chat-img">
                                    <img src="@/assets/no-chat.png" alt="">
                                </div>
                                <div class="text">To open a chat, click on any message on the left panel</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
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
.text{
	@extend %text
}
.text-bold{
	font-family: var(--brand-font-family);
	font-weight: 700 !important;
	font-size: 14px !important;
	color: rgba(0,0,0);
}
.last-message-dark{
    font-family: var(--brand-font-family);
	font-weight: 900 !important;
	font-size: 11px !important;
	color: rgba(0,0,0);
}
.last-message-ligh{
    font-family: var(--brand-font-family);
	font-weight: 400 !important;
	font-size: 11px !important;
	color: rgba(0,0,0);
}
.dark-text{
    color: #131313 !important;
}
.title{
	font-family: var(--brand-font-family);
	font-style: normal !important;
	font-weight: 700 !important;
	font-size: 22px !important;
	line-height: 40px !important;
	color: #131313 !important;
}
.chat-intro, .list-item, .right-side, .left-side{
    gap: 10px;
}
.white-bg{
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 4px;
}
.caption-text{
    font-family: var(--montserrat-font-family);
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    color: #606060;
}

.users-list{
    .user-image{
        width: 44px;
        height: 44px;
        img{
            object-fit: contain;
        }
    }
}

.no-chat-side{
    width: 739px;
    height: 772px;
    overflow-y: scroll;
    background: #F8F9FE;
    // border: 1px solid;
    .no-chat-img{
        width: 238px;
        height: 238px;
        img{
            object-fit: contain;
        }
    }
}

.chat-side{
    width: 739px;
    height: 772px;
    overflow-y: scroll;
    background: #F8F9FE;
    .user-active{
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
        backdrop-filter: blur(10px);
        border-radius: 4px;
    }
    .left-chat-area-msg{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 12px;
        gap: 10px;
        font-size: 12px !important;
        font-family: var(--montserrat-font-family) !important;
        color: #131313 !important;

        background: #FFFFFF;
        box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
    }
    
    .right-chat-area{
        .inner{
            margin-left: 50%;
            .right-chat-area-msg{
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                padding: 12px;
                gap: 10px;
                font-size: 12px !important;
                font-family: var(--montserrat-font-family) !important;
                color: #fff !important;

                background: #071B35;
                box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.05);
                border-radius: 10px;
            }
        }
    }

    .typing-area{
        .has-input-icon .form-control {
            padding-left: 2.375rem;
        }

        .has-input-icon .form-control-feedback {
            position: absolute;
            z-index: 2;
            display: block;
            width: 2.375rem;
            height: 2.375rem;
            line-height: 3.375rem;
            text-align: center;
            pointer-events: none;
            color: #aaa;
            margin-left: 38%;
            i{
                font-size: 20px;
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
}

</style>
<script setup>
import { ref } from 'vue';

const showOthers = ref(false)
const activeItemId = ref(0)

const setActiveItemId = (itemIndex) => {
    activeItemId.value = itemIndex
}
</script>

<template>
    <div>
        <aside class="p-1">
            <div class="top">
                <div class="logo">
                    <img alt="Vue logo" src="@/assets/logo.png" />
                </div>
                <div class="close" id="close-btn">
                    <span class="material-icons-round">close</span>
                </div>
            </div>

            <ul class="sidebar-nav" id="sidebar-nav">


                <!---products--->
                <li class="nav-item mb-3">
                    <div class="d-flex justify-content-between align-items-center p-2 light-btn">
                        <div class="d-flex justify-content-between align-items-center gap-2">
                            <div style="width: 24px; height: 24px;">
                                <img src="@/assets/sidebar-agent.png" alt="" style="object-fit: contain;">
                            </div>
                            <div>
                                <div class="text" style="color: white !important;">Agent</div>
                                <div>
                                    <span class="text" style="color: #ABACAC !important;">Workspace</span>
                                    <span class="text" style="color: white !important;"><i class="bi bi-dot"></i><span style="color: #E67E22;">Owner</span></span>
                                </div>
                            </div>
                        </div>

                        <div @click="showOthers = !showOthers">
                            <i class="bi bi-chevron-expand text-white"></i>
                        </div>
                    </div>

                    <div class="other-workspaces mt-2" v-if="showOthers">

                        <div class="d-flex justify-content-between align-items-center p-2 border rounded">
                            <div class="d-flex justify-content-between align-items-center gap-2">
                                <div style="width: 24px; height: 24px;">
                                    <img src="@/assets/sidebar-agent.png" alt="" style="object-fit: contain;">
                                </div>
                                <div>
                                    <div class="text">Jumia</div>
                                    <div>
                                        <span class="text" style="color: #ABACAC !important;">Workspace</span>
                                        <span class="text" style="color: #ABACAC !important;"><i class="bi bi-dot"></i><span style="color: #E67E22;">Admin</span></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <i class="bi bi-chevron-expand text-white"></i>
                            </div>
                        </div>

                        <div class="d-flex justify-content-between align-items-center p-2 border rounded">
                            <div class="d-flex justify-content-between align-items-center gap-2">
                                <div style="width: 24px; height: 24px;">
                                    <img src="@/assets/sidebar-agent.png" alt="" style="object-fit: contain;">
                                </div>
                                <div>
                                    <div class="text">Jumia</div>
                                    <div>
                                        <span class="text" style="color: #ABACAC !important;">Fetz Protocol</span>
                                        <span class="text" style="color: #ABACAC !important;"><i class="bi bi-dot"></i><span style="color: #E67E22;">Owner</span></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <i class="bi bi-chevron-expand text-white"></i>
                            </div>
                        </div>

                        <div class="text-center border rounded p-2 mt-5 mb-5">
                            <button class="w-100 bg-light">
                                <span class="d-flex justify-content-center align-items-center text-primary">
                                    <span><i class="bi bi-plus" style="font-size: 25px;"></i></span> <span>Add Workspace</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </li>

                <RouterLink to="/" class="d-flex justify-content-start align-items-center"
                
                @click="setActiveItemId(0)"
                >

                    <div class="flip-box-inner"><span><i class="bi bi-grid-fill"></i></span></div>
                    <h3 class="text">Dashboard</h3>
                    
                </RouterLink>

                <RouterLink to="/account" :class="{'active': activeItemId == 1}">
                    <span class=""><i class="bi bi-person-circle"></i></span>
                    <h3 class="text">My Account</h3>
                </RouterLink>

                <RouterLink to="/chat">
                    <span><i class="bi bi-chat-left-fill"></i></span>
                    <h3 class="text">Chats</h3>
                    
                </RouterLink>

                <RouterLink to="/team">
                    <span><i class="bi bi-people-fill"></i></span>
                    <h3 class="text">Team Members</h3>
                </RouterLink>

                <RouterLink to="/widget">
                    <span><i class="bi bi-grid-1x2-fill"></i></span>
                    <h3 class="text">Widgets</h3>
                </RouterLink>

                <RouterLink to="/integrations">
                    <span><i class="bi bi-subtract"></i></span>
                    <h3 class="text">Integration</h3>
                </RouterLink>

                <RouterLink to="/subscriptions">
                    <span><i class="bi bi-wallet-fill"></i></span>
                    <h3 class="text">Subscription</h3>
                </RouterLink>
            </ul>
            

        </aside>
    </div>
    
</template>

<style lang="scss" scoped>
%text {
	font-family: var(--brand-font-family);
	font-weight: 600 !important;
	font-size: 12px !important;
	color: rgba(0,0,0,0.7);
}

.text{
	@extend %text
}
.light-btn{
    background: linear-gradient(86.41deg, #131313 7.57%, #2F2F2F 54.09%, #2F2F2F 83.92%, #131313 96.01%);
    border-radius: 8px;
}

.flipped {
  transform: scaleX(-1);
}


aside{
    height: 100%;
    background: #fafafa;

    .top{
        // background: red;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1.4rem;

        .logo{
            width: 181px;
            height: 41.03px;
            img{
                object-fit: contain;
                width: 85%;
            }
        }

        .close{
            display: none;
        }
    }

    ul{
        padding: 0 !important;
    }
    .sidebar-nav{
        // background: grey;
        display: flex;
        flex-direction: column;
        height: 86vh;
        position: relative;
        top: 3rem;

        a{
            display: flex;
            color: var(--color-black);
            margin-left: 2rem;
            gap: 1rem;
            align-items: center;
            height: 3.7rem;
            transition: all 300ms ease;
            &:hover{
                background-color: var(--color-black) !important;
                color: #fff !important;
                margin-left: 0 !important;
                border-radius: 5px;
            }
            &:hover span i{
                margin-left: calc(1rem - 3px);
                color: var(--brand-color) !important;
                //background-color: var(--brand-color);
            }
            span i{
                font-size: 1.6rem;
                transition: all 300ms ease;
            }
            &:hover h3{
                
                color: white !important;
                //background-color: var(--brand-color);
            }
            h3{
                font-size: 16px !important;
                margin-bottom: 0 !important;
            }
            
        }
    }
    .active{
        background-color: var(--color-black) !important;
        color: #fff !important;
        margin-left: 0 !important;
        border-radius: 5px;
    }

    .active span i{
        margin-left: calc(1rem - 3px);
        color: var(--brand-color) !important;
        // background-color: var(--brand-color);
        border-radius: 50%;
    }
    .active h3{
        color: #fff;
    }

}
</style>

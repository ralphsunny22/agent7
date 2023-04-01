<script setup>
    import UserCount from './UserCount.vue';
    import PageViewCount from './PageViewCount.vue';
    import WatchDemo from './WatchDemo.vue';
    import Chats from './Chats.vue';
    import Reporting from './Reporting.vue';
    import ChartSection from './ChartSection.vue';
    import UserCountByMap from './UserCountByMap.vue';
</script>

<template>
    <div>
        <div class="section-title">
            <h1 class="title">Dashboard</h1>
        </div>

        <div class="section-content">

            <section class="mt-4">
                <div class="row">
                    <div class="col-md-4">
                        <UserCount/>
                    </div>

                    <div class="col-md-4">
                        <PageViewCount/>
                    </div>

                    <div class="col-md-4">
                        <WatchDemo/>
                    </div>
                </div>
            </section>
            
            <section class="mt-4">
                <div class="row">
                    <div class="col-md-4">
                        <div class="row">
                            <div class="col-md-12">
                                <Chats/>
                            </div>
                            <div class="col-md-12 mt-4">
                                <Reporting/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <ChartSection/>
                    </div>

                </div>
            </section>

            <section class="mt-4">
                <div class="row">
                    <div class="col-md-8">
                        <UserCountByMap/>
                    </div>

                    <div class="col-md-4">
                        <div class="card p-2">
                            <div class="top">
                                <div class="user-count"><h5 class="subtitle">Latest Updates</h5></div>
                                <div class="this-week">
                                    <h5 class="text m-0">This week</h5>
                                    <span class="material-icons-round">expand_more</span>
                                </div>
                            </div>
                            <hr>
                            <div class="updates-list">
                                <div class="link">
                                    <a href="">
                                        <div class="alarm-rect">
                                            <div class="alarm-circle">
                                                <span class="material-icons-round">notifications_active</span>
                                            </div>
                                            
                                        </div>
                                        <h3 class="fw-bold">Interactive chat widgets now unique!</h3>
                                    </a>
                                    <p class="mt-3 details">With the latest updates on our chat widgets, workspaces can now customize their... See more</p>
                                </div>
                                <hr>
                                <div class="link">
                                    <a href="">
                                        <div class="alarm-rect">
                                            <div class="alarm-circle">
                                                <span class="material-icons-round">notifications_active</span>
                                            </div>
                                            
                                        </div>
                                        <h3 class="fw-bold">Interactive chat widgets now unique!</h3>
                                    </a>
                                    <p class="mt-3 details">With the latest updates on our chat widgets, workspaces can now customize their... See more</p>
                                </div>
                                <hr>
                                <div class="link">
                                    <a href="">
                                        <div class="alarm-rect">
                                            <div class="alarm-circle">
                                                <span class="material-icons-round">notifications_active</span>
                                            </div>
                                            
                                        </div>
                                        <h3 class="fw-bold">Interactive chat widgets now unique!</h3>
                                    </a>
                                    <p class="mt-3 details">With the latest updates on our chat widgets, workspaces can now customize their... See more</p>
                                </div>
                                
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
.section-title{
    margin-top: 1.6rem !important;
}

%lightNormal {
    font-family: var(--montserrat-font-family);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #131313;
}
%text {
    font-family: var(--brand-font-family);
    font-weight: 400 !important;
    font-size: 14px !important;
    color: rgba(0,0,0,0.7);
}
.card{
    background-color: #fafafa;

    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .user-count{
            .text{
                @extend %text;
            }
        }
        .this-week{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            .text{
                @extend %text
            }
            span{
                font-size: 14px;
            }
        }
    }
    .updates-list{
        a{
            display: flex;
            color: var(--color-black);
            margin-left: 1rem;
            gap: 1rem;
            align-items: center;
            height: 3.7rem;
            transition: all 300ms ease;
            .alarm-rect{
                display: flex;
                border: 1px solid rgba(40, 128, 231, 0.08);
                background-color: rgba(40, 128, 231, 0.08);
                border-radius: 10%;
                padding: 10px;
            }
            .alarm-circle{
                display: flex;
                border: 1px solid #2880E7;
                border-radius: 50%;
                padding: 5px;
            }
            span{
                transition: all 300ms ease;
                color: #2880E7;
            }
        }
        .details{
                font-size: 12px;
                margin-left: 1rem !important;
            }
    }

}


</style>
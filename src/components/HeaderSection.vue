<script setup>

</script>

<template>
    <div>
        <div class="header">
            <div class="search-input-icon d-none">
                <span class="material-icons-round icon">search</span>
                <input type="text" class="form-control input-field" placeholder="Type anywhere to search">
            </div>
            <div class="has-search">
                <span class="material-icons-round form-control-feedback">search</span>
                <input type="text" class="form-control" placeholder="Search">
            </div>

            <div class="right">
                <div class="date vertical">
                    <div class="date-content">
                        <span class="material-icons-round">calendar_month</span>
                        <span>Mar 26th, 2023</span>
                    </div>
                </div>
                <div class="alarm vertical">
                    <div class="alarm-content">
                        <span class="material-icons-round">notifications_active</span>
                    </div>
                </div>
                <div class="profile vertical">
                    <div class="profile-content">
                        <div class="image-content">
                            <div class="image">
                                <img alt="Profile Image" src="@/assets/profile.png" />
                            </div>
                            <div class="name-email">
                                <h4>Martha Kent</h4>
                                <small>martha@gmail.com</small>
                            </div>
                        </div>
                        
                        <div class="caret-icon">
                            <span class="material-icons-round">expand_more</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .has-search .form-control {
            padding-left: 2.375rem;
        }

        .has-search .form-control-feedback {
            position: absolute;
            z-index: 2;
            display: block;
            width: 2.375rem;
            height: 2.375rem;
            line-height: 2.375rem;
            text-align: center;
            pointer-events: none;
            color: #aaa;
        }

        .right{
            display: flex;
            gap: 30px;

            .vertical:not(:last-child){
                text-align: center;
                border-right: 1px solid #DEE6ED;
                padding-right: 30px;
                // padding-left: 19px;
            }

            .vertical .date-content{
                display: flex;
                gap: 10px;
                align-items: center;
                background-color: #F7F7F7;
                padding: 10px;
                border-radius: 5px;
            }
            .vertical .alarm-content{
                display: flex;
                border: 1px solid grey;
                border-radius: 50%;
                padding: 5px;
            }

            .vertical .profile-content{
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 20px;
                .image-content{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 5px;
                    .image{
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        img{
                            object-fit: contain;
                        }
                        
                    }
                    .name-email h4{
                        font-size: 14px;
                        margin-bottom: 0;
                    }
                    
                }
                
                .caret-icon{
                    
                }
            }


            
        }
    }
</style>
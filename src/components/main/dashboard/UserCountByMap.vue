<script setup></script>

<template>
    <div class="card p-2">
        <div class="top1 d-flex justify-content-between align-items-center">
            <div class="visitors"><h5 class="subtitle">Users Count By Map</h5></div>
            <div class="ellipsis"><span>...</span></div>
        </div>
        <hr>
        <div class="top">
            <div class="user-count"><h5 class="subtitle"><span class="text">All Users: &nbsp; &nbsp; </span>3,532</h5></div>
            <div class="this-week">
                <h5 class="text m-0">This week</h5>
                <span class="material-icons-round">expand_more</span>
            </div>
        </div>
        
        <div class="map-secton mt-3">
            <img src="@/assets/world.svg" alt="">
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
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
    .map-section {
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
        }
    }
}
</style>
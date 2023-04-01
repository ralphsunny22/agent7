<script setup></script>

<template>
    <div class="card p-2">
        <div class="top">
            <div class="user-count"><h5 class="subtitle">User Count</h5></div>
            <div class="this-week">
                <h5 class="text">This week</h5>
                <span class="material-icons-round">expand_more</span>
            </div>
        </div>
        <hr>
        <div class="middle">
            <div class="count-value">3,532</div>
        </div>
        <hr>
        <div class="bottom">
            <div class="count-info"><p>20% more than last week</p> </div>
            <div class="caret-direction text-success"><span><i class="bi bi-arrow-up-right"></i></span></div>
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
.card{
    background-color: #fafafa;

    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .this-week{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 10px;
            .text{
                font-family: var(--brand-font-family);
                font-weight: 400 !important;
                font-size: 14px !important;
                color: rgba(0,0,0,0.7);
            }
            span{
                font-size: 14px;
            }
        }
    }
    .middle{
        display: flex;
        justify-content:start;
        align-items: center;
        gap: 10px;
        .count-value{
            font-family: var(--brand-font-family);
            font-style: normal;
            font-weight: 600;
            font-size: 40px;
            line-height: 48px;
            color: #131313;
        }
    }
    .bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .count-info p{
            @extend %lightNormal;
        }
        .caret-direction span{
            font-family: var(--brand-font-family);
            font-weight: 600;
            color: #0CA81D;
        }
    }
}
</style>
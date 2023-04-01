<script setup></script>

<template>
    <div class="card p-2">
        <div class="top">
            <div class="user-count"><h5 class="subtitle">Chats</h5></div>
            <div class="this-week">
                <h5 class="text">This week</h5>
                <span class="material-icons-round">expand_more</span>
            </div>
        </div>
        <hr>
        <div class="middle">
            <div class="answered vertical">
                <div class="text">Answered</div>
                <div class="count-value">23</div>
            </div>
            <div class="missed vertical">
                <div class="text">Missed</div>
                <div class="count-value">4</div>
            </div>
            <div class="pending vertical">
                <div class="text">Pending</div>
                <div class="count-value">0</div>
            </div>
            
        </div>
        <hr>
        <div class="bottom">
            <div class="count-info"><p>Success rate:</p> </div>
            <div class="caret-direction"><span>89%</span></div>
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
        .this-week{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 10px;
            .text{
                @extend %text;
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
        gap: 20px;
        .vertical{
            height: 50px;
        }
        .text{
            @extend %text;
        }
        .count-value{
            font-family: var(--brand-font-family);
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
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
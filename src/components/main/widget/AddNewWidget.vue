<script setup>
import AddWidgetModal1 from "../../modal/AddWidgetModal1.vue";
import AddWidgetModal2 from "../../modal/AddWidgetModal2.vue";
import { ref } from 'vue';

const showAddWidgetModal1 = ref(false);
const showAddWidgetModal2 = ref(false);

const closeModal1Func = () => {
    showAddWidgetModal1.value = false;
    showAddWidgetModal2.value = true;
}
</script>

<template>
    <div>
        <section class="mt-3">
            <div class="no-chat-side d-flex justify-content-center align-items-center flex-column">
                <div class="last-message-light" style="font-size: 14px !important;">No widget created yet</div>
                <div class="no-chat-img">
                    <img src="@/assets/empty-widget.png" alt="">
                </div>
                <div class="text w-50 mt-3">Add widget to embed live chats on your website for continuous communication between you and your customers or visitors</div>

                <div class="form-group w-50 mt-3">
                    <button type="button" class="w-100 p-3 text-white rounded form-btn" @click="showAddWidgetModal1 = true">
                        Add Widget
                    </button>
                </div>
            </div>
            
        </section>

        <AddWidgetModal1 v-show="showAddWidgetModal1" @close-modal-1="closeModal1Func"/>
        <AddWidgetModal2 v-show="showAddWidgetModal2" @close-modal="showAddWidgetModal2 = false"/>
    </div>
</template>

<style lang="scss" scoped>

.no-chat-side{
    // width: 739px;
    height: 700px;
    // overflow-y: scroll;
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
.form-btn{
	background: linear-gradient(92.19deg, #131313 21.83%, #2F2F2F 38.77%, #2F2F2F 55.45%, #131313 72.17%) !important;
}
</style>
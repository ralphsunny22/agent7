<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
    // default: ""
  }
});

const emit = defineEmits(['show-verify-payment'])

const makePaymemt = () => {
  emit('show-verify-payment')
}

</script>

<template>
    <Transition name="modal">
      <div class="modal-mask" @click="$emit('close-modal')">
        <div class="modal-wrapper">
          <div class="modal-container" @click.stop>
            <div class="modal-header">
              
              <div class="modal-text text-dark fw-bold">Subscribe to {{ title }} Plan</div>
              <div class="text-dark fw-bolder modal-close" @click="$emit('close-modal')"><i class="bi bi-x-lg"></i></div>

            </div>
  
            <div class="modal-body">
                <div class="modal-info mb-3">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="pay-duration border border-warning rounded p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <span class="modal-text text-warning">Pay Monthly</span><br>
                            <small class="modal-text" style="font-size: 12px !important;">$20.00/month</small>
                          </div>
                          <div>
                            <div class="form-check">
                              <input class="form-check-input border border-warning bg-warning" type="radio" checked>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="pay-duration border rounded p-2 d-flex justify-content-between align-items-center">
                          <div>
                            <span class="modal-text text-dark">Pay Yearly</span><br>
                            <small class="modal-text" style="font-size: 12px !important;">$20.00/year</small>
                          </div>
                          <div>
                            <div class="form-check">
                              <input class="form-check-input border border-dark bg-light" type="radio" checked>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>

              <div>
                <form action="">
                    
                      <div class="modal-text text-dark">Card Details</div>

                      <div class="card-details border rounded p-2 mb-3">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group mb-3">
                                <label class="modal-text">Cardholder Name (Account Name)</label>
                                <input type="text" class="form-control text-dark fw-bold" value="Martha Kent">
                            </div>
                          </div>

                        <div class="col-md-6">
                          <div class="form-group mb-3">
                              <label class="modal-text">Card Expiry Date</label>
                              <input type="text" class="form-control text-dark fw-bold" value="01 / 26">
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group mb-3">
                              <label class="modal-text">CVV</label>
                              <input type="text" class="form-control text-dark fw-bold" value="001">
                          </div>
                        </div>
                      </div>
                    </div>
                      
                    <div class="form-group mb-3">
                        <label class="modal-text">Checkout</label>
                        <div class="d-flex justify-content-between align-items-center form-control">
                          <div class="modal-text">Amount to pay</div>
                          <div class="modal-text text-dark fw-bold">$20.00</div>
                        </div>
                    </div>
                    
                    <div class="form-group mt-5">
                        <button type="button" class="w-100 p-3 text-white modal-btn rounded" @click="makePaymemt">
                            Subscribe
                        </button>
                    </div>
                    
                </form>
              </div>
            </div>
  
            <div class="modal-footer">
            
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </template>

<style lang="scss" scoped>
%text {
    font-family: var(--brand-font-family);
    font-weight: 600 !important;
    font-size: 14px !important;
    color: rgba(0,0,0,0.7);
}
.modal-close{
    cursor: pointer;
}
.modal-text {
    @extend %text;
}
.modal-btn{
    background: linear-gradient(92.19deg, #131313 21.83%, #2F2F2F 38.77%, #2F2F2F 55.45%, #131313 72.17%) !important;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}


.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>


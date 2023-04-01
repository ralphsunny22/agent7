<script setup></script>

<template>
    <Transition name="modal">
      <div class="modal-mask" @click="$emit('close-modal')">
        <div class="modal-wrapper">
          <div class="modal-container" @click.stop>
            <div class="modal-header">
              
              <div class="modal-text text-dark fw-bold">Subscribe to Premium Plan</div>
              <div class="text-dark fw-bolder modal-close" @click="$emit('close-modal')"><i class="bi bi-x-lg"></i></div>

            </div>
  
            <div class="modal-body">
                <div class="modal-text text-dark fw-bold mb-3">Verify Payment</div>

                <div class="modal-info modal-text mb-3" style="font-size: 12px !important;">
                    Input the 6-digit number we sent to the phone number connected to your card details.
                </div>

              <div>
                <form action="">
                    <div class="border rounded p-3">
                        <div class="modal-text">Input OTP</div>

                        <div class="mb-4">
                            <div class="row">
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <input type="text" class="form-control text-center" value="4" readonly>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <input type="text" class="form-control text-center" value="4" readonly>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <input type="text" class="form-control text-center" value="2" readonly>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <input type="text" class="form-control text-center" value="3" readonly>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <input type="text" class="form-control text-center" value="8" readonly>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <input type="text" class="form-control text-center" value="2" readonly>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div class="d-flex justify-content-between align-items-center">
                            <div class="modal-text" style="font-size: 10px !important;">Resend Code in <span>0.59s</span></div>
                            <div class="modal-text text-primary" style="font-size: 10px !important;">Resend code</div>
                        </div>
                        
                    </div>

                    <div class="form-group mt-5">
                        <button type="button" class="w-100 p-3 rounded text-white modal-btn">
                            Verify Payment
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


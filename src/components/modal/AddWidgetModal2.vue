<script setup></script>

<template>
    <Transition name="modal">
      <div class="modal-mask" @click="$emit('close-modal')">
        <div class="modal-wrapper">
          <div class="modal-container" @click.stop>
            <div class="modal-header">
              
              <div class="modal-text text-dark fw-bold">Add Widget  ----   Website Details</div>
              <div class="text-dark fw-bolder modal-close" @click="$emit('close-modal')"><i class="bi bi-x-lg"></i></div>

            </div>
  
            <div class="modal-body">
                <p class="modal-infp">
                  Add widget to embed live chats on your website for continuous communication between you and your customers or visitors.
                </p>

              <div>
                <form action="">
                    <div class="form-group mb-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <label class="modal-text">Code</label>
                            <div class="p-2 d-flex gap-2 rounded" style="background-color: #fafafa; cursor: pointer;">
                                <span class="text-primary"><i class="bi bi-clipboard-check-fill"></i></span>
                                <small class="text-primary text-small">Copy Code</small>
                            </div>
                        </div>
                        
                        <textarea name="" id="" cols="30" rows="10" class="form-control text-dark fw-bold"><!DOCTYPE html>
                        <html lang="en">
                                <head>
                                    <meta charset="UTF-8">
                                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    <title>Document</title>
                                </head>
                                <body>
                                
                                </body>
                            </html></textarea>
                    </div>
                    
                    <div class="form-group mt-4">
                        <button type="button" class="w-100 p-3 text-white modal-btn rounded">
                            Done, add widget
                        </button>
                    </div>

                    <div class="d-flex gap-3 mt-3">
                        <div><i class="bi bi-info-circle-fill"></i></div>
                        <div>You can always copy the code once you add the widget, in case you cannot add it to your website at the moment.</div>
                    </div>
                    
                </form>
              </div>
            </div>
  
            <div class="modal-footer">
                <button
                  class="modal-default-button"
                  
                ></button>
              
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


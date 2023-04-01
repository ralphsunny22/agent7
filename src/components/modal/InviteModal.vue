<script setup></script>

<template>
    <Transition name="modal">
      <div class="modal-mask" @click="$emit('close-modal')">
        <div class="modal-wrapper">
          <div class="modal-container" @click.stop>
            <div class="modal-header">
              
              <div class="modal-text text-dark fw-bold">Invite Team Member</div>
              <div class="text-dark fw-bolder modal-close" @click="$emit('close-modal')"><i class="bi bi-x-lg"></i></div>

            </div>
  
            <div class="modal-body">
                <p class="modal-infp">
                    Invited team members will receive an invitation to join your workspace as the role you assign them to.
                </p>

              <div>
                <form action="">
                    <div class="form-group mb-3">
                        <label class="modal-text">Fullname</label>
                        <input type="text" class="form-control text-dark fw-bold" value="George Simon">
                    </div>
                    <div class="form-group mb-3">
                        <label class="modal-text">Email address</label>
                        <input type="email" class="form-control text-dark fw-bold" value="gero@email.com">
                    </div>
                    <div class="form-group mb-3">
                        <label class="modal-text">Role</label>
                        <select name="" id="" class="form-control text-dark fw-bold">
                            <option value="superadmin">Super Admin</option>
                        </select>
                    </div>

                    <div class="form-group mt-5">
                        <button type="button" class="w-100 p-3 text-white modal-btn">
                            Send Invitation
                        </button>
                    </div>
                    
                </form>
              </div>
            </div>
  
            <div class="modal-footer">
              <slot name="footer">
                default footer
                <button
                  class="modal-default-button"
                  @click="$emit('close')"
                >OK</button>
              </slot>
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


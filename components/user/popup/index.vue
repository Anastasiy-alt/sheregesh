<script setup>
const props = defineProps([
  'close'
])
const uploadPhoto = ref(false)

const upload = (evt) => {
  evt.preventDefault()
  uploadPhoto.value = true
}

const back = () => {
  uploadPhoto.value = false
}

</script>

<template>
  <div class="popup-overlay"></div>
  <div class="popup" :class="{'popup_upload' : uploadPhoto}">
    <IconPlus class="popup__icon" filled @click="close" v-if="!uploadPhoto"/>
    <IconArrowLine class="popup__icon popup__icon_arrow" filled @click="back" v-if="uploadPhoto"/>
    <UserPopupText :close="close" :upload="upload" v-if="!uploadPhoto"/>
    <UserPopupUpload v-if="uploadPhoto"/>
  </div>
</template>

<style lang="sass">
@import "@/const/mixin"
@import "@/const/color"



.popup__icon_arrow
  transform: rotate(0deg) !important

.popup-overlay
  width: 100%
  height: 100%
  position: fixed
  top: 0
  left: 0
  background: $hover-card
  z-index: 3

.popup__icon
  width: 40px
  height: 40px
  transform: rotate(45deg)
  cursor: pointer
  position: absolute
  top: 24px
  left: 24px

.popup
  padding: 80px 100px
  border-radius: 15px
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08)
  position: fixed
  top: 200px
  left: 50%
  transform: translate(-50%, 0)
  width: 1240px
  box-sizing: border-box
  background: $white
  z-index: 4

.popup::before
  content: ''
  position: absolute
  right: 0
  top: 50px
  width: 359px
  height: 312px
  background-image: url('assets/img/gray-bear.png')
  object-fit: contain
  background-position: center
  background-repeat: no-repeat

.popup_upload::before
  content: none
</style>
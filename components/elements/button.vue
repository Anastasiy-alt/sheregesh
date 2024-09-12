<script setup>
const props = defineProps([
    'text',
    'download'
])
</script>

<template>
<button class="button" :class="{'button_download' : download}">
  <p class="button__text">{{text}}</p>
</button>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.button
  padding: 20px 126px
  margin: 0
  color: $black
  border-radius: 15px
  border: 1px solid $black
  background-color: $white
  width: fit-content
  cursor: pointer
  position: relative
  overflow: hidden
  @include transition

.button__text
  position: relative
  margin: 0
  padding: 0
  @include font-styles(32px, 500, 39px)
  z-index: 2


.button::before
  content: ''
  position: absolute
  bottom: -100%
  left: 0
  width: 100%
  height: 100%
  z-index: 1
  @include transition
  background: linear-gradient(90deg, #02BF89 0%, #9747FF 100%)

.button_download
  background-color: $green
  color: $black
  padding: 14px 40px
  outline-offset: -3px
  outline: 3px solid transparent
  border: none
  .button__text
    @include font-styles(20px, 400, 24px)
.button_download::before
    content: none


@include hover
  .button:hover
    color: $white
  .button:hover::before
    bottom: 0

  .button_download:hover
    outline: 3px solid $green
    color: $green
    background-color: transparent

</style>
<script setup>

const props = defineProps([
  'placeholder',
  'type'
]);
</script>

<template>
  <textarea  class="textarea" placeholder="Описание"></textarea>

</template>

<style lang="sass">
@import "@color"
@import "@mixin"

.textarea
  display: flex
  width: 250px
  padding: 7px 10px
  align-items: flex-start
  border-radius: 10px
  border: 1px solid $gray-dark
  color: $black
  @include font-styles(12px, 400, 15px)
  @include transition

.textarea::placeholder
  color: $gray-dark
  @include font-styles(12px, 400, 15px)

.textarea:focus
  outline: none

.textarea:not(:placeholder-shown)
  border: 1px solid $green
.textarea:active
  background: none


</style>

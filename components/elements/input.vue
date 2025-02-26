<script setup>

const props = defineProps({
  placeholder: String,
  type: String,
  model: Object
});
</script>

<template>
  <input :placeholder="`${placeholder}`" :type="`${type}`" :v-model="model" class="input">
</template>

<style lang="sass">
@import "@color"
@import "@mixin"

.input
  display: flex
  width: 200px
  padding: 10px 17px
  align-items: flex-start
  border-radius: 10px
  border: 1px solid $gray-dark
  color: $black
  @include font-styles(22px, 400, 25px)
  @include transition

.input::placeholder
  color: $gray-dark
  @include font-styles(22px, 400, 25px)

.input:focus
  outline: none

.input:not(:placeholder-shown)
  border: 1px solid $green

.input:active
  background: none


</style>

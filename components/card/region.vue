<script setup>
const props = defineProps([
    'img',
    'text'
])
</script>

<template>
<NuxtLink class="card-reg">
  <img :src="img" :alt="text"
       class="card-reg__img">
  <p class="card-reg__title">{{ text }}</p>
</NuxtLink>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.card-reg
  position: relative
  width: 393px
  height: 290px
  border-radius: 15px
  overflow: hidden
  cursor: pointer

.card-reg::before
  content: ''
  width: 100%
  height: 100%
  position: absolute
  left: 0
  top: 0
  background-color: transparent
  @include transition

.card-reg__img
  width: 100%
  height: 100%
  object-fit: cover

.card-reg__title
  margin: 0
  padding: 0 10px
  width: 100%
  text-align: center
  color: $white
  @include font-styles(32px, 500, 39px)
  position: absolute
  bottom: 22px
  left: 0
  box-sizing: border-box

@include hover
  .card-reg:hover::before
    background-color: $hover-card
</style>
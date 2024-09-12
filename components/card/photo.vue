<script setup>
const props = defineProps([
    'tags',
    'img',
    'vision',
    'id'
])
</script>

<template>
  <NuxtLink class="card-photo" :to="`/photo/${id}`">
    <img :src="img" alt=""
         class="card-photo__img">
    <div class="card-photo__tag-block">
      <ElementsTag v-for="(tag, idx) in tags" :key="idx" :text="tag"/>
    </div>
    <div class="card-photo__visible">
      {{vision}}
      <IconEye class="card-photo__visible-icon" filled />
    </div>
  </NuxtLink>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.card-photo
  width: 393px
  height: auto
  position: relative
  border-radius: 15px
  overflow: hidden
  cursor: pointer
  display: flex

.card-photo::before
  content: ''
  width: 100%
  height: 100%
  position: absolute
  left: 0
  top: 0
  background-color: transparent
  @include transition

.card-photo__tag-block
  display: flex
  flex-direction: row
  gap: 10px
  position: absolute
  top: 8px
  right: 8px

.card-photo__visible
  background-color: $gray
  border-radius: 10px
  padding: 4px 10px
  box-sizing: border-box
  width: fit-content
  display: flex
  flex-direction: row
  gap: 2px
  @include font-styles(16px, 400, 20px)
  color: $black
  align-items: center

.card-photo__visible-icon
  color: $black
  width: 17px
  height: 17px

.card-photo__img
  width: 100%
  height: 100%
  object-fit: cover

.card-photo__visible
  position: absolute
  bottom: 8px
  right: 8px

@include hover
  .card-photo:hover::before
    background-color: $hover-card
</style>
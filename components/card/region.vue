<script setup lang="ts">
interface Tag {
  text: string
  color: string
}

const props = defineProps<{
  img: string,
  text: string,
  tag: Tag,
  link: string
}>()

</script>

<template>
<NuxtLink class="card-reg" :to='`/photobank/${link}`'>
  <img :src="img" :alt="text"
       class="card-reg__img">
  <p class="card-reg__title">{{ text }}</p>
  <div class="card-reg__tag">
    {{tag.text}}
    <div class="card-reg__icon" :style="`background: ${tag.color}`"></div>
  </div>
</NuxtLink>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.card-reg__tag
  padding: 6px 20px
  border-radius: 15px
  background: $white
  position: absolute
  top: 12px
  right: 12px
  @include font-styles(16px, 400, 20px)
  color: $black
  text-decoration: none
  display: flex
  flex-direction: row
  align-items: center
  gap: 10px

.card-reg__icon
  width: 18px
  height: 18px
  border-radius: 100%

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
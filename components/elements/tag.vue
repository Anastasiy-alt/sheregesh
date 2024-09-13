<script setup>
const props = defineProps([
    'text'
])
</script>

<template>
  <NuxtLink to="/photobank" class="tag-link">
    <div class="tag">
      #{{text}}
    </div>
  </NuxtLink>

</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.tag-link
  text-decoration: none

.tag
  background-color: $white
  border-radius: 10px
  padding: 4px 10px
  box-sizing: border-box
  width: fit-content
  @include font-styles(16px, 400, 20px)
  color: $black
  cursor: pointer
  @include transition
  outline: 1px solid transparent
  text-decoration: none

@include hover
  .tag:hover
    outline: 1px solid $green
</style>
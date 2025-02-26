<script lang="ts" setup>
const props = defineProps({
  text: String,
  disable: Boolean,
  link: String
})
</script>

<template>
  <NuxtLink :to="link" class="main-tag-link">
    <div class="main-tag">
      <p class="main-tag__text"><span v-if="!disable">#</span>{{ text }}</p>
    </div>
  </NuxtLink>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"


.main-tag
  border: 1px solid $gray-dark
  border-radius: 15px
  padding: 10px 20px
  @include transition
  width: fit-content
  height: 40px
  box-sizing: border-box

.main-tag-link
  text-decoration: none
  cursor: pointer

.main-tag__text
  margin: 0
  padding: 0
  @include font-styles(16px, 400, 20px)
  color: $black
  text-decoration: none

.main-tag:hover
  background-color: $green
  border: 1px solid $green
</style>
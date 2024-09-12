<script setup>
const form = ref()
const search = ref('')
</script>

<template>
  <form ref="form" method="get" class="search">
    <input ref="formInput"
           v-model="search"
           class="search__input"
           placeholder="Поиск" type="text"/>
    <IconSearch :class="['search__icon', {'search__icon_active' : search.length > 0}]" />
  </form>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.search__input
  padding: 10px 27px 10px 80px
  box-sizing: border-box
  margin: 0
  border-radius: 10px
  border: none !important
  outline: none !important
  background-color: $gray
  width: 100%
  height: 68px
  @include font-styles(20px, 400, 24px)
  color: $black

.search
  position: relative

.search__input::placeholder
  @include font-styles(20px, 400, 24px)
  color: $gray-dark

.search__icon
  width: 47px
  height: 47px
  color: $gray-dark
  position: absolute
  top: 10px
  left: 27px
  cursor: pointer
  @include transition

.search__icon_active
  color: $green !important
</style>
<script setup>
const form = ref()
const search = ref('')
</script>

<template>
  <form ref="form" method="get" class="search">
    <input ref="formInput"
           v-model="search"
           class="search__input"
           placeholder="Поиск по регионам" type="text"/>
    <IconSearch :class="['search__icon', {'search__icon_active' : search.length > 0}]" filled />
  </form>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.search__input
  padding: 6px 17px 6px 60px
  box-sizing: border-box
  margin: 0
  border-radius: 15px
  border: 1px solid $gray-dark
  outline: none !important
  background-color: $gray
  width: 100%
  height: 44px
  @include font-styles(20px, 400, 24px)
  color: $black

.search
  position: relative
  width: 100%

.search__input::placeholder
  @include font-styles(20px, 400, 24px)
  color: $gray-dark

.search__icon
  width: 32px
  height: 32px
  //stroke: $gray-dark
  position: absolute
  top: 6px
  left: 17px
  cursor: pointer
  @include transition

.search__icon_active
  stroke: $green !important
</style>
<script lang="ts" setup>
// const menu = menuStore()
const route = useRoute()
const show = ref<boolean>(false)

onBeforeMount(() => {
  window.addEventListener('scroll', (e) => {
    show.value = window.scrollY > 800;
  })
})
</script>

<template>
  <header :class="[route.path === '/' ? 'main-page' : '', show ? 'show' : '']"
          class="header">
    <div class="icons">
      <NuxtLink to="/">
        <IconLogo class="header__logo" filled/>
      </NuxtLink>
    </div>
    <nav class="header__nav">
      <NuxtLink :class="['header__nav-item', {'header__nav-item_active' : route.path.includes('/photo')}]"
                to="/photobank">
        Фотобанк
      </NuxtLink>
      <NuxtLink :class="['header__nav-item', {'header__nav-item_active' : route.path === '/challenges'}]"
                to="/challenges">
        Челленджи
      </NuxtLink>
      <HeaderLk/>
    </nav>
  </header>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.icons
  display: flex
  flex-direction: row
  align-items: center
  gap: 60px

.header
  @include transition
  display: flex
  flex-direction: row
  justify-content: space-between
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 90px
  background: $white
  z-index: 9
  border-bottom: 1px solid $black
  padding: 20px 100px
  box-sizing: border-box

.header__nav
  display: flex
  flex-direction: row
  gap: 90px
  color: $black
  align-items: center
  height: fit-content

.header__nav-item
  margin: 0
  padding: 0
  color: $black
  @include font-styles(20px, 400, 24px)
  @include transition
  cursor: pointer
  text-decoration: none

.header__logo
  width: 167px
  height: 30px
  cursor: pointer
  margin-top: 10px

.header__nav-item_active
  @include font-styles(20px, 700, 24px)

@include hover
  .header__nav-item:hover
    color: $green
</style>
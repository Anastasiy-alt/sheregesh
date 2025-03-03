<script setup lang="ts">
const route = useRoute()
</script>

<template>
<footer class="footer">
  <NuxtLink to="/">
    <IconLogoWhite class="footer__logo" filled/>
  </NuxtLink>
  <nav class="footer__nav">
    <NuxtLink to="/photobank/all" :class="['footer__nav-link', {'footer__nav-link_active' : route.path.includes('/photo')}]">Фотобанк</NuxtLink>
    <NuxtLink to="/challenges" :class="['footer__nav-link', {'footer__nav-link_active' : route.path.includes('/challenges')}]">Челленджи</NuxtLink>
<!--    <NuxtLink to="/user" class="footer__nav-link">Профиль</NuxtLink>-->
  </nav>
</footer>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.footer
  background-color: $green-dark
  padding: 80px 100px
  box-sizing: border-box
  display: flex
  flex-direction: row
  justify-content: space-between
  margin-top: auto

.footer__nav
  display: flex
  flex-direction: row
  gap: 40px
  align-items: flex-start

.footer__logo
  width: 167px
  height: 30px
  cursor: pointer
  margin-top: 10px

.footer__nav-link
  @include font-styles(20px, 400, 24px)
  color: $white
  text-decoration: none
  @include transition
  border-bottom: 2px solid transparent
  padding-bottom: 5px

.footer__nav-link_active
  border-bottom: 2px solid $white

@include hover
  .footer__nav-link:hover
    border-bottom: 2px solid $white
</style>
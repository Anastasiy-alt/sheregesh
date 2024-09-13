<script setup>

</script>

<template>
<footer class="footer">
  <NuxtLink to="/">
    <IconLogoWhite class="footer__logo" filled/>
  </NuxtLink>
  <nav class="footer__nav">
    <NuxtLink to="/photobank" class="footer__nav-link">Фотобанк</NuxtLink>
    <NuxtLink to="/challenges" class="footer__nav-link">Челленджи</NuxtLink>
    <NuxtLink to="/user" class="footer__nav-link">Профиль</NuxtLink>
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

.footer__nav
  display: flex
  flex-direction: row
  gap: 40px

.footer__logo
  width: 167px
  height: 30px
  cursor: pointer
  margin-top: 10px

.footer__nav-link
  @include font-styles(20px, 400, 24px)
  color: $white
  text-decoration: none
</style>
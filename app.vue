<template>
  <div class="main">
    <NuxtPage />
  </div>
</template>

<style lang="sass">
@import "@font"
@import "@color"
@import "@mixin"

html, body
  flex-direction: column
  width: 100%
  height: 100%
  margin: 0
  padding: 0
  font-family: "Montserrat", serif
  font-size: 30px
  font-weight: 400
  font-style: normal
  line-height: normal
  scroll-behavior: smooth
  overflow-x: hidden

#app
  display: flex
  flex-direction: column
  width: 100%
  height: 100%

.main
  position: relative
  display: flex
  flex-direction: column
  flex: 1
</style>
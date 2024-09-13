<script setup>

</script>

<template>
  <div class="banner">
    <div class="banner__text-block">
      <h1 class="banner__title">Фотосток природы России</h1>
      <p class="banner__subtitle">Тропа в волшебный мир</p>
    </div>
    <IconBannerArrow class="banner__icon" filled/>
  </div>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.banner__title
  max-width: 585px
  margin: 0 0 23px 0
  padding: 0
  @include font-styles(60px, 500, 73px)
  color: $white
  text-align: center

.banner__subtitle
  margin: 0
  padding: 0
  max-width: 600px
  @include font-styles(28px, 500, 34px)
  color: $white
  text-align: center

.banner
  width: calc(100% + 200px)
  height: 604px
  background-image: url('@/assets/img/main-banner.jpg')
  background-repeat: no-repeat
  background-size: cover
  margin-left: -100px
  overflow: hidden
  position: relative

.banner__text-block
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

.banner__icon
  width: 76px
  height: 76px
  color: $white
  position: absolute
  bottom: 40px
  left: 50%
  transform: translate(-50%, 0)
</style>
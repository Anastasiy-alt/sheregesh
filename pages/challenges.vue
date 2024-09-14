<script setup>

</script>

<template>
  <div class="err">
    <div class="err__text-block">
      <p class="err__text-green">404</p>
      <p class="err__main-text">Куда ты, тропа, меня завела?</p>
      <p class="err__subtitle-text">Страница станет доступной после форума «Шерегеш»</p>
      <NuxtLink to="/" class="err__link">
        <ElementsButton :text="'Вернуться на тропу'" :white="true"/>

      </NuxtLink>
    </div>
    <img src="@/assets/img/404.png" class="err__img" alt="">
  </div>

</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.err
  display: flex
  flex-direction: row
  gap: 20px
  align-items: center
  margin: 160px 0 50px
.err__img
  width: 220px
  height: 390px
  margin-top: -160px

.err__link
  text-decoration: none
  margin-top: 20px

.err__text-block
  display: flex
  flex-direction: column
  width: 480px
  text-align: center
  align-items: center

.err__text-green
  @include font-styles(150px, 600, 180px)
  color: $green
  margin: 0
  padding: 0

.err__main-text
  @include font-styles(30px, 600, 36px)
  color: $black
  margin: 0
  padding: 0

.err__subtitle-text
  @include font-styles(25px, 400, 30px)
  color: $black
  margin: 10px 0
  padding: 0

</style>
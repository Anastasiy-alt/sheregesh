<script setup>
const props = defineProps([
  'error'
])
</script>

<template>
  <Header />
  <div class="err err_page" v-if="error.statusCode === 404">
    <div class="err__text-block">
      <p class="err__text-green">404</p>
      <p class="err__main-text">Куда ты, тропа, меня завела?</p>
      <NuxtLink to="/" class="err__link">
        <ElementsButton :text="'Вернуться на тропу'" :white="true"/>
      </NuxtLink>
    </div>
    <img src="@/assets/img/404.png" class="err__img" alt="">
  </div>
  <Footer />
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.err_page
  height: 100%
  margin: auto !important

</style>
<template>
  <Head>
    <Title>ТРОПА - Туристический фотобанк</Title>
  </Head>
  <Header />
  <div class="main">
    <NuxtPage />
  </div>
  <Footer />
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
  font-family: "Montserrat", serif !important
  font-size: 30px
  font-weight: 400
  font-style: normal
  line-height: normal
  scroll-behavior: smooth

#__nuxt
  display: flex
  flex-direction: column
  width: 100%
  height: 100%

.main
  @include borderBox
  @include transition
  position: relative
  display: flex
  flex-direction: column
  flex: 0 0 auto
  padding: 90px 100px 80px
  align-items: center

.nuxt-icon
  vertical-align: baseline !important
  margin-bottom: 0

@include mobile
  .main
    padding: 80px 0 0 0
</style>

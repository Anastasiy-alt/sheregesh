<script setup>
const count = ref(3)
</script>

<template>
  <div class="awards">
    <div class="awards__title-block">
      <p class="awards__title">Достижения</p>
      <div class="awards__count">{{ count }}</div>
    </div>
    <div class="awards__block">
      <div class="awards__item" v-for="(item, idx) in 12">
        <div class="awards__tooltip">
          Это достижение было полученно не легким путем за размещение 10 фотографий на сервисе
        </div>
        <span class="awards__item-count">{{ idx }}</span>
        <IconAward class="awards__item-icon" :class="{ 'awards__item-icon_def' : idx > 5}" filled/>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.awards
  display: flex
  flex-direction: column
  padding: 40px
  gap: 30px
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08)
  border-radius: 20px
  width: 720px
  box-sizing: border-box

.awards__title-block
  display: flex
  flex-direction: row
  justify-content: space-between

.awards__title
  margin: 0
  padding: 0
  color: $black
  @include font-styles(32px, 500, 40px)

.awards__count
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  color: $black
  @include font-styles(20px, 400, 24px)
  padding: 5px 10px
  border-radius: 5px
  background-color: $hover-card

.awards__block
  display: grid
  grid-template-columns: repeat(6, 1fr)
  justify-items: center
  row-gap: 30px
  column-gap: 60px

.awards__item
  display: flex
  flex-direction: column
  position: relative

.awards__tooltip
  position: absolute
  width: 500px
  height: fit-content
  background: $white
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08)
  border-radius: 20px
  border: 3px solid $green
  padding: 10px
  bottom: 0
  transform: translate(0, 110%)
  left: 20px
  display: none
  z-index: 1
  @include font-styles(20px, 400, 24px)

.awards__item-count
  @include font-styles(20px, 400, 24px)
  color: $black
  text-align: center

.awards__item-icon
  width: 54px
  height: 54px

.awards__item-icon_def
  filter: grayscale(1)
  opacity: 0.2

.awards__item:hover .awards__tooltip
  display: flex
</style>
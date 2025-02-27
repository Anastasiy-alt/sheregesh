<script setup lang="ts">
import {RegionDataCard} from '~/data'

const count = ref<number>(6)
const moreButton = () => {
  count.value = count.value + 6
}
</script>

<template>
  <MainBanner/>
  <div class="container">
    <div class="block-search">
      <ElementsSearch/>
      <MainTagSlider/>
    </div>

    <div class="card-block">
      <CardRegion v-for="(item, idx) in RegionDataCard.slice(0, count)" :key="idx" :img="item.img" :link="item.slug"
                  :tag="item.tag" :text="item.text"/>
    </div>
    <ElementsButton v-if="count <= RegionDataCard.length" :text="'Ещё'" class="main-button" @click="moreButton"/>
  </div>
</template>

<style lang="sass">
//*
//  outline: 1px solid darkolivegreen
.block-search
  display: flex
  flex-direction: column
  gap: 20px
  max-width: 100%

.card-block
  display: flex
  flex-direction: row
  flex-wrap: wrap
  gap: 32px
  justify-content: center
  max-width: 1250px

.container
  display: flex
  flex-direction: column
  gap: 60px
  align-items: center
  max-width: 1243px
  margin: 25px auto 0

.main-button
  margin: 0 auto
</style>
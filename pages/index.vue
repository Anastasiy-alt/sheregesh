<script setup>
const reg = [
  {
    img: 'https://images.unsplash.com/photo-1616149524443-c4544d94a08f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Кемеровская область'
  },
  {
    img: 'https://images.unsplash.com/photo-1612525829897-9fd0bf3e1d0b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Москва'
  },
  {
    img: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Республика Алтай'
  },
  {
    img: 'https://images.unsplash.com/photo-1546767894-08ee63a1d4ca?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Ханты-Мансйский автономный округ - Югра'
  },
  {
    img: 'https://images.unsplash.com/photo-1614716520969-dde7f55a241a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Краснодарский край'
  },
  {
    img: 'https://images.unsplash.com/photo-1699933675086-490378021cb2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Калининградская область'
  },
  {
    img: 'https://images.unsplash.com/photo-1660725484308-c6fb4c38b160?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Сахалинская область'
  },
  {
    img: 'https://images.unsplash.com/photo-1565498546237-caee5443b06a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Санкт-Петербург'
  }
]
import {RegionDataCard} from '../data/index.js'

const count = ref(6)
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
    <ElementsButton v-if="count <= reg.length" :text="'Ещё'" class="main-button" @click="moreButton"/>
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
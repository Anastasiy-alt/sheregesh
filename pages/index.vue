<script setup lang="ts">
import {RegionDataCard} from '~/data'
const router = useRouter()
const count = ref<number>(6)
const data = ref(RegionDataCard)
const moreButton = () => {
  count.value = count.value + 6
}

watch(() => router.currentRoute.value.query.q, (value) => {
  count.value = 6
  data.value = RegionDataCard
  if (value) {
    data.value = data.value.filter((item) => item.text.toLowerCase().includes(String(value).toLowerCase()))
  }
});

onMounted(() => {
  if (router.currentRoute.value.query.q) {
    data.value = data.value.filter((item) => item.text.toLowerCase().includes(String(router.currentRoute.value.query.q).toLowerCase()))
  }
})
</script>

<template>
  <MainBanner/>
  <div class="container">
    <div class="block-search">
      <ElementsSearch/>
      <MainTagSlider/>
    </div>
    <div class="card-block">
      <CardRegion v-if="data.length > 0" v-for="(item, idx) in data.slice(0, count)" :key="idx" :img="item.img" :link="item.slug"
                  :tag="item.tag" :text="item.text"/>
      <div class="card-block__not-found" v-else>
        <img class="card-block__not-found-img" src="../assets/img/404.png" alt="">
        <p class="card-block__not-found-text">Упс, такие далёкие тропы ещё никто не исследовал!</p>
        <p class="card-block__not-found-sub-text">Измени запрос, авось повезёт...</p>
      </div>
    </div>

    <ElementsButton v-if="count <= data.length" :text="'Ещё'" class="main-button" @click="moreButton"/>
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
  position: relative

.container
  display: flex
  flex-direction: column
  gap: 60px
  align-items: center
  max-width: 1243px
  margin: 25px auto 0

.main-button
  margin: 0 auto

.card-block__not-found
  display: flex
  flex-direction: column
  align-items: center

.card-block__not-found-text
  font-size: 30px
  font-weight: 600
  line-height: 36px
  color: #3A3A3A
  margin: 0
  padding: 0

.card-block__not-found-img
  height: 300px
  object-fit: contain

.card-block__not-found-sub-text
  font-size: 25px
  font-weight: 400
  line-height: 30px
  color: #3A3A3A
  margin: 10px 0
  padding: 0
</style>
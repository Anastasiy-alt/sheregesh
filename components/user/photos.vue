<script lang="ts" setup>
const props = defineProps<{
  photos: Array<Photo>
}>()

interface Photo {
  id: string
  img: string
}
const tags = ['по просмотрам', 'по лайкам', 'недавно загруженые', 'давно загруженные']

const count = ref<number>(12)
const isOpen = ref<boolean>(false)
const moreButton = () => {
  count.value = count.value + 12
}

const openPopup = () => {
  isOpen.value = true
}
const closePopup = () => {
  isOpen.value = false
}

</script>

<template>
  <UserPopup v-if="isOpen" :close="closePopup"/>
  <div class="photos" v-if="photos">
    <div class="photos__title-block">
      <p class="photos__title">Мои фотографии</p>
      <ElementsButton :plus="true" :text="'Загрузить фотографии'" :white="true" @click="openPopup"/>
    </div>
    <div class="photos__tags">
      <MainTag v-for="(item, idx) in tags" :disable="true" :link="''" :text="item"/>
    </div>
    <div class="photos__photo-block">
      <NuxtLink v-for="(item, idx) in photos.slice(0, count)" :to="`/photo/${item.id}`">
        <img :src="item.img" alt="" class="photos__img">
      </NuxtLink>
    </div>
    <ElementsButton v-if="count < photos.length" :text="'Ещё'" class="photos__button" @click="moreButton"/>
  </div>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.photos
  display: flex
  flex-direction: column
  padding: 40px
  gap: 30px
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08)
  border-radius: 20px
  max-width: 1240px
  width: 100%
  box-sizing: border-box

.photos__title-block
  display: flex
  flex-direction: row
  justify-content: space-between

.photos__title
  margin: 0
  padding: 0
  color: $black
  @include font-styles(32px, 500, 40px)

.photos__tags
  display: flex
  flex-direction: row
  gap: 10px

.photos__photo-block
  display: flex
  flex-direction: row
  flex-wrap: wrap
  gap: 25px

.photos__img
  width: 270px
  height: 270px
  object-fit: cover
  border-radius: 15px

.photos__button
  margin: 0 auto
</style>
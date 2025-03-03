<script lang="ts" setup>
const props = defineProps<{
  photos: Array<Photo>
}>()

interface Photo {
  id: string
  img: string
}

const tags = ['по просмотрам', 'по лайкам', 'недавно загруженые', 'давно загруженные']
const isLoaded = ref<boolean>(false);
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

const onLoad = () => {
  isLoaded.value = true;
};

</script>

<template>
  <UserPopup v-if="isOpen" :close="closePopup"/>
  <div v-if="photos" class="photos">
    <div class="photos__title-block">
      <p class="photos__title">Мои фотографии<br>
      <span>Всего: {{photos.length}}</span>
      </p>
      <ElementsButton :plus="true" :text="'Загрузить фотографии'" :white="true" @click="openPopup"/>
    </div>
    <div class="photos__tags">
      <MainTag v-for="(item, idx) in tags" :link="''" :text="item"/>
    </div>
    <div class="photos__photo-block">
      <NuxtLink v-for="(item, idx) in photos.slice(0, count)" :class="{'photos__img-link_load' : !isLoaded}"
                :to="`/photo/${item.id}`"
                class="photos__img-link">
        <img :src="item.img" alt="" class="photos__img" @load="onLoad">
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
  align-items: flex-start

.photos__title
  margin: 0
  padding: 0
  color: $black
  @include font-styles(32px, 500, 40px)

.photos__title span
  @include font-styles(18px, 500, 18px)

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

.photos__img-link
  position: relative
  width: 270px
  height: 270px
  border-radius: 15px

.photos__img-link::before
  content: ''
  width: 100%
  height: 100%
  position: absolute
  left: 0
  top: 0
  background-color: transparent
  border-radius: 15px
  @include transition

.photos__img-link_load
  background: $green

.photos__img-link_load::after
  position: absolute
  top: 0
  border-radius: 15px
  right: 0
  bottom: 0
  left: 0
  transform: translateX(-100%)
  background-image: linear-gradient(90deg, rgba(#fff, 0) 0, rgba(#fff, 0.2) 20%, rgba(#fff, 0.5) 60%, rgba(#fff, 0))
  animation: shimmer 2s infinite
  content: ''

@include hover
  .photos__img-link:hover::before
    background-color: $hover-card
</style>
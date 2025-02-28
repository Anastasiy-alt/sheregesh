<script lang="ts" setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import {PhotoCards} from '~/data'

const props = defineProps<{
  regionId: string
  photoId: string
}>()

const photos = ref()

function getData(slug: string) {
  photos.value = PhotoCards.filter(e => props.regionId === e.regionId)
      .filter(e => props.photoId !== e.id);
}

getData(props.regionId)
const reg = [
  {
    img: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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

const swiper = ref<object>();
const onSwiper = (instance: object) => {
  swiper.value = instance;
};
</script>

<template>
  <p class="ph-det__title">В том же месте</p>
  <Swiper
      :slides-per-group="1"
      :slidesPerView="'auto'"
      :space-between="20"
      class="ph-det__swiper"
      @swiper="onSwiper">
    <SwiperSlide v-for="(item, idx) in photos" :key="idx" class="ph-det__slide">
      <img :alt="item.text" :src="item.img" class="ph-det__slide-img">
    </SwiperSlide>
  </Swiper>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.ph-det__title
  margin: 0 0 50px 0
  padding: 0
  color: $black
  @include font-styles(32px, 500, 39px)

.ph-det__swiper
  max-width: 90vw
  overflow: hidden

.ph-det__slide
  position: relative
  width: fit-content
  cursor: pointer

.ph-det__slide-img
  width: 288px
  height: 335px
  object-fit: cover
  border-radius: 15px
  overflow: hidden

.ph-det__slide::before
  content: ''
  width: 100%
  height: 100%
  position: absolute
  left: 0
  top: 0
  background-color: transparent
  @include transition

@include hover
  .ph-det__slide:hover::before
    background-color: $hover-gray
</style>
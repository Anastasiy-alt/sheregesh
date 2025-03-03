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
      <NuxtLink :to="`/photo/${item.id}`" class="ph-det__slide-link">
        <img :alt="item.text" :src="item.img" class="ph-det__slide-img">
      </NuxtLink>
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
  max-width: 100%
  overflow: hidden

.ph-det__slide
  position: relative
  width: fit-content
  cursor: pointer
  border-radius: 15px

.ph-det__slide-img
  width: 288px
  height: 335px
  object-fit: cover
  border-radius: 15px
  overflow: hidden

.ph-det__slide-link
  border-radius: 15px
  width: fit-content
  height: fit-content
  display: flex
  background-color: transparent
  @include transition
  position: relative

.ph-det__slide-link::before
  content: ''
  width: 100%
  height: 100%
  position: absolute
  left: 0
  top: 0
  border-radius: 15px
  background-color: transparent
  @include transition

@include hover
  .ph-det__slide:hover .ph-det__slide-link::before
    background-color: $hover-card
</style>
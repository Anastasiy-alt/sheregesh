<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';

const swiper = ref(null);
const onSwiper = (instance) => {
  swiper.value = instance;
};

const tar = ['природа'
  , 'лес'
  , 'море'
  , 'горы'
  , 'птицы'
  , 'животные'
  , 'туман'
  , 'дождь'
  , 'роса'
  , 'цветы'
  , 'дерево']
</script>

<template>
  <div class="swiper-tag">
    <Swiper
        :slidesPerView="'auto'"
        :space-between="20"
        :slides-per-group="1"
        class="swiper-tag__slider"
        @swiper="onSwiper">
      <SwiperSlide v-for="(item, idx) in tar" :key="idx" class="swiper-tag__slide">
        <MainTag :text="item"/>
      </SwiperSlide>
    </Swiper>
    <IconArrow class="next-slider-button swiper-tag__button" @click="swiper.slideNext()" filled/>
    <IconArrow class="prev-slider-button swiper-tag__button" @click="swiper.slidePrev()" filled/>
  </div>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.swiper-tag
  position: relative
  width: 100%

.swiper-tag__button
  width: 22px
  height: 43px
  position: absolute
  top: 0
  color: $gray-dark
  cursor: pointer

.prev-slider-button
  left: -42px
  transform: scale(-1)

.next-slider-button
  right: -42px

.swiper-tag__slider
  max-width: 100%
  overflow: hidden
  position: relative

.swiper-tag__slide
  width: fit-content

</style>
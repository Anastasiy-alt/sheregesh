<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
const swiper = ref(null);
const onSwiper = (instance) => {
  swiper.value = instance;
};
</script>

<template>
  <div class="swiper-tag">


  <Swiper
      :slidesPerView="'auto'"
      :space-between="20"
      :slides-per-group="1"
      class="swiper-tag__slider"
      @swiper="onSwiper">
    <SwiperSlide v-for="(item, idx) in 25" :key="idx" class="swiper-tag__slide">
      <NuxtLink to="/photobank" class="main-tag-link">
        <div class="main-tag">
          <p class="main-tag__text">#лес</p>
        </div>
      </NuxtLink>

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

.main-tag
  border: 1px solid $gray-dark
  border-radius: 15px
  padding: 10px 20px
  @include transition
  width: fit-content
  height: 40px
  box-sizing: border-box

.main-tag-link
  text-decoration: none

.main-tag__text
  margin: 0
  padding: 0
  @include font-styles(16px, 400, 20px)
  color: $black
  text-decoration: none

.swiper-tag__slider
  max-width: 100%
  overflow: hidden
  position: relative

.swiper-tag__slide
  width: fit-content

.main-tag:hover
  background-color: $green
  border: 1px solid $green
</style>
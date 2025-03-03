<script setup lang="ts">
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const props = defineProps<{
  name: string
  old: string
  city: string
  quote: string
  trips: string
  img: string
}>()

onMounted(() => {
  Fancybox.bind('[data-fancybox]');
})
onUnmounted(() => {
  Fancybox.destroy();
})
</script>

<template>
  <div class="info-user">
    <a :data-caption="name" :href="img" data-fancybox>
    <img
        :src="img"
        alt="Аватарка пользователя."
        class="info-user__img"></a>
    <div class="info-user__block">
      <div class="info-user__text">
        <p class="info-user__name">{{name}}</p>
        <p class="info-user__value">{{old}}</p>
      </div>
      <div class="info-user__text">
        <p class="info-user__type">Город</p>
        <p class="info-user__value">{{city}}</p>
      </div>
      <p class="info-user__value"><i>{{quote}}</i></p>
      <p class="info-user__travels">{{trips}}</p>
    </div>

  </div>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"
.info-user
  display: flex
  flex-direction: row
  padding: 20px 15px 20px 20px
  gap: 20px
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08)
  border-radius: 20px
  width: 720px
  box-sizing: border-box

.info-user__img
  width: 200px
  height: 200px
  object-fit: cover
  border-radius: 15px

.info-user__block
  display: flex
  flex-direction: column
  justify-content: space-between

.info-user__name
  margin: 0
  padding: 0
  @include font-styles(20px, 500, 24px)
  color: $black

.info-user__type
  margin: 0
  padding: 0
  @include font-styles(16px, 400, 20px)
  color: $gray-dark

.info-user__value
  margin: 0
  padding: 0
  @include font-styles(16px, 400, 20px)
  color: $black

.info-user__travels
  margin: 0
  padding: 0
  @include font-styles(16px, 400, 20px)
  color: $green

.info-user__text
  display: flex
  flex-direction: column
  gap: 5px
</style>
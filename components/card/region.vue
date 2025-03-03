<script setup lang="ts">
interface Tag {
  text: string
  color: string
}

const props = defineProps<{
  img: string,
  text: string,
  tag: Tag,
  link: string
}>()
const isLoaded = ref<boolean>(false);
const router = useRouter()
const onLoad = () => {
  isLoaded.value = true;
};
watch(() => router.currentRoute.value.query, () => {
  isLoaded.value = false;
});

</script>

<template>
<NuxtLink class="card-reg" :to='`/photobank/${link}`' :class="{'card-reg_load' : !isLoaded}">
  <img :src="img" @load="onLoad" :alt="text"
       class="card-reg__img">
  <p class="card-reg__title">{{ text }}</p>
  <div class="card-reg__tag">
    {{tag.text}}
    <div class="card-reg__icon" :style="`background: ${tag.color}`"></div>
  </div>
</NuxtLink>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.card-reg__tag
  padding: 6px 20px
  border-radius: 15px
  background: $white
  position: absolute
  top: 12px
  right: 12px
  @include font-styles(16px, 400, 20px)
  color: $black
  text-decoration: none
  display: flex
  flex-direction: row
  align-items: center
  gap: 10px

.card-reg__icon
  width: 18px
  height: 18px
  border-radius: 100%

.card-reg
  position: relative
  width: 393px
  height: 290px
  border-radius: 15px
  overflow: hidden
  cursor: pointer

.card-reg::before
  content: ''
  width: 100%
  height: 100%
  position: absolute
  left: 0
  top: 0
  background: linear-gradient(0deg, $green-dark 0%, rgba(255,255,255,0) 50%)
  @include transition

.card-reg__img
  width: 100%
  height: 100%
  object-fit: cover

.card-reg__title
  margin: 0
  padding: 0 10px
  width: 100%
  text-align: center
  color: $white
  @include font-styles(32px, 500, 39px)
  position: absolute
  bottom: 22px
  left: 0
  box-sizing: border-box

.card-reg_load
  background: $green

.card-reg_load::after
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  transform: translateX(-100%)
  background-image: linear-gradient(90deg,rgba(#fff, 0) 0,rgba(#fff, 0.2) 20%,rgba(#fff, 0.5) 60%,rgba(#fff, 0))
  animation: shimmer 2s infinite
  content: ''

@include hover
  .card-reg:hover::before
    background-color: $hover-card
</style>
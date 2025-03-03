<script lang="ts" setup>
interface Tag {
  title: string
  slug: string
}

const props = defineProps<{
  tags: Array<Tag>,
  img: string,
  vision: number,
  id: string
}>()

const isLoaded = ref<boolean>(false);
const onLoad = () => {
  isLoaded.value = true;
};
</script>

<template>
  <NuxtLink :to="`/photo/${id}`" class="card-photo" :class="{'card-photo_load' : !isLoaded}">
    <img @load="onLoad" :src="img" alt=""
         class="card-photo__img">
    <div class="card-photo__tag-block">
      <ElementsTag v-for="(tag, idx) in tags" :key="idx" :link="tag.slug" :text="tag.title"/>
    </div>
    <div class="card-photo__visible">
      {{ vision }}
      <IconEye class="card-photo__visible-icon" filled/>
    </div>
  </NuxtLink>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.card-photo
  width: 393px
  height: auto
  position: relative
  border-radius: 15px
  overflow: hidden
  cursor: pointer
  display: flex

.card-photo::before
  content: ''
  width: 100%
  height: 100%
  position: absolute
  left: 0
  top: 0
  background-color: transparent
  @include transition

.card-photo__tag-block
  display: flex
  flex-direction: row
  gap: 10px
  position: absolute
  top: 8px
  right: 8px

.card-photo__visible
  background-color: $white
  border-radius: 10px
  padding: 4px 10px
  box-sizing: border-box
  width: fit-content
  display: flex
  flex-direction: row
  gap: 2px
  @include font-styles(16px, 400, 20px)
  color: $black
  align-items: center

.card-photo__visible-icon
  color: $black
  width: 17px
  height: 17px

.card-photo__img
  width: 100%
  height: 100%
  object-fit: cover

.card-photo__visible
  position: absolute
  bottom: 8px
  right: 8px

.card-photo_load
  background: $green

.card-photo_load::after
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
  .card-photo:hover::before
    background-color: $hover-card
</style>
<script lang="ts" setup>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import {PhotoCards} from '~/data'

interface Tag {
  title: string
  slug: string
}

interface Author {
  id: string
  name: string
  trips: string
  avatar: string
}

interface Photo {
  id: string
  img: string
  region: string
  regionId: string
  location: string
  description: string,
  tags: Array<Tag>
  views: number
  likes: number
  author: Author
  trip: string
}

const route = useRoute()
const router = useRouter()
const photoData = ref<Photo>()

function getData(slug: string) {
  photoData.value = PhotoCards.find(photo => photo.id.toString() === slug);
  const img = new Image();
  img.src = String(photoData.value?.img);
}

const isLoaded = ref<boolean>(false);
const onLoad = () => {
  isLoaded.value = true;
};

onMounted(() => {
  getData(String(route?.params?.id))
  Fancybox.bind('[data-fancybox]');
})
onUnmounted(()=>{
  Fancybox.destroy();
})
</script>

<template>
  <button class="photobank__button main-info__back-icon" @click="router.back()">
    <IconBackArrow class="photobank__back-icon" filled/>
  </button>
  <div v-if="photoData" class="main-info">
    <div :class="{'main-info__img-load' : !isLoaded}">
      <a :href="photoData.img" data-fancybox :data-caption="`${photoData.region}, ${photoData.location}`">
        <img
            :src="photoData.img"
            alt=""
            @load="onLoad"
            class="main-info__img">

      </a>
    </div>

    <PhotoDetailInfo
        :author="photoData.author"
        :likes="photoData.likes"
        :location="photoData.location"
        :region="photoData.region"
        :tags="photoData.tags"
        :regionId="photoData.regionId"
        :img="photoData.img"
        :trip="photoData.trip"/>
  </div>
  <PhotoDetailSlider v-if="photoData" :regionId="photoData.regionId" :photoId="photoData.id"/>
</template>

<style lang="sass">
@import "@color"
@import "@mixin"

.main-info__back-icon
  width: 41px
  height: 46px
  cursor: pointer
  margin: 40px auto 40px 0

.main-info__img
  width: 500px
  height: min-content
  border-radius: 15px
  object-fit: contain

.main-info
  display: flex
  flex-direction: row
  gap: 30px
  margin-bottom: 100px
  width: 100%

.main-info__img-load
  background: $green
  border-radius: 15px

.main-info__img-load::after
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  transform: translateX(-100%)
  background-image: linear-gradient(90deg,rgba(#fff, 0) 0,rgba(#fff, 0.2) 20%,rgba(#fff, 0.5) 60%,rgba(#fff, 0))
  animation: shimmer 2s infinite
  content: ''

//.main-info_horizontal
//  flex-direction: column
//  justify-content: center
//  .main-info__img
//    width: 100%
</style>
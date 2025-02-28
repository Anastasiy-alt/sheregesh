<script lang="ts" setup>
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
}

const route = useRoute()
const router = useRouter()
const photoData = ref<Photo>()
const vertical = ref<boolean>(true)

function getData(slug: string) {
  photoData.value = PhotoCards.find(photo => photo.id.toString() === slug);
  const img = new Image();
  img.src = String(photoData.value?.img);

  img.onload = function () {
    vertical.value = img.width < img.height
  };
}

onMounted(() => {
  getData(String(route?.params?.id))
})
</script>

<template>
  <button class="photobank__button main-info__back-icon" @click="router.back()">
    <IconBackArrow class="photobank__back-icon" filled/>
  </button>
  <div v-if="photoData" :class="{'main-info_horizontal' : !vertical}" class="main-info">
    <img
        :src="photoData.img"
        alt=""
        class="main-info__img">
    <PhotoDetailInfo
        :author="photoData.author"
        :likes="photoData.likes"
        :location="photoData.location"
        :region="photoData.region"
        :tags="photoData.tags"
        :regionId="photoData.regionId"
        :vertical="vertical"/>
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

.main-info_horizontal
  flex-direction: column
  justify-content: center

  .main-info__img
    width: 100%

</style>
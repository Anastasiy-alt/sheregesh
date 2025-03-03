<script lang="ts" setup>
const props = defineProps<{
  tags: Array<Tag>
  author: Author
  likes: number
  region: string
  location: string
  regionId: string
  trip: string
  img: string
}>()

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

const countLikes = ref<number>(props.likes)
const isLiked = ref<boolean>(false)


const toggleLike = () => {
  isLiked.value = !isLiked.value
  countLikes.value += isLiked.value ? 1 : -1;
}
</script>

<template>
  <div class="info">
    <div v-if="author">
      <NuxtLink :to="`/user/${author.id}`" class="info__user-block">
          <img
              :src="author.avatar"
              alt=""
              class="info__user-img">
        <div class="info__user">
          <p class="info__user-name">{{ author.name }}</p>
          <p class="info__user-travelers">{{ author.trips }}</p>
        </div>
      </NuxtLink>
      <div class="tags">
        <ElementsTag v-for="(tag, idx) in tags" :key="idx" :link="tag.slug" :text="tag.title"/>
      </div>
    </div>
    <div class="info__blocks">
      <div class="info__coordinates">
        <div class="info__coordinates-value-block">
          <p class="info__coordinates-value">Регион:</p>
          <p class="info__coordinates-value">Место:</p>
          <p class="info__coordinates-value">Путешествие:</p>
        </div>
        <div class="info__coordinates-value-block">
          <p class="info__coordinates-value">{{ region }}</p>
          <p class="info__coordinates-value">{{ location }}</p>
          <p class="info__coordinates-value">{{ trip }}</p>
        </div>
      </div>
    </div>
    <PhotoDetailMap :region="regionId"/>
    <div class="info__buttons-block">
      <a :download="`Фотография из региона - ${region}, ${location}`" :href="img" target="_blank">
        <ElementsButton :download="true" :text="'Скачать фото'"/>
      </a>
      <div class="info__like-block">
        <IconLike v-if="isLiked" class="info__like" filled @click="toggleLike"/>
        <IconLikeDef v-if="!isLiked" class="info__like" filled @click="toggleLike"/>
        <p class="info__like-count">{{ countLikes }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"


.info__description__more
  border: none
  padding: 0
  margin: 0
  background: none
  color: $green
  cursor: pointer
  @include font-styles(16px, 400, 20px)

.tags
  display: flex
  flex-direction: row
  gap: 10px

.info__buttons-block
  display: flex
  flex-direction: row
  gap: 60px

.info__like-block
  display: flex
  flex-direction: row
  align-items: center
  gap: 4px

.info__like-count
  margin: 0
  padding: 0
  color: $black
  user-select: none
  @include font-styles(16px, 400, 20px)

.info__like
  width: 40px
  height: 40px
  cursor: pointer
  @include transition

.info__like:active
  transform: scale(0.85)

.info__coordinates-value
  margin: 0
  padding: 0
  color: #717171
  @include font-styles(16px, 400, 20px)

.info__coordinates-value-block
  display: flex
  flex-direction: column
  gap: 10px

.info__coordinates
  display: flex
  flex-direction: row
  gap: 30px
  color: $black
  width: 100%
  border: 1px solid $gray-dark
  padding: 20px 10px
  border-radius: 15px
  background: $white
  height: fit-content
  box-sizing: border-box

.info
  flex: 1
  min-height: min-content
  background-color: $gray
  width: 100%
  border-radius: 15px
  padding: 25px 30px 45px 30px
  box-sizing: border-box
  display: flex
  flex-direction: column
  gap: 30px
  justify-content: space-between
  width: 100%

.info__blocks
  display: flex
  flex-direction: row
  gap: 16px 6px

.info__blocks_vertical
  flex-direction: column

.info__description
  border: 1px solid $gray-dark
  padding: 20px 10px
  border-radius: 15px
  background: $white
  width: 100%
  box-sizing: border-box
  @include transition

.info__description-text
  color: #717171
  margin: 0
  padding: 0
  @include font-styles(16px, 400, 20px)
  @include transition

.info__description-anim
  display: flex
  flex-direction: column
  align-items: flex-start

.info__user-block
  display: flex
  flex-direction: row
  gap: 20px
  margin-bottom: 35px
  text-decoration: none
  width: fit-content

.info__user
  display: flex
  flex-direction: column
  gap: 10px
  justify-content: center

.info__user-img
  width: 76px
  height: 76px
  object-fit: cover
  border-radius: 15px

.info__user-name, .info__user-travelers
  margin: 0
  padding: 0

.info__user-name
  @include font-styles(20px, 500, 24px)
  color: $black

.info__user-travelers
  @include font-styles(20px, 400, 24px)
  color: $green
</style>
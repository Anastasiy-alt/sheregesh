<script lang="ts" setup>
import {PhotoCards, RegionDataCard} from '~/data'

interface Tag {
  title: string
  slug: string
}

interface Photo {
  id: string
  img: string
  tags: Array<Tag>
  views: number
}

const region = ref<{ text: string, slug: string }>()
const photos = ref<Array<Photo>>([]);
const route = useRoute()
const router = useRouter()
const topTags = ref<Array<Tag>>([]);

function getData(slug: string) {
  if (slug === 'all') {
    region.value = {
      text: 'Фотобанк',
      slug: 'all'
    };
    photos.value = PhotoCards
  } else {
    region.value = RegionDataCard.find(reg => reg.slug === slug);
    photos.value = PhotoCards.filter(e => region.value?.slug === e.regionId);
  }

  let tagsArray = <Array<Tag>>[]
  photos.value.forEach(photo => {
    tagsArray = [...tagsArray, ...photo?.tags];
  });
  getTopTagsObjects(tagsArray, 3);
}

const getTopTagsObjects = (tags: Array<Tag>, topCount: number) => {
  const tagCount = <Record<string, number>>{};
  tags.forEach((tag: Tag) => {
    tagCount[tag.title] = (tagCount[tag.title] || 0) + 1;
  });
  topTags.value = Object.entries(tagCount)
      .sort(([, countA], [, countB]) => countB as number - countA as number)
      .slice(0, topCount)
      .map(([title]) => tags.find(tag => tag.title === title)!)
      .filter(Boolean);
};

onMounted(async () => {
  getData(String(route?.params?.id))
});

</script>

<template>
  <div v-if="region" class="photobank">

    <div class="photobank__header">
      <div class="photobank__title-block">
        <button class="photobank__button" @click="router.back()">
          <IconBackArrow class="photobank__back-icon" filled/>
        </button>
        <h1 class="photobank__title">
          {{ region.text }}
        </h1>
      </div>

      <div class="photobank__tags">
        Популярные теги:
        <MainTag v-for="(item, idx) in topTags" :link="item.slug" :text="item.title"/>
      </div>
    </div>
    <masonry-wall v-if="photos" :column-width="300" :gap="16" :items="photos" :scroll-container="null"
                  :ssr-columns="3">
      <template #default="{ item, index }">
        <CardPhoto
            :id="item.id"
            :img="item.img"
            :tags="item.tags"
            :vision="item.views"
            class="image-grid-item"/>
      </template>
    </masonry-wall>
  </div>
</template>

<style lang="sass">
@import "../../const/color"
@import "../../const/mixin"

.photobank__back-icon
  width: 40px
  height: 40px
  cursor: pointer
  fill: transparent

.main-button
  margin: 70px auto 0

.photobank__button
  @include transition
  display: flex
  flex-direction: row
  align-items: center
  @include resetBtn
  border-radius: 5px
  outline: 3px solid transparent

.photobank
  display: flex
  flex-direction: column
  gap: 40px
  position: relative
  width: 1225px
  margin-top: 40px

.photobank__header
  width: 100%
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center

.photobank__title-block
  display: flex
  flex-direction: row
  gap: 20px
  align-items: center

.photobank__tags
  display: flex
  flex-direction: row
  gap: 15px
  @include font-styles(16px, 400, 20px)
  color: $gray-dark
  align-items: center

.photobank__title
  margin: 0
  background: $hover-card
  border-radius: 15px
  padding: 10px 20px
  width: fit-content
  @include font-styles(35px, 400, 40px)

@include hover
  .photobank__button:hover
    outline-color: $hover-card

</style>
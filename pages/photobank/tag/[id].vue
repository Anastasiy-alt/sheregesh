<script lang="ts" setup>
import {PhotoCards, HashtagsData} from '~/data'

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

const activeTag = ref<{ title: string, slug: string }>()
const photos = ref<Array<Photo>>([]);
const route = useRoute()
const router = useRouter()

function getData(slug: string) {
  photos.value = PhotoCards.filter(e => e.tags.some(tag => tag.slug === slug));
  activeTag.value = HashtagsData.find(tag => tag.slug === slug);
}

onMounted(async () => {
  getData(String(route?.params?.id))
});

</script>

<template>
  <div v-if="activeTag" class="photobank">

    <div class="photobank__header">
      <div class="photobank__title-block">
        <IconBackArrow class="photobank__back-icon" filled @click="router.back()"/>
        <h1 class="photobank__title">
          #{{ activeTag.title }}
        </h1>
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
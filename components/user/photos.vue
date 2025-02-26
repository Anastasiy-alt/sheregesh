<script lang="ts" setup>
const tags = ['по просмотрам', 'по лайкам', 'недавно загруженые', 'давно загруженные']

const count = ref<number>(12)
const isOpen = ref<boolean>(false)
const moreButton = () => {
  count.value = count.value + 12
}

const openPopup = () => {
  isOpen.value = true
}
const closePopup = () => {
  isOpen.value = false
}

const bank = [
  {
    img: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['алтай', 'горы', 'лес'],
    vision: 324,
    id: 1
  },
  {
    img: 'https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['алтай', 'природа', 'лес'],
    vision: 32,
    id: 2
  },
  {
    img: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['лето', 'россия', 'лес'],
    vision: 4,
    id: 3
  },
  {
    img: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['горы', 'лес'],
    vision: 1324,
    id: 4
  },
  {
    img: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['лес'],
    vision: 124,
    id: 5
  },
  {
    img: 'https://images.unsplash.com/photo-1441239372925-ac0b51c4c250?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['алтай', 'горы', 'лес'],
    vision: 34,
    id: 6
  },
  {
    img: 'https://images.unsplash.com/photo-1646770923436-4d01cf43f08b?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['алтай', 'горы', 'лес'],
    vision: 324,
    id: 7
  },
  {
    img: 'https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['алтай', 'природа', 'лес'],
    vision: 32,
    id: 8
  },
  {
    img: 'https://images.unsplash.com/photo-1646770923436-4d01cf43f08b?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['горы', 'лес'],
    vision: 1324,
    id: 9
  },
  {
    img: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['лес'],
    vision: 124,
    id: 10
  },
  {
    img: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['алтай', 'горы', 'лес'],
    vision: 324,
    id: 11
  },
  {
    img: 'https://images.unsplash.com/photo-1441239372925-ac0b51c4c250?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['алтай', 'горы', 'лес'],
    vision: 34,
    id: 12
  },
  {
    img: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['алтай', 'горы', 'лес'],
    vision: 324,
    id: 13
  },
  {
    img: 'https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['алтай', 'природа', 'лес'],
    vision: 32,
    id: 14
  },
  {
    img: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['лес'],
    vision: 124,
    id: 15
  },
  {
    img: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['лето', 'россия', 'лес'],
    vision: 4,
    id: 16
  },
  {
    img: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['алтай', 'горы', 'лес'],
    vision: 324,
    id: 10
  },
  {
    img: 'https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['алтай', 'природа', 'лес'],
    vision: 32,
    id: 20
  },
  {
    img: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['лес'],
    vision: 124,
    id: 250
  },
  {
    img: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['лето', 'россия', 'лес'],
    vision: 4,
    id: 30
  },
  {
    img: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['горы', 'лес'],
    vision: 1324,
    id: 40
  },
  {
    img: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['лес'],
    vision: 124,
    id: 50
  },
  {
    img: 'https://images.unsplash.com/photo-1441239372925-ac0b51c4c250?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['алтай', 'горы', 'лес'],
    vision: 34,
    id: 60
  },
  {
    img: 'https://images.unsplash.com/photo-1646770923436-4d01cf43f08b?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['алтай', 'горы', 'лес'],
    vision: 324,
    id: 70
  }
]

</script>

<template>
  <UserPopup v-if="isOpen" :close="closePopup"/>
  <div class="photos">
    <div class="photos__title-block">
      <p class="photos__title">Мои фотографии</p>
      <ElementsButton :plus="true" :text="'Загрузить фотографии'" :white="true" @click="openPopup"/>
    </div>
    <div class="photos__tags">
      <MainTag v-for="(item, idx) in tags" :disable="true" :link="''" :text="item"/>
    </div>
    <div class="photos__photo-block">
      <NuxtLink v-for="(item, idx) in bank.slice(0, count)" to="/photobank">
        <img :src="item.img" alt="" class="photos__img">
      </NuxtLink>
    </div>
    <ElementsButton v-if="count < bank.length" :text="'Ещё'" class="photos__button" @click="moreButton"/>
  </div>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.photos
  display: flex
  flex-direction: column
  padding: 40px
  gap: 30px
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08)
  border-radius: 20px
  max-width: 1240px
  width: 100%
  box-sizing: border-box

.photos__title-block
  display: flex
  flex-direction: row
  justify-content: space-between

.photos__title
  margin: 0
  padding: 0
  color: $black
  @include font-styles(32px, 500, 40px)

.photos__tags
  display: flex
  flex-direction: row
  gap: 10px

.photos__photo-block
  display: flex
  flex-direction: row
  flex-wrap: wrap
  gap: 25px

.photos__img
  width: 270px
  height: 270px
  object-fit: cover
  border-radius: 15px

.photos__button
  margin: 0 auto
</style>
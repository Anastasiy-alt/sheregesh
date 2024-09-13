<script setup>
import Masonry from 'vue-masonry-css';
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
    img: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['лес'],
    vision: 124,
    id: 25
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
  // {
  //   img: 'https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['алтай', 'природа', 'лес'],
  //   vision: 32,
  //   id: 8
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1646770923436-4d01cf43f08b?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['горы', 'лес'],
  //   vision: 1324,
  //   id: 9
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['лес'],
  //   vision: 124,
  //   id: 10
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['алтай', 'горы', 'лес'],
  //   vision: 324,
  //   id: 11
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1441239372925-ac0b51c4c250?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['алтай', 'горы', 'лес'],
  //   vision: 34,
  //   id: 12
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['алтай', 'горы', 'лес'],
  //   vision: 324,
  //   id: 13
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['алтай', 'природа', 'лес'],
  //   vision: 32,
  //   id: 14
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['лес'],
  //   vision: 124,
  //   id: 15
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['лето', 'россия', 'лес'],
  //   vision: 4,
  //   id: 16
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['алтай', 'горы', 'лес'],
  //   vision: 324,
  //   id: 10
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['алтай', 'природа', 'лес'],
  //   vision: 32,
  //   id: 20
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['лес'],
  //   vision: 124,
  //   id: 250
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['лето', 'россия', 'лес'],
  //   vision: 4,
  //   id: 30
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['горы', 'лес'],
  //   vision: 1324,
  //   id: 40
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['лес'],
  //   vision: 124,
  //   id: 50
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1441239372925-ac0b51c4c250?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['алтай', 'горы', 'лес'],
  //   vision: 34,
  //   id: 60
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1646770923436-4d01cf43f08b?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['алтай', 'горы', 'лес'],
  //   vision: 324,
  //   id: 70
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['алтай', 'природа', 'лес'],
  //   vision: 32,
  //   id: 80
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1646770923436-4d01cf43f08b?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['горы', 'лес'],
  //   vision: 1324,
  //   id: 90
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['лес'],
  //   vision: 124,
  //   id: 100
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['алтай', 'горы', 'лес'],
  //   vision: 324,
  //   id: 110
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1441239372925-ac0b51c4c250?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['алтай', 'горы', 'лес'],
  //   vision: 34,
  //   id: 120
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['алтай', 'горы', 'лес'],
  //   vision: 324,
  //   id: 130
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['алтай', 'природа', 'лес'],
  //   vision: 32,
  //   id: 140
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['лес'],
  //   vision: 124,
  //   id: 150
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tags: ['лето', 'россия', 'лес'],
  //   vision: 4,
  //   id: 160
  // }
]
const tags = ['природа', 'лес', 'деревья', 'горы', 'реки']
const count = ref(10)

const moreButton = () => {
  count.value = count.value + 10
}
const array = ref(bank)
const containerRef = ref(null);
const x = () => {
  array.value = [...array.value, ...bank]
}

const scrollContainer = ref(null)
onMounted(() => {

});

</script>

<template>
<!--  <masonry-wall :items="array" :ssr-columns="3" :column-width="300" :gap="16"-->
<!--                :scroll-container="null">-->
<!--    <template #default="{ item, index }">-->
<!--            <CardPhoto-->
<!--                       :tags="item.tags"-->
<!--                       :img="item.img"-->
<!--                       :vision="item.id"-->
<!--                       :id="item.id"-->
<!--                       class="image-grid-item"/>-->
<!--      {{item.id}}-->
<!--    </template>-->
<!--  </masonry-wall>-->
<!--      <ElementsButton class="main-button" :text="'Ещё'" @click="x"/>-->

  <!--  <Masonry-->
  <!--      :cols="{ default: 4, 1100: 3, 700: 2, 500: 1 }" gutter="30px">-->
  <!--    <CardPhoto v-for="(item, idx) in bank"-->
  <!--               :tags="item.tags"-->
  <!--               :img="item.img"-->
  <!--               :vision="item.vision"-->
  <!--               :id="item.id"-->
  <!--               class="image-grid-item"/>-->
  <!--  </Masonry>-->

  <div class="photobank">
    <div class="photobank__title-block">
      <div class="photobank__title">
        Республика Алтай
      </div>
      <div class="photobank__tags">
        Популярные теги:
        <MainTag :text="item" v-for="(item, idx) in tags" />
      </div>
    </div>

    <div class="container-p" ref="containerRef">
      <CardPhoto v-for="(item, idx) in bank.slice(0, count)"
                 :tags="item.tags"
                 :img="item.img"
                 :vision="item.id"
                 :id="item.id"
                 class="item"/>
    </div>
    <ElementsButton class="main-button item" :text="'Ещё'" @click="moreButton" v-if="count <= bank.length"/>
  </div>


  <!--    <div class="photobank">-->
  <!--      <div class="photobank__title">-->
  <!--        Республика Алтай-->
  <!--      </div>-->
  <!--    <div class="div-e">-->
  <!--      <CardPhoto v-for="(item, idx) in bank.slice(0, count)"-->
  <!--                 :tags="item.tags"-->
  <!--                 :img="item.img"-->
  <!--                 :vision="item.id"-->
  <!--                 :id="item.id"-->
  <!--                 class="img-e"/>-->
  <!--    </div>-->
  <!--    <ElementsButton class="main-button" :text="'Ещё'" @click="moreButton" v-if="count <= bank.length"/>-->
  <!--  </div>-->


</template>

<style lang="sass">
@import "@color"
@import "@mixin"

.container-p
  display: flex
  flex-wrap: wrap
  flex-direction: column
  gap: 10px
  height: fit-content
  align-items: center
  align-content: center
  position: relative

.item:nth-child(3n + 1)
  order: 1

.item:nth-child(3n + 2)
  order: 2

.item:nth-child(3n)
  order: 3

.container-p::before,
.container-p::after
  content: ""
  flex-basis: 100%
  width: 0
  order: 2

.main-button
  margin: 0 auto

.photobank
  display: flex
  flex-direction: column
  gap: 50px
  position: relative
  width: 1225px
  margin-top: 80px

.photobank__title-block
  width: 100%
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center

.photobank__tags
  display: flex
  flex-direction: row
  gap: 15px
  @include font-styles(16px, 400, 20px)
  color: $gray-dark
  align-items: center

.div-e
  column-count: 4
  column-width: 200px
//padding: 20px

.img-e
  width: 100%
  max-width: 100%
  margin-bottom: 30px

.photobank__title
  border: 1px solid $black
  background: rgba(2, 191, 137, 0.4)
  border-radius: 15px
  padding: 10px 20px
  width: fit-content
//margin: 40px auto 0 0

//.image-grid
//  display: block
//  width: 100%
//
//.image-grid-item
//  display: block
//  width: 100%
//  margin-bottom: 16px

//.image-grid
//  display: grid
//  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
//  gap: 16px

</style>
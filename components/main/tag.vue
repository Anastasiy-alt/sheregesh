<script lang="ts" setup>
const props = defineProps<{
  text: string
  link: string
  color?: string
}>()

const router = useRouter()

function setTag(evt: MouseEvent) {
  const target = evt.target as HTMLInputElement;
  let query = String(router.currentRoute.value.query.tag || '')
  let querySearch = router.currentRoute.value.query.q
  let arr = query.split(",").filter((item) => item !== '');
  if (query?.includes(target.id)) {
    arr = arr.filter((item) => item !== target.id)
    query = arr.join()
  } else {
    arr.push(target.id)
    query = arr.join()
  }
  if (querySearch) {
    router.push({
      query: {q: querySearch, tag: query}
    })
  } else {
    if (query) {
      router.push({
        query: {tag: query}
      })
    } else {
      router.push({})
    }
  }
}
</script>

<template>
  <input :id="link"
         :checked="router.currentRoute.value.query.tag?.includes(link)"
         class="main-tag-link__input"
         name="tag"
         type="checkbox"
         @click="setTag"/>
  <label :for="link" class="main-tag-link__label main-tag-link">
    {{ text }}
    <span v-if="color" :style="`background: ${color}`" class="main-tag-link__icon"></span>
  </label>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.main-tag-link__input
  position: absolute
  width: 1px
  height: 1px
  overflow: hidden
  clip-path: inset(0 0 0 0)

.main-tag
  border: 1px solid $gray-dark
  border-radius: 15px
  padding: 10px 20px
  @include transition
  width: fit-content
  height: 40px
  box-sizing: border-box

.main-tag-link
  text-decoration: none
  cursor: pointer
  padding: 10px 20px
  border-radius: 15px
  background: $white
  @include font-styles(20px, 400, 24px)
  color: $black
  display: flex
  flex-direction: row
  align-items: center
  gap: 10px
  border: 2px solid $gray-dark
  @include transition
  user-select: none

.main-tag-link__icon
  width: 18px
  height: 18px
  border-radius: 100%

.main-tag-link:hover
  //background-color: $green
  border: 2px solid $green
  //color: white

  .main-tag-link__icon
    outline: 3px solid #FFF

.main-tag-link__input:checked + .main-tag-link__label
  background-color: $green
  border: 2px solid $green
  color: white

  .main-tag-link__icon
    outline: 3px solid #FFF
</style>
<script lang="ts" setup>
const form = ref<object>()
const search = ref<string>('')
const router = useRouter()

function formSubmit(evt: Event) {
  evt.preventDefault()
  router.push({
    query: {q: search.value}
  })
}

onMounted(() => {
  search.value = String(router.currentRoute.value.query.q || '')
})
</script>

<template>
  <form ref="form" class="search" method="get" @submit="formSubmit">
    <input ref="formInput"
           v-model="search"
           class="search__input"
           placeholder="Поиск по регионам" type="text"/>
    <IconSearch :class="['search__icon', {'search__icon_active' : search.length > 0}]" filled/>
  </form>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.search__input
  padding: 10px 10px 10px 60px
  box-sizing: border-box
  margin: 0
  border-radius: 15px
  border: 1px solid $gray-dark
  outline: none !important
  background-color: $gray
  width: 100%
  height: 60px
  @include font-styles(20px, 400, 24px)
  color: $black
  @include transition

.search
  position: relative
  width: 100%

.search__input::placeholder
  @include font-styles(20px, 400, 24px)
  color: $gray-dark

.search__icon
  width: 32px
  height: 32px
  //stroke: $gray-dark
  position: absolute
  top: 50%
  left: 17px
  transform: translate(0, -50%)
  cursor: pointer
  @include transition
.search__input:focus
  border-color: $green !important
.search__input:focus + .search__icon_active path
  stroke: $green !important
</style>
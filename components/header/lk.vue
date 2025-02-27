<script lang="ts" setup>
import {UserData} from '~/data'

interface User {
  name: string
  avatar: string
  id: string
}

const user = ref()
const route = useRoute()

function getData(id: string) {
  console.log(id)
  user.value = UserData.find(user => user.id === id);
}

getData(String(Math.floor(Math.random() * 4) + 1))

</script>

<template>
  <NuxtLink v-if="user" :to="`/user/${user.id}`" class="header-lk">
    <p class="header-lk__name">{{ user.name }}</p>
    <img
        :src="user.avatar"
        alt="Аватарка пользователя."
        class="header-lk__img">
  </NuxtLink>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.header-lk
  display: flex
  flex-direction: row
  gap: 13px
  cursor: pointer
  text-decoration: none

.header-lk__name
  margin: 13px 0
  padding: 0
  @include font-styles(20px, 400, 24px)
  color: $black
  @include transition
  text-decoration: none


.header-lk__img
  width: 50px
  height: 50px
  border-radius: 15px
  object-fit: cover

@include hover
  .header-lk:hover .header-lk__name
    color: $green

</style>
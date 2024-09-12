<script setup>

</script>

<template>
<NuxtLink to="/user" class="header-lk">
  <p class="header-lk__name">Марина</p>
  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Аватарка пользователя." class="header-lk__img">
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


.header-lk__img
  width: 50px
  height: 50px
  border-radius: 15px
  object-fit: cover

@include hover
  .header-lk:hover .header-lk__name
    color: $green

</style>
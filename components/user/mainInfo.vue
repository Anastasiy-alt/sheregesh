<script setup>

</script>

<template>
  <div class="info-user">
    <img
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Аватарка пользователя."
        class="info-user__img">
    <div class="info-user__block">
      <div class="info-user__text">
        <p class="info-user__name">Мария Баринова</p>
        <p class="info-user__value">21 год</p>
      </div>
      <div class="info-user__text">
        <p class="info-user__type">Образование</p>
        <p class="info-user__value">Южно-Уральский Государственный Университет</p>
      </div>
      <div class="info-user__text">
        <p class="info-user__type">Город</p>
        <p class="info-user__value">Челябинск</p>
      </div>
      <p class="info-user__travels">15 поездок</p>
    </div>

  </div>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"
.info-user
  display: flex
  flex-direction: row
  padding: 20px 15px 20px 20px
  gap: 20px
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08)
  border-radius: 20px
  width: 720px
  box-sizing: border-box

.info-user__img
  width: 200px
  height: 200px
  object-fit: cover
  border-radius: 15px

.info-user__block
  display: flex
  flex-direction: column
  justify-content: space-between

.info-user__name
  margin: 0
  padding: 0
  @include font-styles(20px, 500, 24px)
  color: $black

.info-user__type
  margin: 0
  padding: 0
  @include font-styles(16px, 400, 20px)
  color: $gray-dark

.info-user__value
  margin: 0
  padding: 0
  @include font-styles(16px, 400, 20px)
  color: $black

.info-user__travels
  margin: 0
  padding: 0
  @include font-styles(16px, 400, 20px)
  color: $green

.info-user__text
  display: flex
  flex-direction: column
  gap: 5px
</style>
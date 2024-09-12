<script setup>

</script>

<template>
  <div class="info">
    <div class="info__user-block">
      <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          class="info__user-img">
      <div class="info__user">
        <p class="info__user-name">Марина Баринова</p>
        <p class="info__user-travelers">5 поездок</p>
      </div>
    </div>
    <p class="info__description">
      В этом медвежем лесу водятся красивые медведи: и белые, и черные, и черно-белые. Вобщем стоит посетить этот лес, вас точно съедят!
    </p>
    <div class="info__coordinates">
      <div class="info__coordinates-value-block">
        <p class="info__coordinates-value">Регион:</p>
        <p class="info__coordinates-value">Место:</p>
        <p class="info__coordinates-value">Координаты:</p>
      </div>
      <div class="info__coordinates-value-block">
        <p class="info__coordinates-value">Республика Алтай</p>
        <p class="info__coordinates-value">Медвежий лес</p>
        <p class="info__coordinates-value">54.448441, 82.219722</p>
      </div>
    </div>
    <div class="info__buttons-block">
      <ElementsButton :text="'Скачать'" :download="true" />
      <div class="info__like-block">
        <IconLike class="info__like" filled />
<p class="info__like-count">21</p>
      </div>
<!--      <IconLike class="info__like" filled />-->

    </div>
  </div>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.info__buttons-block
  display: flex
  flex-direction: row
  gap: 40px

.info__like-block
  display: flex
  flex-direction: row
  align-items: center
  gap: 4px

.info__like-count
  margin: 0
  padding: 0
  color: $black
  @include font-styles(16px, 400, 20px)

.info__like
  color: green
  width: 40px
  height: 40px
  cursor: pointer


.info__coordinates-value
  margin: 0
  padding: 0
  @include font-styles(20px, 400, 24px)

.info__coordinates-value-block
  display: flex
  flex-direction: column
  gap: 20px

.info__coordinates
  display: flex
  flex-direction: row
  gap: 30px
  color: $black

.info
  background-color: $gray
  width: 480px
  border-radius: 15px
  padding: 25px 40px
  box-sizing: border-box
  display: flex
  flex-direction: column
  justify-content: space-between

.info__description
  color: #717171
  margin: 0
  padding: 0
  @include font-styles(16px, 400, 20px)

.info__user-block
  display: flex
  flex-direction: row
  gap: 20px
  margin-bottom: 35px

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
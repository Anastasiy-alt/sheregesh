<script setup>
const props = defineProps([
  'close',
  'upload'
])



const checkboxChecked = ref(false)


</script>

<template>
  <p class="popup__title">Привет, Мария!</p>
  <div class="popup__text-block">
    <p class="popup__text">Мы рады, что вы стали участником(цей) программы «Больше чем Путешествие»!</p>
    <p class="popup__text">Чтобы удачно загрузить фотографию на ТРОПУ, пожалуйста убедитесь, что ваша фотография
      отвечает <span class="link">требованиям подачи фотографий.</span></p>
    <p class="popup__text"><span class="green">Примечание:</span> каждое изображение на ТРОПЕ публикуется по лицензии
      ТРОПЫ, которая позволяет людям использовать изображения из нашего фотостока бесплатно, в том числе в
      коммерческих целях, без указания автора на ресурсе. </p>
    <p class="popup__text link">Ознакомиться с лицензионным соглашением</p>
  </div>
  <form class="popup__form">
    <label :class="{ 'label-cian': checkboxChecked }" class="checkbox__label">
      <input v-model="checkboxChecked" class="checkbox__invisible" type="checkbox"/>
      <span class="checkbox__visible"></span>
      Я ознакомлен(а) и согласен(на)
    </label>
    <ElementsButton :text="'Перейти к загрузке'" :disable="!checkboxChecked" :white="true" @click="upload"/>
  </form>
</template>

<style lang="sass">
@import "@/const/mixin"
@import "@/const/color"

.popup__form
  display: flex
  flex-direction: row
  gap: 60px
  align-items: center
  margin: 30px 0 0 auto
  width: fit-content

.popup__title, .popup__text
  margin: 0
  padding: 0
  color: $black

.popup__title
  @include font-styles(32px, 500, 39px)
  margin-bottom: 30px

.popup__text
  @include font-styles(20px, 400, 24px)

.link
  color: $green
  text-decoration: underline

.popup__text-block
  display: flex
  flex-direction: column
  gap: 15px
  max-width: 850px

.checkbox__invisible
  position: absolute
  width: 1px
  height: 1px
  overflow: hidden
  display: none
  clip-path: inset(0 0 0 0)
  margin: 0
  opacity: 0

.checkbox__visible
  display: flex
  width: 18px
  height: 18px
  min-width: 18px
  min-height: 18px
  outline: 1px solid $gray-dark
  border-radius: 2px
  background-image: url("/assets/icons/checkbox.svg")
  background-position: center
  background-size: 0
  background-repeat: no-repeat
  cursor: pointer
  @include transition

.checkbox__invisible:checked + .checkbox__visible
  outline: 1px solid $green
  background-size: 100%

.checkbox__label
  display: flex
  flex-direction: row
  align-items: center
  gap: 10px
  @include font-styles(16px, 400, 20px)
  color: $black
  cursor: pointer
  width: fit-content
  @include transition
</style>
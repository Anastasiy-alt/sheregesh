<script setup>

</script>

<template>

  <div class="user">
    <UserMainInfo />
    <UserAwards />
  </div>
  <UserPhotos />
</template>

<style lang="sass">
.user
  margin: 40px 0 90px
  position: relative
  width: 1240px
  display: flex
  flex-direction: column
  gap: 40px

.user::before
  content: ''
  position: absolute
  top: 150px
  right: -100px
  height: 490px
  width: 470px
  transform: scale(-1, 1)
  opacity: 0.5
  background-size: contain
  background-image: url('@/assets/img/bear.png')
  background-repeat: no-repeat
</style>
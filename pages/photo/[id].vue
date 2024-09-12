<script setup>

</script>

<template>
  <div class="main-info">
    <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         alt="" class="main-info__img">
<PhotoDetailInfo />
  </div>
  <PhotoDetailSlider />
</template>

<style lang="sass">
.main-info__img
  width: 500px
  height: auto
  border-radius: 15px

.main-info
  display: flex
  flex-direction: row
  gap: 30px
  margin-bottom: 100px

</style>
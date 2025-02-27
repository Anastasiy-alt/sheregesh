<script lang="ts" setup>
import {UserData} from '~/data'

interface User {
  awards: Array<Award>
  photos: Array<Photo>
  name: string
  old: string
  city: string
  quote: string
  trips: string
  avatar: string
}

interface Award {
  text: string
  icon: string
}

interface Photo {
  id: string
  img: string
}

const user = ref<User>()
const route = useRoute()

function getData(id: string) {
  user.value = UserData.find(user => user.id === id);
}

onMounted(() => {
  getData(String(route?.params?.id))
})

</script>

<template>

  <div v-if="user" class="user">
    <UserMainInfo
        :city="user.city"
        :img="user.avatar"
        :name="user.name"
        :old="user.old"
        :quote="user.quote"
        :trips="user.trips"/>
    <UserAwards :awards="user.awards"/>
  </div>
  <UserPhotos v-if="user" :photos="user.photos"/>
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
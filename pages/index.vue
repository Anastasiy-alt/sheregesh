<script setup>
const reg = [
  {
    img: 'https://downloader.disk.yandex.ru/preview/ba049f20d2dcc754b46b2233d1abb04e6aa9379304d95e8a25cc42584d5320f2/66e55ef4/e83uJ1Q9zbHaoCRGdyA-Vj4QVL8fx4YUtZTcvoiiNIRLvixYxCTnk8VY4tQkT0poTiCnjAfx3MIrrxLMw39tNg%3D%3D?uid=0&filename=1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
    text: 'Кемеровская область'
  },
  {
    img: 'https://images.unsplash.com/photo-1612525829897-9fd0bf3e1d0b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Москва'
  },
  {
    img: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Республика Алтай'
  },
  {
    img: 'https://images.unsplash.com/photo-1546767894-08ee63a1d4ca?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Ханты-Мансйский автономный округ - Югра'
  },
  {
    img: 'https://images.unsplash.com/photo-1614716520969-dde7f55a241a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Краснодарский край'
  },
  {
    img: 'https://images.unsplash.com/photo-1699933675086-490378021cb2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Калининградская область'
  },
  {
    img: 'https://images.unsplash.com/photo-1660725484308-c6fb4c38b160?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Сахалинская область'
  },
  {
    img: 'https://images.unsplash.com/photo-1565498546237-caee5443b06a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Санкт-Петербург'
  }
]


const count = ref(6)
const moreButton = () => {
  count.value = count.value + 6
}

const photos = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('https://mtt.shameoff.ru/api/photos');
    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    photos.value = data;
    console.log(photos.value)
    // Предполагается, что API возвращает массив объектов
  } catch (error) {
    console.error('Error fetching photos:', error);
  }
});


const type = [
  {
    type: 'pop',
    text: 'Популярное'
  },
  {
    type: 'like',
    text: '500'
  },
  {
    type: 'bus',
    text: '10 маршрутов'
  },  {
    type: 'bus',
    text: '7 маршрутов'
  },
  {
    type: 'like',
    text: '200'
  },
  {
    type: 'pop',
    text: 'Популярное'
  },  {
    type: 'bus',
    text: '15 маршрутов'
  },
  {
    type: 'pop',
    text: 'Популярное'
  },
]
</script>

<template>
  <MainBanner/>
  <div class="container">
    <div class="block-search">
      <ElementsSearch/>
      <MainTagSlider />
    </div>

    <div class="card-block">
      <CardRegion v-for="(item, idx) in reg.slice(0, count)" :key="idx" :img="item.img" :text="item.text" :tag="type[idx]"/>
    </div>
    <ElementsButton class="main-button" :text="'Ещё'" @click="moreButton" v-if="count <= reg.length"/>
  </div>
</template>

<style lang="sass">
//*
//  outline: 1px solid darkolivegreen
.block-search
  display: flex
  flex-direction: column
  gap: 20px
  max-width: 100%
.card-block
  display: flex
  flex-direction: row
  flex-wrap: wrap
  gap: 32px
  justify-content: center
  max-width: 1250px

.container
  display: flex
  flex-direction: column
  gap: 60px
  align-items: center
  max-width: 1243px
  margin: 25px auto 0

.main-button
  margin: 0 auto
</style>
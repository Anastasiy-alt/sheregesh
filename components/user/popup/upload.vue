<script setup>
const props = defineProps([
    'close',
    'submitImages',
    'sucsessSubmit'
])
const images = ref([]);
const fileInput = ref(null);
const maxImages = 3;
const maxSize = 5 * 1024 * 1024; // Максимальный размер файла 5MB

const onFileChange = (event) => {
  const files = event.target.files;
  handleFiles(files);
};

const selectFiles = () => {
  fileInput.value.click();
};

const onDrop = (event) => {
  const files = event.dataTransfer.files;
  handleFiles(files);
};

const handleFiles = (files) => {
  for (let file of files) {
    if (images.value.length >= maxImages) {
      alert(`Вы можете загрузить только ${maxImages} фотографий.`);
      return; // Прекращаем добавление, если достигнут лимит
    }

    if (file.size > maxSize) {
      alert(`Файл ${file.name} слишком велик.`);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      images.value.push({
        url: e.target.result,
        description: ''
      });
    };
    reader.readAsDataURL(file);
  }
};


const trip = ref('')
const region = ref('')
const place = ref('')
const formData = ref({
  trip: '',
  region: '',
  place: '',
});

const isFormValid = computed(() => {
  return trip.value.trim() !== '' && region.value.trim() !== '' && place.value.trim() !== '';
});


const check = ref(false)
const checkInputs = () => {
  const {trip, region, place} = formData.value;
  check.value = !!(trip && region && place);
};

watch(() => [formData.value.trip, formData.value.region, formData.value.place], () => {
  console.log(94)
})


</script>

<template>
  <div class="upload-area" @dragover.prevent @drop.prevent="onDrop">
    <div v-if="!images.length" class="upload__block">
      <img src="@/assets/img/purple-bear.png" alt="" class="upload__img">
      <p class="upload__title">Загрузить фотографию </p>
      <p class="upload__subtitle">Перетащите сюда до 3 фотографий или
        <span class="link" @click="selectFiles">загрузите</span> их с компьютера</p>
      <p class="upload__subsubtitle">JPEG до 20 Мб</p>
      <input
          type="file"
          @change="onFileChange"
          accept="image/*"
          multiple
          hidden
          ref="fileInput"
      />
      <ul class="upload__parameters">
        <li class="upload__par">Недопустимы темные пятна и пересветы</li>
        <li class="upload__par">При 100% увеличении не должно быть заметного цифрового шума, зерна и артефактов сжатия</li>
        <li class="upload__par">На фотографиях не должно быть хроматических аберраций, следов от пыли и прочих загрязнений </li>
        <li class="upload__par">Соответствие <span class="link">условиям ТРОПЫ</span></li>
        <li class="upload__par">Не должно быть никаких дат, подписей, копирайтов, рамочек, бордюров</li>
        <li class="upload__par">Фотографии должны иметь правильную ориентацию по вертикали/горизонтали</li>
      </ul>

      <ElementsButton class="upload__button"
                      :text="'Отправить на ТРОПУ'"
                      :disable="!check"
                      :white="true"
                      @click="submitImages"/>
      <!--      <button type="button" @click="selectFiles">Выбрать файлы</button>-->
    </div>
    <div v-else-if="!sucsessSubmit" class="images-preview">
      <p class="upload__title">Почти конец!</p>
      <div v-for="(image, index) in images" :key="index" class="image-container">
        <img :src="image.url" alt="Uploaded Image" class="upload__image"/>
        <form class="upload__input-block" @submit.prevent="checkInputs">
          <ElementsInput :model="trip" :type="'text'" :placeholder="'Путешествие'"/>
          <ElementsInput :model="region" :type="'text'" :placeholder="'Регион'"/>
          <ElementsInput :model="place" :type="'text'" :placeholder="'Место'"/>
          <ElementsButton class="up_bu"
                          type="submit"
                          :text="'Отправить на ТРОПУ'"
                          :white="true"
                          @click="submitImages"/>
        </form>
      </div>
    </div>

    <div class="finish" v-if="sucsessSubmit">
      <img src="@/assets/img/green-bear.png" alt="" class="finish__img">
      <p class="finish__text">Фотографии успешно отправлены на модерацию!</p>
        <ElementsButton :text="'Вернуться в профиль'" :white="true" @click="close" />
    </div>

  </div>
</template>

<style lang="sass">
@import "@/const/mixin"
@import "@/const/color"

.finish__link
  text-decoration: none

.up_bu
  margin-left: auto
.finish
  display: flex
  flex-direction: column
  align-items: center

.finish__img
  width: 257px
  height: 246px

.finish__text
  margin: 0 0 27px 0
  padding: 0
  @include font-styles(28px, 500, 34px)
  width: 400px
  text-align: center

.upload__image
  width: 292px
  height: 349px
  border-radius: 15px
  object-fit: cover
  border: 1px solid $black

.upload__input-block
  display: flex
  flex-direction: row
  gap: 15px
  width: 100%

.upload__button
  position: absolute
  bottom: 24px
  right: 24px

.upload__parameters
  display: flex
  flex-direction: column
  flex-wrap: wrap
  color: $gray-dark
  @include font-styles(14px, 400, 17px)
  max-height: 105px
  gap: 10px
  margin-top: 40px
  width: 100%
  padding-bottom: 80px
  align-items: center

.upload__par
  width: 400px
  text-align: left

.upload__img
  width: 114px
  height: 118px

.link
  color: $green
  text-decoration: underline
  cursor: pointer

.upload__title
  margin: 0
  padding: 0
  @include font-styles(28px, 500, 34px)

.upload__subtitle
  margin: 0
  padding: 0
  width: 391px
  @include font-styles(20px, 400, 28px)

.upload__subsubtitle
  margin: 0
  padding: 0
  color: $gray-dark
  @include font-styles(16px, 400, 20px)

.upload-area
  //border: 2px dashed #ccc
  text-align: center

.upload__block
  display: flex
  flex-direction: column
  gap: 12px
  align-items: center
  margin: 0 auto

.images-preview
  display: flex
  flex-direction: column

.image-container
  display: flex
  flex-direction: column
  justify-content: center
  gap: 30px
  margin-top: 20px
  align-items: center

textarea
  width: 100%
  height: 50px

</style>
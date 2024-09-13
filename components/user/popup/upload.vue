<script setup>

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

const submitImages = async () => {
  const payload = images.value.map(image => ({
    image: image.url,
    description: image.description
  }));

  try {
    const response = await fetch('https://your-api-endpoint.com/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Error uploading images');
    }

    alert('Images uploaded successfully');
    images.value = []; // Очищаем массив изображений после успешной загрузки
  } catch (error) {
    alert(`Upload failed: ${error.message}`);
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
  const { trip, region, place } = formData.value;
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
        <li class="upload__par">Оригинальные изображения, без фильтров</li>
        <li class="upload__par">Загружать только фотографии, которыми вы владеете</li>
        <li class="upload__par">Высокое качество изображений</li>
        <li class="upload__par">Соответствие <span class="link">условиям ТРОПЫ</span></li>
      </ul>

      <ElementsButton class="upload__button"
                      :text="'Отправить на ТРОПУ'"
                      :disable="!check"
                      :white="true"
                      @click="submitImages"/>
      <!--      <button type="button" @click="selectFiles">Выбрать файлы</button>-->
    </div>
    <div v-else class="images-preview">
      <p class="upload__title">Почти конец!</p>
      <div v-for="(image, index) in images" :key="index" class="image-container">
        <img :src="image.url" alt="Uploaded Image" class="upload__image" />
        <form class="upload__input-block" @submit.prevent="checkInputs">
          <ElementsInput :model="trip" :type="'text'" :placeholder="'Путешествие'" />
          <ElementsInput :model="region" :type="'text'" :placeholder="'Регион'" />
          <ElementsInput :model="place" :type="'text'" :placeholder="'Место'" />
          <ElementsButton class="upload__button"
                          type="submit"
                          :text="'Отправить на ТРОПУ'"
                          :white="true"
                          @click="submitImages"/>
        </form>
      </div>
    </div>

    <div class="finish">

    </div>

  </div>
</template>

<style lang="sass">
@import "@/const/mixin"
@import "@/const/color"

.upload__image
  width: 292px
  height: 349px
  border-radius: 15px
  object-fit: cover

.upload__input-block
  display: flex
  flex-direction: column
  gap: 15px

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
  max-height: 55px
  gap: 10px 160px
  margin-top: 40px

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
  flex-direction: row
  justify-content: center
  gap: 60px
  margin-top: 20px
  align-items: center

textarea
  width: 100%
  height: 50px

</style>
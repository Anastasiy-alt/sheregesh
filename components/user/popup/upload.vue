<script lang="ts" setup>
const props = defineProps<{
  close: () => void;
  submitImages: () => void;
  sucsessSubmit: boolean;
}>();
const images = ref<{ url: string; description: string }[]>([]);
const fileInput = ref<HTMLInputElement | null>(null);
const maxImages = 1;
const maxSize = 5 * 1024 * 1024;
const trip = ref<string>('')
const region = ref<string>('')
const place = ref<string>('')
const formData = ref<{ trip: string; region: string; place: string }>({
  trip: '',
  region: '',
  place: '',
});
const check = ref<boolean>(false)
const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    handleFiles(target.files);
  }
};

const selectFiles = () => {
  fileInput.value?.click();
};

const onDrop = (event: DragEvent) => {
  event.preventDefault();
  if (event.dataTransfer?.files) {
    handleFiles(event.dataTransfer.files);
  }
};

const handleFiles = (files: FileList | null) => {
  if (!files) return;
  for (let file of files) {
    if (images.value.length >= maxImages) {
      alert(`Вы можете загрузить только ${maxImages} фотографий.`);
      return;
    }

    if (file.size > maxSize) {
      alert(`Файл ${file.name} слишком велик.`);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      images.value.push({
        url: e.target?.result as string,
        description: ''
      });
    };
    reader.readAsDataURL(file);
  }
};


const isFormValid = computed(() => {
  return trip.value.trim() !== '' && region.value.trim() !== '' && place.value.trim() !== '';
});


const checkInputs = () => {
  const {trip, region, place} = formData.value;
  check.value = !!(trip && region && place);
};

watch(() => [formData.value.trip, formData.value.region, formData.value.place], () => {
  console.log("Форма изменена");
})


</script>

<template>
  <div class="upload-area" @dragover.prevent @drop.prevent="onDrop">
    <div v-if="!images.length" class="upload__block">
      <img alt="" class="upload__img" src="@/assets/img/purple-bear.png">
      <p class="upload__title">Загрузить фотографию </p>
      <p class="upload__subtitle">Перетащите сюда фотографию или
        <span class="link" @click="selectFiles">загрузите</span> с компьютера</p>
      <p class="upload__subsubtitle">JPEG до 5 Мб</p>
      <input
          ref="fileInput"
          accept="image/*"
          hidden
          multiple
          type="file"
          @change="onFileChange"
      />
      <ul class="upload__parameters">
        <li class="upload__par">При 100% увеличении не должно быть заметного цифрового шума, зерна и артефактов сжатия
        </li>
        <li class="upload__par">На фотографиях не должно быть хроматических аберраций, следов от пыли и прочих
          загрязнений
        </li>
        <li class="upload__par">Не должно быть никаких дат, подписей, копирайтов, рамочек, бордюров</li>
        <li class="upload__par">Фотографии должны иметь правильную ориентацию по вертикали/горизонтали</li>
      </ul>

      <ElementsButton :disable="!check"
                      :text="'Отправить на ТРОПУ'"
                      :white="true"
                      class="upload__button"
                      @click="submitImages"/>
      <!--      <button type="button" @click="selectFiles">Выбрать файлы</button>-->
    </div>
    <div v-else-if="!sucsessSubmit" class="images-preview">
      <p class="upload__title">Почти конец!</p>
      <div v-for="(image, index) in images" :key="index" class="image-container">
        <img :src="image.url" alt="Uploaded Image" class="upload__image"/>
        <form class="upload__input-block" @submit.prevent="checkInputs">
          <ElementsInput :model="trip" :placeholder="'Путешествие'" :type="'text'"/>
          <ElementsInput :model="region" :placeholder="'Регион'" :type="'text'"/>
          <ElementsInput :model="place" :placeholder="'Место'" :type="'text'"/>
          <ElementsButton :text="'Отправить на ТРОПУ'"
                          :white="true"
                          class="up_bu"
                          type="submit"
                          @click="submitImages"/>
        </form>
      </div>
    </div>
    <div v-if="sucsessSubmit" class="finish">
      <img alt="" class="finish__img" src="@/assets/img/green-bear.png">
      <p class="finish__text">Фотографии успешно отправлены на модерацию!</p>
      <ElementsButton :text="'Вернуться в профиль'" :white="true" @click="close"/>
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
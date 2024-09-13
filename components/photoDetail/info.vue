<script setup>
const tags = ['алтай', 'горы', 'лес']
const moreText = ref('Читать')

const container = ref(null);
const textContent = ref(null);
const showMoreBtn = ref(null);
const showButton = ref(true);
const expanded = ref(false);
const windowWidth = ref()

const toggleText = () => {
  expanded.value = !expanded.value;
  if (expanded.value) {
    moreText.value = 'Закрыть'
    textContent.value.style.maxHeight = `${textContent.value.scrollHeight}px`;
    textContent.value.style.setProperty('-webkit-line-clamp', 'unset');
  } else {
    moreText.value = 'Читать'
    calculateAndApplyStyle();
  }
};

const defaultStyles = (count) => {
  textContent.value.style.display = "-webkit-box";
  textContent.value.style.webkitBoxOrient = "vertical";
  textContent.value.style.overflow = "hidden";
  textContent.value.style.setProperty('-webkit-line-clamp', count);
}

const calculateAndApplyStyle = () => {
  windowWidth.value = window.innerWidth
  if (window.innerWidth > 1364) {
    const lineHeight = parseFloat(window.getComputedStyle(textContent.value).lineHeight);
    const textContainerHeight = 70
    // Math.round(300 - (title.value.scrollHeight + 95))
    const textContainerLineCount = Math.round(textContainerHeight / lineHeight)
    const actualLines = textContent.value.scrollHeight / lineHeight;
    if (actualLines > textContainerLineCount - 1 && actualLines !== textContainerLineCount) {
      textContent.value.style.maxHeight = `${lineHeight * (textContainerLineCount - 1)}px`;
      setTimeout(() => defaultStyles(textContainerLineCount - 1), 350);
    }
    if (actualLines <= textContainerLineCount) {
      showButton.value = false;
      textContent.value.style.maxHeight = `${textContent.value.scrollHeight}px`;
    } else {
      showButton.value = true;
      if (expanded.value) {
        expanded.value = false
        moreText.value = 'Read'
      }
    }
  } else {
    textContent.value.style.display = "flex";
    textContent.value.style.maxHeight = "fit-content";
    textContent.value.style.webkitBoxOrient = "vertical";
    textContent.value.style.overflow = "visible";
    textContent.value.style.setProperty('-webkit-line-clamp', 'auto');
  }
};
// const isLiked = card.likes.some(i => i._id === currentUser._id);
// function handleCardLike(card) {
//   const isLiked = card.likes.some(i => i._id === currentUser._id);
//   api.changeLikeCardStatus(card._id, !isLiked)
//       .then((newCard) => {
//         setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
//       })
//       .catch((error) => {
//         console.log(`Ошибка: ${error}`);
//       });
// }
// const handleLikeClick = () => {
//   onCardLike(card);
// };
const countLikes = ref(21)
const isLiked = ref(false)
const toogleLike = () => {
  isLiked.value = !isLiked.value
  if (isLiked.value) {
    countLikes.value++
  } else {
    countLikes.value--
  }
}

onMounted(() => {
  windowWidth.value = window.innerWidth
  calculateAndApplyStyle();
})

</script>

<template>
  <div class="info">
    <div>


      <NuxtLink to="/user/1" class="info__user-block">
        <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            class="info__user-img">
        <div class="info__user">
          <p class="info__user-name">Марина Баринова</p>
          <p class="info__user-travelers">5 поездок</p>
        </div>
      </NuxtLink>
      <div class="tags">
        <ElementsTag v-for="(tag, idx) in tags" :key="idx" :text="tag"/>

      </div>
    </div>
    <div class="info__blocks">
      <div class="info__description info__description-anim" ref="container">
        <p class="info__description-text info__description-text-anim" ref="textContent">
          В этом медвежем лесу водятся красивые медведи: и белые, и черные, и черно-белые. Вобщем стоит посетить этот
          лес, вас точно съедят!
          В этом медвежем лесу водятся красивые медведи: и белые, и черные, и черно-белые. Вобщем стоит посетить этот
          лес, вас точно съедят!
        </p>
        <button v-if="showButton" ref="showMoreBtn" class="info__description__more" @click="toggleText">
          {{ moreText }}
        </button>

      </div>

      <div class="info__coordinates">
        <div class="info__coordinates-value-block">
          <p class="info__coordinates-value">Регион:</p>
          <p class="info__coordinates-value">Место:</p>
          <p class="info__coordinates-value">Путешествие:</p>
        </div>
        <div class="info__coordinates-value-block">
          <p class="info__coordinates-value">Республика Алтай</p>
          <p class="info__coordinates-value">Медвежий лес</p>
          <p class="info__coordinates-value">Этно-Алтай</p>
        </div>
      </div>
    </div>


    <div class="info__map">

    </div>


    <div class="info__buttons-block">
      <ElementsButton :text="'Скачать фото'" :download="true"/>
      <div class="info__like-block">
        <IconLike v-if="isLiked" class="info__like" filled @click="toogleLike"/>
        <IconLikeDef v-if="!isLiked" class="info__like" filled @click="toogleLike"/>
        <p class="info__like-count">{{ countLikes }}</p>
      </div>
      <!--      <IconLike class="info__like" filled />-->

    </div>
  </div>
</template>

<style lang="sass">
@import "@mixin"
@import "@color"

.info__map
  width: 100%
  height: 100%
  background: $black
  border-radius: 15px

.info__description__more
  border: none
  padding: 0
  margin: 0
  background: none
  color: $green
  cursor: pointer
  @include font-styles(16px, 400, 20px)

.tags
  display: flex
  flex-direction: row
  gap: 10px

.info__buttons-block
  display: flex
  flex-direction: row
  gap: 60px

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
  width: 40px
  height: 40px
  cursor: pointer
  @include transition

.info__like:active
  transform: scale(0.85)

.info__coordinates-value
  margin: 0
  padding: 0
  color: #717171
  @include font-styles(16px, 400, 20px)

.info__coordinates-value-block
  display: flex
  flex-direction: column
  gap: 10px

.info__coordinates
  display: flex
  flex-direction: row
  gap: 30px
  color: $black
  width: 100%
  border: 1px solid $gray-dark
  padding: 20px 10px
  border-radius: 15px
  background: $white
  height: fit-content

.info
  background-color: $gray
  width: 100%
  border-radius: 15px
  padding: 25px 30px 45px 30px
  box-sizing: border-box
  display: flex
  flex-direction: column
  gap: 30px
  justify-content: space-between

.info__blocks
  display: flex
  flex-direction: row
  gap: 6px

.info__description
  border: 1px solid $gray-dark
  padding: 20px 10px
  border-radius: 15px
  background: $white
  width: 100%
  @include transition

.info__description-text
  color: #717171
  margin: 0
  padding: 0
  @include font-styles(16px, 400, 20px)
  @include transition

.info__description-anim
  display: flex
  flex-direction: column
  align-items: flex-start

.info__user-block
  display: flex
  flex-direction: row
  gap: 20px
  margin-bottom: 35px
  text-decoration: none

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
import Masonry from 'vue-masonry-css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Masonry);
});
import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'
export default defineNuxtPlugin((ctx) => {
  Vue.use(VueAwesomeSwiper /* { default options with global component } */)
})

import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import Vue from 'vue'
import VueMask from 'v-mask'
export default defineNuxtPlugin(() => {
  Vue.use(VueMask)
})

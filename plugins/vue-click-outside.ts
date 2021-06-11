import Vue from 'vue'
import vClickOutside from 'v-click-outside'
import { defineNuxtPlugin } from '@nuxtjs/composition-api'

export default defineNuxtPlugin(() => {
  Vue.use(vClickOutside)
})

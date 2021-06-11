import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import Vue from 'vue'
import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format'

export default defineNuxtPlugin(() => {
  Vue.use(VueFilterDateFormat)
})

import { Context } from '@nuxt/types'
import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

export default defineNuxtPlugin((ctx: Context) => {
  Vue.component('VSelect', vSelect)
})

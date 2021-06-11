import { Context } from '@nuxt/types'
import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import Vue from "vue"
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min'
import 'vue-slider-component/dist-css/vue-slider-component.css'

// import theme
import 'vue-slider-component/theme/default.css'
export default defineNuxtPlugin((ctx: Context) => {
    Vue.component('VueRangeSlider', VueSlider)
})

<template>
  <NuxtLink :to="route || '#'">
    <div>
      <img :src="image" :alt="title" class="w-full" />
    </div>
    <div class="mt-7">
      <div class="flex-y-center group hover:text-orange">
        <h4 class="transition-colors">{{ title }}</h4>
        <svgLongArrow
          width="60"
          class="
            ml-3
            transform
            transition-all
            group-hover:translate-x-1
            xl:w-10
          "
        />
      </div>
      <div class="font-medium opacity-50">
        {{ subTitle }}
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgLongArrow from '@/assets/icons/long_arrow_right.svg?inline'
export default defineComponent({
  components: { svgLongArrow },
  props: {
    image: String,
    route: [String, Object],
    title: String,
    subTitle: String,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss"></style>

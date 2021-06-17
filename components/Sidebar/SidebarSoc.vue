<template>
  <div class="flex-y-center space-x-1.5">
    <a
      v-for="(item, idx) in items"
      :key="idx"
      class="
        border border-orange
        rounded-full
        flex-center
        p-2.5
        w-10
        h-10
        flex-shrink-0
        text-white
        transition-all
        hover:bg-orange
        active:bg-orange-500 active:border-orange-500
      "
      href=""
      target="_blank"
    >
      <component :is="item.icon" class="max-h-full" />
    </a>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgInstagram from '@/assets/icons/instagram.svg?inline'
import svgFacebook from '@/assets/icons/facebook.svg?inline'
import svgYoutube from '@/assets/icons/youtube.svg?inline'
export default defineComponent({
  components: { svgInstagram, svgFacebook, svgYoutube },
  setup() {
    const items = [
      {
        icon: svgInstagram,
        link: '#',
      },
      {
        icon: svgFacebook,
        link: '#',
      },
      {
        icon: svgYoutube,
        link: '#',
      },
    ]
    return { items }
  },
})
</script>

<style lang="postcss"></style>

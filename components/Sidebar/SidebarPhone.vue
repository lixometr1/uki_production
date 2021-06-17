<template>
  <a :href="'tel:' + phone" class="flex-y-center group">
    <svgPhone
      width="20"
      class="mr-2.5 transition transform group-hover:rotate-90"
    />
    <span class="text-18 xl:text-16">{{ phone }}</span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgPhone from '@/assets/icons/phone.svg?inline'
export default defineComponent({
  components: { svgPhone },
  props: {
    phone: String,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss"></style>

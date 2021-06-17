<template>
  <div>
    <div class="flex-y-center">
      <div>
        <img :src="avatar" alt="avatar" />
      </div>
      <div class="ml-5">
        <StarsPanel :active="stars" class="mb-1" />
        <div class="text-26 font-bold font-second">
          {{ name }}
        </div>
      </div>
    </div>
    <div class="mt-3.5">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    avatar: String,
    name: String,
    text: String,
    stars: Number,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss"></style>

<template>
  <div>
    <div class="flex-y-center justify-between mb-8">
      <h2>Reviews</h2>
      <CircleTextReviews />
    </div>
    <ReviewsBlockSlider />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="postcss"></style>

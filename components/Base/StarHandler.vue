<template>
  <div class="star-handler" :class="{ active }">
    <svgStarFilled v-if="active" class="star-handler__fill" />
    <svgStarStroke v-else class="star-handler__stroke" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgStarFilled from '@/assets/icons/star_filled.svg?inline'
import svgStarStroke from '@/assets/icons/star_stroke.svg?inline'
export default defineComponent({
  components: { svgStarFilled, svgStarStroke },
  props: {
    active: Boolean,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.star-handler {
  svg {
    @apply w-4.5;
  }
  &.active {
  }
}
</style>

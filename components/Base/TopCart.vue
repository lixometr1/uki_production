<template>
  <NuxtLink :to="'#'" class="top-cart">
    <div class="top-cart__cnt">
      {{ cnt }}
    </div>
    <svgCart width="23" />
  </NuxtLink>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgCart from '@/assets/icons/cart.svg?inline'
export default defineComponent({
  components: { svgCart },
  setup() {
    const cnt = computed(() => 3)
    return { cnt }
  },
})
</script>

<style lang="postcss">
.top-cart {
  @apply w-[60px] h-[60px] flex-center border border-white rounded-full relative 
    hover:bg-orange hover:border-orange active:bg-orange-500 active:border-orange-500 transition-all;
  &__cnt {
    @apply absolute top-0 right-0 rounded-full min-w-[22px] h-[22px] flex-center text-grey-dark font-bold bg-white;
  }
}
</style>

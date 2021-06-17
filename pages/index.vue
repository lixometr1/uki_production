<template>
  <div>
    <div class="">
      <HomeFirstScreen />
      <ScreenNumbers :total="5" v-model="activeNum" />
      <div class="page-container">
        <AboutBlock class="-mt-4" />
        <HomeServices class="mt-[170px] xl:mt-14" />
        <ReviewsBlock class="mt-24" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const activeNum = ref(1)
    return { activeNum }
  },
})
</script>

<style></style>

<template>
  <FirstScreen
    class="home-first-screen bg-center bg-cover bg-no-repeat page-container"
    :title="'Event production company.'"
    :btn="'Booking event'"
    :route="'#'"
  >
    <template #subTitle>
      We provide the highest of quality services at affordable prices to ensure
      you get the best value without having to compromise.
    </template>
  </FirstScreen>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.home-first-screen {
  background-image: linear-gradient(360deg, #020202 0%, rgba(2, 2, 2, 0) 30.67%),
    linear-gradient(270deg, #020202 0%, rgba(2, 2, 2, 0) 41.67%),
    url(~@/assets/img/home_bg.png);
}
</style>

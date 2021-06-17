<template>
  <div class="flex-y-center">
    <div class="flex-1 min-w-0 relative pr-[100px] xl:pr-[80px]">
      <AboutBlockSlider />
      <CircleTextBest class="absolute -right-4 bottom-7 z-20 xl:-right-2" />
    </div>
    <div class="flex-1">
      <h2>About us</h2>
      <div class="space-y-3">
        <p>
          We are a full-service wedding and event planning / production company,
          located in West Palm Beach, Florida, specializing in small to
          large-scale events with everything you need to create an extraordinary
          production!
        </p>

        <p>
          Each service is tailored to fit our clients' needs while our
          expertise, innovation and professionalism ensure we consistently
          deliver quality.
        </p>

        <p>
          At UKi Productions, we aim to provide our clients with a memorable
          experience that will last a lifetime. We provide the highest of
          quality services at affordable prices to ensure you get the best value
          without having to compromise.
        </p>
      </div>
      <AButton tag="NuxtLink" to="#" size="sm" class="mt-7">
        Read More <svgArrowRight class="ml-2" width="6" />
      </AButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgArrowRight from '@/assets/icons/arrow_right.svg?inline'
export default defineComponent({
  components: { svgArrowRight },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss"></style>

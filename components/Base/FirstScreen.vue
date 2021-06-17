<template>
  <div class="first-screen">
    <div class="max-w-[650px]">
      <div>
        <slot name="title">
          <h1 class="">
            {{ title }}
          </h1>
        </slot>
      </div>
      <div class="mt-5">
        <slot name="subTitle">
          <div class="text-18">
            {{ subTitle }}
          </div>
        </slot>
      </div>
      <div class="mt-8">
        <slot name="btn">
          <AButton tag="NuxtLink" :to="route" color="orange" size="lg">
            {{ btn }}
          </AButton>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: String,
    subTitle: String,
    btn: String,
    route: [String, Object],
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.first-screen {
  @apply min-h-screen flex-y-center;
}
</style>

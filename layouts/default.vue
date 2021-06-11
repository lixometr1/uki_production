<template>
  <div class="page-layout">
    <Header />
    <Nuxt class="page-wrapper" />
    <Footer />
    <Modal />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>
<style lang="postcss">
.page-wrapper {
  @apply flex-1 w-full;
}
.page-layout {
  @apply flex flex-col items-start justify-start min-h-screen;
}
</style>

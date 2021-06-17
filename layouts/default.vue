<template>
  <div class="page-layout layout-sidebar">
    <Sidebar class="lg:hidden" />
    <div class="page-wrapper flex flex-col items-stretch">
      <TopCart class="!fixed right-20 top-10 z-100" />
      <Header class="lg:block hidden" />
      <Nuxt class="flex-1" />
      <Footer />
    </div>
    <Modal />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>
<style lang="postcss">
.page-wrapper {
  @apply flex-1 w-full pl-[430px]  xl:pl-[380px] lg:pl-0;
}
.page-layout {
  @apply flex flex-col items-start justify-start min-h-screen;
}
.layout-sidebar {
  @apply flex-row items-stretch;
}
</style>

<template>
  <aside class="sidebar h-screen">
    <div class="mb-12 sidebar-item xl:mb-3">
      <NuxtLink to="/"
        ><svgLogo width="90" class="w-[90px] xl:w-[70px]"
      /></NuxtLink>
    </div>
    <SidebarMenu />
    <SidebarPages class="sidebar-item mt-12 mb-10 xl:mt-7" />
    <SidebarFooter class="mt-auto sidebar-item" />
  </aside>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgLogo from '@/assets/icons/logo.svg?inline'
export default defineComponent({
  components: { svgLogo },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.sidebar {
  @apply fixed top-0 bottom-0 left-0 w-[430px] pt-7 pb-12 overflow-auto
      xl:w-[380px] xl:pt-4 xl:pb-2;
  background: rgba(2, 2, 2, 0.3);
  box-shadow: 0px 0px 250px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px);
  &-item {
    @apply px-14 xl:px-12;
  }
}
</style>

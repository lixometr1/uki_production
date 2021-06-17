<template>
  <div class="">
    <div class="space-y-3 xl:space-y-2">
      <SidebarMenuItem v-for="(item, idx) in items" v-bind="item" :key="idx" />
    </div>
    <div class="sidebar-item">
      <div class="h-[1px] bg-white opacity-20 mt-12 xl:mt-7"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = computed(() => [
      {
        title: 'DJ Entertainment',
        route: '#',
        children: [
          {
            title: 'About',
            route: '#',
          },
          {
            title: 'Blog',
            route: '#',
          },
        ],
      },
      {
        title: 'Live Entertainment',
        route: '#2',
        children: [
          {
            title: 'About',
            route: '#',
          },
          {
            title: 'Blog',
            route: '#',
          },
        ],
      },
      {
        title: 'Media',
        route: '#',
      },
      {
        title: 'Lighting Design',
        route: '#2',
      },
      {
        title: 'Decor',
        route: '#2',
      },
    ])
    return { items }
  },
})
</script>

<style lang="postcss"></style>

<template>
  <div class="space-y-7 font-medium xl:space-y-3.5">
    <NuxtLink
      v-for="(item, idx) in items"
      :key="idx"
      class="
        block
        opacity-80
        hover:opacity-100 hover:text-orange
        active:text-orange-500
        xl:text-14
      "
      :to="item.route"
      >{{ item.title }}</NuxtLink
    >
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = computed(() => [
      {
        title: 'About',
        route: '#',
      },
      {
        title: 'Blog',
        route: '#',
      },
      {
        title: 'Contacts',
        route: '#',
      },
    ])
    return { items }
  },
})
</script>

<style lang="postcss"></style>

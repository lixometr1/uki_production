<template>
  <div>
    <SidebarPhone :phone="'+1 561 406 03 99'" />
    <SidebarSoc class="mt-5" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="postcss"></style>

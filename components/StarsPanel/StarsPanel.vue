<template>
  <div class="flex-y-center space-x-1.5">
    <StarHandler v-for="item in 5" :key="item" :active="item <= active" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    active: Number,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss"></style>

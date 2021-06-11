<template>
  <div class="modal-content">
    <slot />
    <div class="modal-close" @click="$emit('close')">
      <!-- <svgClose width="14" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
// import svgClose from '@/assets/icons/cross.svg?inline'
export default defineComponent({
  // components: { svgClose },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss"></style>

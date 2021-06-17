<template>
  <component
    :is="tag"
    class="app-button"
    :class="{ [`size-${size}`]: true, [`color-${color}`]: true, disabled }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot
  /></component>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'md',
    },
    color: {
      type: String,
      default: 'orange',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.app-button {
  @apply py-5 border flex-center text-center rounded-none outline-none focus:outline-none transition-all
      xl:py-4.5;
  &.color-orange {
    @apply border-orange hover:bg-orange active:bg-orange-500 active:border-orange-500;
  }
  &.color-white {
    @apply border-white hover:bg-white hover:text-grey-dark active:bg-grey-500 active:border-grey-500;
  }
  &.size-lg {
    @apply text-22 w-[280px] xl:text-18 xl:w-[210px];
  }
  &.size-md {
    @apply text-22 w-[230px];
  }
  &.size-sm {
    @apply text-16 py-4.5 w-[160px];
  }
  &.disabled,
  &[disabled] {
    @apply opacity-50 cursor-default pointer-events-none;
  }
}
</style>

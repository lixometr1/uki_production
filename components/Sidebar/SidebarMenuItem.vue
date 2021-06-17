<template>
  <div class="sidebar-menu-item">
    <NuxtLink
      :to="route"
      class="sidebar-menu-item__main sidebar-item"
      active-class="active"
      :event="hasChildren ? 'none' : 'click'"
      @click.native="toggle"
    >
      <div>{{ title }}</div>
      <svgArrowDown
        v-if="hasChildren"
        width="12"
        class="transform opacity-50 transition-all"
        :class="{ 'rotate-180 opacity-100': isOpen }"
      />
    </NuxtLink>
    <CollapseTransition>
      <div v-if="isOpen && hasChildren" class="sidebar-item space-y-2">
        <NuxtLink
          v-for="(child, idx) in children"
          :key="idx"
          :to="child.route"
          exact-active-class="active"
          class="sidebar-menu-item__child"
        >
          {{ child.title }}</NuxtLink
        >
      </div>
    </CollapseTransition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'
import svgArrowDown from '@/assets/icons/arrow_down.svg?inline'
import { CollapseTransition } from '@ivanv/vue-collapse-transition'
import useOpen from '~/utils/compositions/useOpen'
export default defineComponent({
  components: { svgArrowDown, CollapseTransition },
  props: {
    title: String,
    children: {
      type: Array,
      default: () => [],
    },
    route: {
      type: [String, Object],
      default: '#',
    },
  },
  setup(props, { emit }) {
    const { children } = toRefs(props)
    const hasChildren = computed(() => children.value.length > 0)
    const { open, close, isOpen, toggle } = useOpen()

    return { open, close, isOpen, hasChildren, toggle }
  },
})
</script>

<style lang="postcss">
.sidebar-menu-item {
  &.active {
  }
  &__main {
    @apply py-1.5 relative flex-y-center justify-between text-26 hover:text-orange
        xl:text-22 xl:py-1;
    &::before {
      content: '';
      @apply hidden absolute left-0 top-0 bottom-0 w-[5px] bg-orange;
    }
    &.active {
      @apply text-orange;
      &::before {
        @apply block;
      }
    }
  }
  &__child {
    @apply flex-y-center justify-between hover:text-orange active:text-orange-500 opacity-50 hover:opacity-100
        xl:text-14;
    &.active {
      @apply text-orange opacity-100;
    }
  }
}
</style>

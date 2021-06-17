<template>
  <div class="circle-text" v-bind="$attrs">
    <div class="circle-text__circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="200px"
        height="200px"
        viewBox="0 0 150 150"
        enable-background="new 0 0 300 300"
        xml:space="preserve"
      >
        <defs>
          <path
            id="circlePath"
            d="m 74 74 m -62.4 0 a 62.4 62.4 90 0 1 124.8 0 a 62.4 62.4 90 0 1 -124.8 0"
          />
        </defs>
        <circle cx="150" cy="100" r="75" fill="none" />
        <g>
          <use xlink:href="#circlePath" fill="none" />
          <text fill="currentColor">
            <textPath
              v-for="(item, idx) in items"
              :key="idx"
              xlink:href="#circlePath"
              :startOffset="item.offset"
            >
              {{ item.text }}
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    texts: {
      type: Array as () => string[],
      default: () => [],
    },
    manual: Boolean,
  },

  setup(props) {
    const { texts, manual } = toRefs(props)
    const items = computed(() => {
      if (manual.value) return texts.value
      const cnt = texts.value.length
      const offset = 100 / cnt
      const totalChars = texts.value.reduce(
        (sum, cur) => (sum += cur.length),
        0
      )
      let currentOffset = 0
      return texts.value.map((text, i) => {
        const percents = ((texts.value[i - 1] || '').length / totalChars) * 100
        currentOffset += percents
        return { text, offset: currentOffset + '%' }
      })
    })
    return { items }
  },
})
</script>

<style lang="postcss">
.circle-text {
  @apply w-[150px] h-[150px] cursor-default;
  &__circle {
    @apply relative w-full pb-[100%] overflow-hidden animate-spin rounded-full;
    animation-duration: 10s;
    animation-timing-function: linear;

    &:hover {
      animation-direction: reverse;
      animation-fill-mode: both;
      animation-duration: 5s;
    }

    svg {
      @apply absolute top-0 left-0 w-full h-full;
    }
    text {
      @apply text-14 font-main uppercase absolute top-0;
    }
    &:hover {
      text {
        animation-direction: reverse;
      }
    }
  }
}
</style>

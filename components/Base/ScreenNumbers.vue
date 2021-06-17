<template>
  <div class="screen-numbers">
    <div class="space-y-5">
      <div
        v-for="num in total"
        :key="num"
        class="screen-numbers__num"
        :class="{ active: num === value }"
        @click="selectNum(num)"
      >
        <span v-if="num < 10">0</span><span>{{ num }}</span>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    total: Number,
    value: Number,
  },
  setup(props, { emit }) {
    const selectNum = (num: number) => {
      emit('input', num)
    }
    return { selectNum }
  },
})
</script>

<style lang="postcss">
.screen-numbers {
  @apply fixed right-6 top-0 bottom-0 h-screen flex-center z-50;
  &::before {
    content: '';
    @apply block absolute right-0 top-0 bottom-0 h-full opacity-30 w-0.5;
    background: linear-gradient(
      180deg,
      #ffffff 56.25%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  &__num {
    @apply font-medium transition-all border-r-2 border-transparent opacity-30 pr-9 cursor-pointer
        flex items-center first:items-start last:items-end;

    &.active {
      @apply h-[130px] text-22 opacity-100 border-white;
    }
  }
}
</style>

<template>
  <CircleText :texts="texts" :manual="true" v-bind="$attrs" v-on="$listeners" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  inheritAttrs: false,
  setup() {
    const texts = [
      {
        text: 'Best Quality',
        offset: 0,
      },
      {
        text: 'Best Team',
        offset: '26%',
      },
      { text: 'Best Events', offset: '47%' },
      { text: 'Best Company', offset: '71%' },
    ]
    return { texts }
  },
})
</script>

<style lang="postcss"></style>

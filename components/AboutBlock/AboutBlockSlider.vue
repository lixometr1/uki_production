<template>
  <div class="home-about-slider">
    <div v-swiper="sliderOpts">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, idx) in items" :key="idx">
          <img :src="item.image" alt="image" class="w-full" />
        </div>
      </div>
      <div>
        <div class="swiper-pagination home-about-slider__pagination"></div>
        <div class="home-aboust-slider__pagination-highlight"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { SwiperOptions } from 'swiper/index'

export default defineComponent({
  setup() {
    const sliderOpts: SwiperOptions = {
      pagination: {
        el: '.home-about-slider .swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return (
            '<span class="' +
            className +
            '">' +
            (index < 10 ? '0' : '') +
            (index + 1) +
            '</span>'
          )
        },
      },
      threshold: 0.5,
    }
    const items = computed(() => [
      {
        image: require('@/assets/img/about_image.jpg'),
      },
      {
        image: require('@/assets/img/about_image.jpg'),
      },
      {
        image: require('@/assets/img/about_image.jpg'),
      },
      {
        image: require('@/assets/img/about_image.jpg'),
      },
    ])
    return { sliderOpts, items }
  },
})
</script>

<style lang="postcss">
.home-about-slider {
  &__pagination {
    @apply flex w-full mt-2;
    position: relative;
    &::after {
      content: '';
      @apply block w-full h-0.5 opacity-30 absolute bottom-0 left-0 right-0;
      background: linear-gradient(
        180deg,
        #ffffff 66.15%,
        rgba(255, 255, 255, 0.5) 100%
      );
    }
    .swiper-pagination-bullet {
      @apply relative text-16 opacity-30 bg-none m-0 w-auto h-9 flex-y-center transition-all mr-4 last:mr-0 rounded-none hover:opacity-50;
      &::before {
        content: '';
        @apply absolute hidden w-[120px] h-0.5 bg-orange bottom-0 left-0;
      }
      background: none;
    }
    .swiper-pagination-bullet-active {
      @apply flex-1 text-22 opacity-100 bg-none justify-center hover:opacity-100;
      &::before {
        @apply block left-1/2 transform -translate-x-1/2;
      }
      &:first-child {
        @apply justify-start;
        &::before {
          @apply left-0 transform-none;
        }
      }
      &:last-child {
        @apply justify-end;
        &::before {
          @apply right-0 transform-none;
          left: auto !important;
        }
      }
    }
  }
}
</style>

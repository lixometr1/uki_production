<template>
  <div class="reviews-block-slider">
    <div v-swiper="{ ...sliderOpts, autoUpdate: false }">
      <div class="swiper-wrapper">
        <div v-for="(item, idx) in items" :key="idx" class="swiper-slide">
          <ReviewsBlockItem v-bind="item" />
        </div>
      </div>
      <div class="mt-20 flex-y-center justify-between">
        <div class="flex items-baseline leading-none">
          <div class="text-46 mr-2">
            <span v-if="activeSlide < 10">0</span>{{ activeSlide }}
          </div>
          <div class="text-18 opacity-50">
            / <span v-if="totalSlides < 10">0</span>{{ totalSlides }}
          </div>
        </div>
        <div class="flex-y-center space-x-3.5">
          <div
            class="
              cursor-pointer
              reviews-block-slider__arrow reviews-block-slider__prev
              slider-arrow
              prev
            "
          >
            <svgArrowLeft width="58" />
          </div>
          <div
            class="
              cursor-pointer
              reviews-block-slider__arrow reviews-block-slider__next
              slider-arrow
              next
            "
          >
            <svgArrowRight width="58" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
import { SwiperOptions } from 'swiper/index'
import svgArrowRight from '@/assets/icons/long_arrow_right.svg?inline'
import svgArrowLeft from '@/assets/icons/long_arrow_left.svg?inline'

export default defineComponent({
  components: { svgArrowRight, svgArrowLeft },
  setup() {
    const activeSlide = ref(1)

    const sliderOpts: SwiperOptions = {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 0,
      threshold: 0.5,
      navigation: {
        nextEl: '.reviews-block-slider .reviews-block-slider__next',
        prevEl: '.reviews-block-slider .reviews-block-slider__prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 60,
        },
      },
      on: {
        init() {
          activeSlide.value = this.activeIndex
        },
        slideChangeTransitionEnd() {
          activeSlide.value = this.activeIndex
        },
      },
    }
    const items = computed(() => [
      {
        avatar: require('@/assets/img/review_avatar_1.png'),
        name: 'Catherine Haddad Staller',
        stars: 5,
        text: 'These guys are GOOOD! Super fast response, very, very competent and experienced. They got me exactly what I needed for almost no cost! I can’t give them a higher recommendation.',
      },
      {
        avatar: require('@/assets/img/review_avatar_2.png'),
        name: 'Julie Lves',
        stars: 4,
        text: 'My wife and I hired UKI Production for our wedding and they brought the whole event to the next level. They kept people on the dance floor all night. The lighting was awesome, photography, and video turned out breathtaking. Would highly recommend!',
      },
      {
        avatar: require('@/assets/img/review_avatar_1.png'),
        name: 'Catherine Haddad Staller',
        stars: 5,
        text: 'These guys are GOOOD! Super fast response, very, very competent and experienced. They got me exactly what I needed for almost no cost! I can’t give them a higher recommendation.',
      },
      {
        avatar: require('@/assets/img/review_avatar_2.png'),
        name: 'Julie Lves',
        stars: 4,
        text: 'My wife and I hired UKI Production for our wedding and they brought the whole event to the next level. They kept people on the dance floor all night. The lighting was awesome, photography, and video turned out breathtaking. Would highly recommend!',
      },
      {
        avatar: require('@/assets/img/review_avatar_2.png'),
        name: 'Julie Lves',
        stars: 4,
        text: 'My wife and I hired UKI Production for our wedding and they brought the whole event to the next level. They kept people on the dance floor all night. The lighting was awesome, photography, and video turned out breathtaking. Would highly recommend!',
      },
    ])
    const totalSlides = computed(() => items.value.length)
    return { sliderOpts, items, activeSlide, totalSlides }
  },
})
</script>

<style lang="postcss">
.reviews-block-slider {
  &__arrow {
    @apply opacity-30 hover:opacity-100 transition-all;
  }
}
</style>

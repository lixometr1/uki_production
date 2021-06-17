<template>
  <div>
    <h2 class="mb-14">Services</h2>
    <div class="flex space-x-3.5">
      <HomeServicesItem class="flex-1" v-bind="services[0]" />
      <HomeServicesItem class="flex-1" v-bind="services[1]" />
    </div>
    <div class="flex space-x-3.5 mt-14">
      <HomeServicesItem class="flex-1" v-bind="services[2]" />
      <HomeServicesItem class="flex-1" v-bind="services[3]" />
      <HomeServicesItem class="flex-1" v-bind="services[4]" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const services = [
      {
        title: 'Dj Entertainment',
        subTitle: 'Descriptor',
        image: require('@/assets/img/services_1.jpg'),
      },
      {
        title: 'Live Entertainment',
        subTitle: 'Descriptor',
        image: require('@/assets/img/services_2.jpg'),
      },
      {
        title: 'Media ',
        subTitle: 'Videography & Photography',
        image: require('@/assets/img/services_3.jpg'),
      },
      {
        title: 'Lighting Design ',
        subTitle: '3D Mapping & Uplighting',
        image: require('@/assets/img/services_5.jpg'),
      },
      {
        title: 'Decor ',
        subTitle: '3D Mapping & Uplighting',
        image: require('@/assets/img/services_4.jpg'),
      },
    ]
    return { services }
  },
})
</script>

<style lang="postcss"></style>

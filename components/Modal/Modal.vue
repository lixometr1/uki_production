<template>
  <transition :name="modalTransition">
    <div v-if="isOpen" :class="modalClass" class="modal-wrapper">
      <component
        :is="activeModal"
        v-bind="cProps"
        v-on="cListeners"
        @close="close"
      />
      <div class="modal-overlay" @click="overlayClick"></div>
    </div>
  </transition>
</template>

<script>
import useModal from '@/utils/compositions/useModal'
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
import useStopScroll from '@/utils/compositions/useStopScroll'
export default defineComponent({
  setup(props, { emit }) {
    const isOpen = ref(false)
    const activeName = ref('')
    const cProps = ref({})
    const cListeners = ref({})
    const activeModal = ref({})
    const modalTransition = ref('modal-fade')
    const { api } = useModal()
    const { stop: blockScroll, reset: resetScroll } = useStopScroll()
    const open = () => {
      isOpen.value = true
      blockScroll()
    }
    const close = () => {
      isOpen.value = false
      cProps.value = {}
      cListeners.value = {}
      activeName.value = ''
      resetScroll()
    }
    api.on('open', ({ component, name, transition, props = {}, on = {} }) => {
      cProps.value = props
      cListeners.value = on
      activeModal.value = component
      activeName.value = name
      if (transition) {
        modalTransition.value = transition
      }
      open()
    })
    api.on('close', () => {
      close()
    })
    const overlayClick = () => {
      if (cProps.value._closeOnOverlay === false) {
        return
      }
      close()
    }
    const modalClass = computed(() => {
      return `modal-${activeName.value}`
    })
    return {
      modalClass,
      isOpen,
      open,
      close,
      cListeners,
      cProps,
      activeModal,
      modalTransition,
      overlayClick,
    }
  },
})
</script>

<style lang="postcss">
.modal-wrapper {
  @apply fixed top-0 left-0 right-0 bottom-0 w-full h-full z-500 flex-center;
}

.modal-overlay {
  @apply absolute top-0 left-0 right-0 bottom-0 z-10 bg-opacity-70 transition-all;
}

.modal-content {
  @apply relative z-20 rounded-lg bg-white border  p-7 transition-all max-h-full overflow-auto;
}

.modal-close {
  @apply absolute top-7 right-7 cursor-pointer z-20 transition-opacity opacity-70 hover:opacity-100
        sm:top-5 sm:right-5;
}

.modal-fade-enter,
.modal-fade-leave-to {
  .modal-content {
    opacity: 0;
  }

  .modal-overlay {
    opacity: 0;
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: 0.3s;
}
</style>

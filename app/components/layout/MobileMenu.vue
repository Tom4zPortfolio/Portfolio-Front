<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'

const isOpen = ref(false)

const props = defineProps<{
  links: { label: string; to: string }[]
}>()

// LOCK SCROLL
watch(isOpen, (val) => {
  if (process.client) {
    document.body.style.overflow = val ? 'hidden' : ''
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="md:hidden">

    <!-- BURGER -->
    <button
        class="glass rounded-full p-3 transition hover:scale-105"
        @click="isOpen = true"
    >
      ☰
    </button>

    <!-- OVERLAY -->
    <Transition name="overlay">
      <div
          v-if="isOpen"
          class="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
          @click="isOpen = false"
      />
    </Transition>

    <!-- DRAWER -->
    <Transition name="drawer">
      <div
          v-if="isOpen"
          class="
          fixed
          right-0
          top-0
          z-[60]
          flex
          h-screen
          w-full
          max-w-sm
          flex-col
          border-l
          border-white/10
          bg-zinc-950/90
          backdrop-blur-xl
        "
      >

        <!-- HEADER -->
        <div class="flex items-center justify-between px-6 py-5">
          <span class="text-lg font-semibold">Tom</span>

          <button
              class="glass rounded-full p-3 transition hover:scale-105"
              @click="isOpen = false"
          >
            ✕
          </button>
        </div>

        <!-- LINKS -->
        <nav class="flex flex-1 flex-col justify-center gap-8 px-8">
          <NuxtLink
              v-for="link in props.links"
              :key="link.label"
              :to="link.to"
              @click="isOpen = false"
              class="
              text-3xl
              font-medium
              text-zinc-300
              transition
              duration-300
              hover:translate-x-2
              hover:text-white
            "
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="border-t border-white/10 p-6">
          <div class="flex justify-center gap-4">
            <a v-for="social in [
            {icon: 'ph:github-logo-bold', href: '#'},
            {icon: 'ph:linkedin-logo-bold', href: '#'},
            {icon: 'ph:twitter-logo-bold', href: '#'}
          ]" :key="social.icon" :href="social.href" class="glass-morphism w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <Icon :name="social.icon" size="24" />
            </a>
          </div>
        </div>

        <!-- FOOTER -->
        <div class="border-t border-white/10 p-6">
          <button class="glass w-full rounded-full py-3">
            Login
          </button>
        </div>

      </div>
    </Transition>

  </div>
</template>

<style scoped>
/* OVERLAY */
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.25s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

/* DRAWER */
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}
</style>
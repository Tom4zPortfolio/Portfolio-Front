<script setup lang="ts">
const isOpen = ref(false)

const props = defineProps<{
  links: { label: string; to: string }[]
}>()

watch(isOpen, (val) => {
  if (process.client) {
    document.body.style.overflow = val ? 'hidden' : ''
  }
})
</script>

<template>
  <div class="md:hidden">

    <!-- BURGER -->
    <button class="glass rounded-full p-3" @click="isOpen = true">
      ☰
    </button>

    <!-- OVERLAY -->
    <Transition name="fade">
      <div
          v-if="isOpen"
          class="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col"
      >

        <!-- TOP BAR -->
        <div class="flex justify-between items-center px-6 py-5">
          <span class="text-lg font-semibold">Tom</span>

          <button
              class="glass rounded-full px-4 py-2"
              @click="isOpen = false"
          >
            ✕
          </button>
        </div>

        <!-- NAV -->
        <div class="flex flex-col items-center justify-center flex-1 gap-8">
          <NuxtLink
              v-for="link in links"
              :key="link.label"
              :to="link.to"
              @click="isOpen = false"
              class="text-3xl text-zinc-300 hover:text-white transition"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

      </div>
    </Transition>

  </div>
</template>
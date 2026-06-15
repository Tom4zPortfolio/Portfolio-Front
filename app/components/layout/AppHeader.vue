<script setup lang="ts">
import MobileMenu from "~/components/layout/MobileMenu.vue";

const links = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'CV',
    to: '/cv',
  },
  {
    label: 'Portfolios',
    to: '/portfolio',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
]

const scrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 10
  })
})

</script>

<template>
  <header
      class="fixed top-0 left-0 right-0 z-50 px-6 py-5 transition-all duration-300"
      :class="scrolled ? 'backdrop-blur-xl bg-black/40' : ''"
  >
    <div class="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-3 items-center">

      <!-- LOGO -->
      <div class="justify-self-start">
        <NuxtLink to="/" class="text-lg font-semibold tracking-tight">
          "Tom
        </NuxtLink>
      </div>

      <div class="hidden md:flex justify-self-center">
        <nav class="glass flex items-center gap-1 rounded-full px-2 py-1">
          <NuxtLink
              v-for="link in links"
              :key="link.label"
              :to="link.to"
              class="rounded-full px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>

      <div class="justify-self-end md:hidden flex justify-end">
        <MobileMenu :links="links" />
      </div>

    </div>
  </header>
</template>
<script setup lang="ts">
import MobileMenu from "~/components/layout/MobileMenu.vue";

const links = [
  {
    label: 'Accueil',
    to: '/',
  },
  {
    label: 'A propos',
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

const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
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
        <NuxtLink to="/" class="text-xl font-bold tracking-tighter group">
          <span class="text-gradient">TOM</span>
          <span class="text-white opacity-50 group-hover:opacity-100 transition-opacity">.DEV</span>
        </NuxtLink>
      </div>

      <div class="hidden md:flex justify-self-center">
        <nav class="glass-morphism flex items-center gap-1 rounded-full px-2 py-1">
          <NuxtLink
              v-for="link in links"
              :key="link.label"
              :to="link.to"
              class="rounded-full px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:text-white relative group"
              active-class="bg-primary/20 text-white"
          >
            {{ link.label }}
            <span class="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-1/2"></span>
          </NuxtLink>
        </nav>
      </div>

      <div class="justify-self-end md:hidden flex justify-end">
        <MobileMenu :links="links" />
      </div>

    </div>
  </header>
</template>
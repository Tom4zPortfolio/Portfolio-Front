<script setup lang="ts">
import MobileMenu from "~/components/layout/MobileMenu.vue";

const links = [
  {
    label: 'Accueil',
    to: '/',
  },
  {
    label: 'À propos',
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
    <div class="mx-auto flex max-w-7xl items-center justify-between md:grid md:grid-cols-3">

      <!-- LOGO -->
      <div class="flex items-center">
        <NuxtLink to="/" class="text-xl font-bold tracking-tighter group">
          <span class="text-gradient">TOM</span>
          <span class="text-white/50 group-hover:text-white transition">
            .DEV
          </span>
        </NuxtLink>
      </div>

      <!-- NAV (desktop only, center) -->
      <div class="hidden md:flex justify-center">
        <nav class="glass-morphism flex items-center gap-1 rounded-full px-2 py-1">
          <NuxtLink
              v-for="link in links"
              :key="link.label"
              :to="link.to"
              class="rounded-full px-4 py-2 text-sm text-zinc-300 hover:text-white relative group whitespace-nowrap"
              active-class="bg-primary/20 text-white"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>

      <!-- ICONS (desktop only, right) -->
      <div class="hidden md:flex justify-end gap-4">
        <a
            v-for="social in [
            { icon: 'ph:github-logo-bold', href: '#' },
            { icon: 'ph:linkedin-logo-bold', href: '#' },
            { icon: 'ph:twitter-logo-bold', href: '#' }
          ]"
            :key="social.icon"
            :href="social.href"
            class="glass-morphism w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-white/10 transition"
        >
          <Icon :name="social.icon" size="24" />
        </a>
      </div>

      <!-- MOBILE MENU (RIGHT FIXED) -->
      <div class="flex md:hidden justify-end">
        <MobileMenu :links="links" />
      </div>

    </div>
  </header>
</template>
<script setup lang="ts">
</script>

<template>
  <footer class="mt-32 border-t border-white/5 bg-bg-secondary/50 backdrop-blur-md">
    <div class="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-3">
      <!-- DESCRIPTION -->
      <div class="space-y-6">
        <NuxtLink to="/" class="text-2xl font-black tracking-tighter">
          <span class="text-gradient">TOM</span>.DEV
        </NuxtLink>
        <p class="max-w-sm text-sm leading-relaxed text-white/50">
          Créateur d'expériences numériques d'exception. 
          Passionné par l'innovation technique et le design minimaliste.
        </p>
      </div>

      <!-- NAVIGATION -->
      <div>
        <h4 class="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-8">
          Navigation
        </h4>
        <nav class="flex flex-col gap-4 text-sm font-medium">
          <NuxtLink v-for="link in [
            {label: 'Accueil', to: '/'},
            {label: 'À propos', to: '/about'},
            {label: 'CV', to: '/cv'},
            {label: 'Portfolios', to: '/portfolio'},
            {label: 'Contact', to: '/contact'}
          ]" :key="link.to" :to="link.to" class="text-white/40 transition hover:text-white flex items-center gap-2 group">
            <span class="w-0 h-px bg-primary transition-all duration-300 group-hover:w-4"></span>
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>

      <!-- RÉSEAUX -->
      <div>
        <h4 class="text-xs uppercase tracking-[0.2em] font-bold text-secondary mb-8">
          Connectons-nous
        </h4>
        <div class="flex gap-4">
          <a v-for="social in [
            {icon: 'ph:github-logo-bold', href: '#'},
            {icon: 'ph:linkedin-logo-bold', href: '#'},
            {icon: 'ph:twitter-logo-bold', href: '#'}
          ]" :key="social.icon" :href="social.href" class="glass-morphism w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
            <Icon :name="social.icon" size="24" />
          </a>
        </div>
      </div>
    </div>

    <!-- COPYRIGHT -->
    <div class="border-t border-white/5 py-10 text-center text-[10px] uppercase tracking-[0.3em] text-white/20">
      &copy; {{ new Date().getFullYear() }} — TOM.DEV — DESIGNED WITH PASSION
    </div>
  </footer>
</template>
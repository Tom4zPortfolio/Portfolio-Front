<script setup lang="ts">
const projects = [
  {
    title: 'Portfolio Personnel',
    description: 'Nuxt 3 + Symfony API + design glassmorphism',
    tags: ['Nuxt', 'Symfony', 'Tailwind']
  },
  {
    title: 'API Management',
    description: 'Backend REST sécurisé avec Symfony',
    tags: ['API', 'Symfony', 'JWT']
  },
  {
    title: 'UI System',
    description: 'Design system reusable pour projets futurs',
    tags: ['UI', 'Design', 'Components']
  }
]
</script>

<template>
  <section class="py-32 px-6 relative">
    <!-- Gradient transition top & bottom -->
    <div class="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-bg via-bg/80 to-transparent z-10 opacity-80"></div>
    <div class="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-bg via-bg/80 to-transparent z-10 opacity-80"></div>

    <div class="max-w-6xl mx-auto relative z-20">

      <div class="flex items-end justify-between">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-white">
            Projets récents
          </h2>
          <p class="mt-2 text-white/60">
            Aperçu de mes réalisations
          </p>
        </div>

        <NuxtLink to="/app/pages/portfolio" class="text-violet-400 hover:text-violet-300 transition">
          Voir tout →
        </NuxtLink>
      </div>

      <div class="mt-12 grid md:grid-cols-3 gap-6">

        <div
            v-for="project in projects"
            :key="project.title"
            class="group relative p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
        >
          <!-- Glow effect background -->
          <div class="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="h-48 rounded-2xl bg-gradient-to-br from-violet-600/10 to-fuchsia-500/10 border border-white/5 overflow-hidden relative">
            <div class="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <h3 class="mt-6 text-xl text-white font-bold group-hover:text-primary transition-colors">
            {{ project.title }}
          </h3>

          <p class="text-white/50 text-sm mt-3 leading-relaxed">
            {{ project.description }}
          </p>

          <div class="mt-6 flex gap-2 flex-wrap">
            <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40"
            >
              {{ tag }}
            </span>
          </div>

        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>
</style>

<style scoped>
</style>
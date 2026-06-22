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
  <section class="py-24 px-6">

    <div class="max-w-5xl mx-auto">

      <div class="flex items-end justify-between">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-white">
            Projets récents
          </h2>
          <p class="mt-2 text-white/60">
            Aperçu de mes réalisations
          </p>
        </div>

        <NuxtLink to="/portfolio" class="text-violet-400 hover:text-violet-300 transition">
          Voir tout →
        </NuxtLink>
      </div>

      <div class="mt-12 grid md:grid-cols-3 gap-6">

        <div
            v-for="project in projects"
            :key="project.title"
            class="project-card"
        >

          <div class="h-40 rounded-xl bg-gradient-to-br from-violet-600/20 to-fuchsia-500/20 border border-white/10" />

          <h3 class="mt-4 text-white font-semibold">
            {{ project.title }}
          </h3>

          <p class="text-white/50 text-sm mt-2">
            {{ project.description }}
          </p>

          <div class="mt-4 flex gap-2 flex-wrap">
            <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/60"
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
@reference "tailwindcss";
.project-card {
  @apply p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md
  hover:bg-white/10 hover:border-violet-500/30 transition;
}
</style>

<style scoped>

</style>
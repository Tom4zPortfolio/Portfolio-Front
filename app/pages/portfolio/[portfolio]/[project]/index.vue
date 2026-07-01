<script setup lang="ts">
const route = useRoute()

const { getProject } = useProjects()
const { getPortfolio } = usePortfolios()

const portfolioSlug = computed(() =>
    route.params.portfolio as string
)

const projectSlug = computed(() =>
    route.params.project as string
)

const project = computed(() =>
    getProject(portfolioSlug.value, projectSlug.value)
)

const portfolio = computed(() =>
    getPortfolio(portfolioSlug.value)
)
</script>

<template>
  <div v-if="project" class="pb-32">

    <!-- HERO -->
    <section class="relative">

      <div class="aspect-[21/9] w-full overflow-hidden">
        <img
            :src="project.cover"
            class="w-full h-full object-cover"
        />
      </div>

      <div class="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent"></div>

      <div class="absolute bottom-10 left-0 w-full">
        <div class="container mx-auto px-6">

          <h1 class="text-4xl md:text-6xl font-black">
            {{ project.title }}
          </h1>

          <p class="mt-4 text-white/60 text-lg">
            {{ project.subtitle }}
          </p>

        </div>
      </div>

    </section>

    <!-- INFOS -->
    <section class="container mx-auto px-6 mt-16">

      <div class="grid md:grid-cols-3 gap-8">

        <!-- LEFT -->
        <div class="md:col-span-2">

          <h2 class="text-xl font-bold mb-4">
            À propos du projet
          </h2>

          <p class="text-white/60 leading-relaxed">
            {{ project.description }}
          </p>

        </div>

        <!-- RIGHT -->
        <div class="glass-card rounded-3xl p-6">

          <h3 class="font-bold mb-4">
            Informations
          </h3>

          <div class="space-y-4 text-sm text-white/60">

            <div>
              <p class="text-white/40">Type</p>
              <p>{{ project.type }}</p>
            </div>

            <div>
              <p class="text-white/40">Date</p>
              <p>{{ new Date(project.uploadedAt).toLocaleDateString() }}</p>
            </div>

            <div>
              <p class="text-white/40">Portfolio</p>
              <p>{{ portfolio?.title }}</p>
            </div>

          </div>

        </div>

      </div>

    </section>

    <!-- STACK -->
    <section class="container mx-auto px-6 mt-20">

      <h2 class="text-xl font-bold mb-6">
        Technologies utilisées
      </h2>

      <div class="flex flex-wrap gap-3">

        <span
            v-for="tech in project.technologies"
            :key="tech"
            class="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70"
        >
          {{ tech }}
        </span>

      </div>

    </section>

    <!-- NAVIGATION -->
    <section class="container mx-auto px-6 mt-24">

      <div class="flex justify-between items-center">

        <NuxtLink
            :to="`/portfolio/${portfolioSlug}`"
            class="text-white/50 hover:text-white transition"
        >
          ← Retour au portfolio
        </NuxtLink>

      </div>

    </section>

  </div>

  <!-- EMPTY -->
  <div v-else class="text-center py-40 text-white/40">
    Projet introuvable
  </div>
</template>
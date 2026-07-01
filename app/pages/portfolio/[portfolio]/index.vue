<script setup lang="ts">
import {usePortfolios} from "~/composables/usePortfolios";
import {useProjects} from "~/composables/useProjects";
import PageHeader from "../../../components/layout/PageHeader.vue";
import ProjectCard from "~/components/portfolio/ProjectCard.vue";

const route = useRoute()

const { getPortfolio } = usePortfolios()
const { getProjects } = useProjects()

const portfolioSlug = computed(() =>
    route.params.portfolio as string
)

const portfolio = computed(() =>
    getPortfolio(portfolioSlug.value)
)

const projects = computed(() =>
    getProjects(portfolioSlug.value)
)

const featuredProject = computed(() =>
    projects.value.find(p => p.featured)
)

const otherProjects = computed(() =>
    projects.value.filter(p => !p.featured)
)
</script>

<template>
  <div class="pt-32">

    <!-- HEADER -->
    <PageHeader
        v-if="portfolio"
        :title="portfolio.title"
        :description="portfolio.description"
    />


    <!-- FEATURED PROJECT -->
    <section v-if="featuredProject" class="container mx-auto px-6 mb-20">

      <h2 class="text-sm uppercase tracking-widest text-white/40 mb-6">
        Projet à la une
      </h2>

      <div class="glass-card rounded-3xl overflow-hidden group">

        <div class="grid md:grid-cols-2">

          <!-- image -->
          <div class="relative aspect-video overflow-hidden">

            <img
                :src="featuredProject.cover"
                class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent"></div>

          </div>

          <!-- content -->
          <div class="p-10 flex flex-col justify-center">

            <h3 class="text-3xl font-black">
              {{ featuredProject.title }}
            </h3>

            <p class="mt-4 text-white/60">
              {{ featuredProject.subtitle }}
            </p>

            <p class="mt-6 text-white/50 leading-relaxed">
              {{ featuredProject.description }}
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
              <span
                  v-for="tech in featuredProject.technologies"
                  :key="tech"
                  class="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10"
              >
                {{ tech }}
              </span>
            </div>

            <div class="mt-8">
              <NuxtLink
                  :to="`/portfolio/${portfolioSlug}/${featuredProject.slug}`"
                  class="text-primary font-bold inline-flex items-center gap-2 group"
              >
                Voir le projet
                <Icon name="ph:arrow-right-bold" />
              </NuxtLink>
            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- PROJECTS GRID -->
    <section class="container mx-auto px-6">

      <h2 class="text-sm uppercase tracking-widest text-white/40 mb-10">
        Tous les projets
      </h2>

      <div
          v-if="otherProjects.length"
          class="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
      >

        <ProjectCard
            v-for="project in otherProjects"
            :key="project.id"
            :project="project"
            :portfolioSlug="portfolioSlug"
        />

      </div>

      <!-- EMPTY STATE -->
      <div v-else class="text-center py-20 text-white/40">
        Aucun projet pour ce portfolio.
      </div>

    </section>

  </div>
</template>
<script setup lang="ts">
import type { Project } from "~/types/portfolio";

const props = defineProps<{
  project: Project
  portfolioSlug: string
}>()
</script>

<template>
  <NuxtLink
      :to="`/portfolio/${portfolioSlug}/${project.slug}`"
      class="group block"
  >
    <article
        class="glass-card rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
    >

      <!-- IMAGE -->
      <div class="relative aspect-[16/10] overflow-hidden">

        <img
            :src="project.cover"
            class="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        <!-- overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent"></div>

        <!-- type badge -->
        <div class="absolute top-4 left-4">
          <span class="px-3 py-1 text-xs rounded-full bg-black/40 border border-white/10 text-white/70 backdrop-blur">
            {{ project.type }}
          </span>
        </div>

      </div>

      <!-- CONTENT -->
      <div class="p-6">

        <h3 class="text-xl font-bold">
          {{ project.title }}
        </h3>

        <p class="mt-2 text-white/50 text-sm">
          {{ project.subtitle }}
        </p>

        <p class="mt-4 text-white/40 text-sm leading-relaxed line-clamp-2">
          {{ project.description }}
        </p>

        <!-- TECH -->
        <div class="mt-5 flex flex-wrap gap-2">
          <span
              v-for="tech in project.technologies.slice(0, 3)"
              :key="tech"
              class="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
          >
            {{ tech }}
          </span>

          <span
              v-if="project.technologies.length > 3"
              class="text-xs text-white/40"
          >
            +{{ project.technologies.length - 3 }}
          </span>
        </div>

        <!-- FOOTER -->
        <div class="mt-6 flex items-center justify-between">

          <span class="text-xs text-white/40">
            {{ new Date(project.uploadedAt).toLocaleDateString() }}
          </span>

          <span class="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
            Voir
            <Icon name="ph:arrow-right-bold" />
          </span>

        </div>

      </div>

    </article>
  </NuxtLink>
</template>
<script setup lang="ts">
import type { Portfolio } from "~/types/portfolio";

defineProps<{
  portfolio: Portfolio;
}>();
</script>

<template>
  <NuxtLink
      :to="`/portfolio/${portfolio.slug}`"
      class="group block h-full"
  >
    <article
        class="glass-card overflow-hidden rounded-[2rem] h-full flex flex-col transition-all duration-500 hover:-translate-y-2"
    >
      <!-- Cover -->
      <div class="relative aspect-[16/10] overflow-hidden">

        <img
            :src="portfolio.cover"
            :alt="portfolio.title"
            class="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        >

        <div class="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent"></div>

        <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br"
            :class="portfolio.color"
            style="mix-blend-mode:overlay"
        ></div>

      </div>

      <!-- Content -->
      <div class="flex flex-col flex-1 p-8">

        <div
            class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 transition duration-500 group-hover:scale-110 group-hover:border-primary/40"
        >
          <Icon
              :name="portfolio.icon"
              size="34"
              class="text-primary"
          />
        </div>

        <h2 class="text-2xl font-black">
          {{ portfolio.title }}
        </h2>

        <p class="mt-4 text-white/60 leading-relaxed flex-1">
          {{ portfolio.description }}
        </p>

        <div class="mt-8 flex items-center justify-between">

          <span
              v-if="portfolio.projectCount"
              class="text-sm text-white/40"
          >
            {{ portfolio.projectCount }} projets
          </span>

          <span
              class="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all"
          >
            Explorer

            <Icon
                name="ph:arrow-right-bold"
            />

          </span>

        </div>

      </div>

    </article>
  </NuxtLink>
</template>
<script setup lang="ts">
const watching = [
  {
    title: "Frontend",
    items: ["Vue", "Nuxt", "Tailwind", "Figma"]
  },
  {
    title: "Backend",
    items: ["Symfony", "PHP", "JS", "Java"]
  },
  {
    title: "Tools",
    items: ["Jetbrain", "Vite", "Docker"]
  },
  {
    title: "Autre",
    items: ["AI tooling", "new tech", "Cyber Security"]
  }
]

const sources = [
  "Daily.dev",
  "Dev.to",
  "YouTube channels",
  "Tech blogs",
]
</script>

<template>
  <section class="py-32 px-6 relative overflow-hidden">

    <!-- glow -->
    <div class="absolute inset-0 flex justify-center">
      <div class="w-[650px] h-[650px] bg-secondary/10 blur-[160px] rounded-full"></div>
    </div>

    <div class="max-w-6xl mx-auto relative z-10">

      <!-- HEADER -->
      <div class="text-center mb-20">
        <h2 class="text-5xl font-black">
          Veille <span class="text-gradient">technologique</span>
        </h2>

        <p class="mt-6 text-white/60 max-w-2xl mx-auto">
          J’accorde du temps à la veille pour suivre l’évolution de l’écosystème web.
        </p>
      </div>

      <!-- DASHBOARD -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div
            v-for="block in watching"
            :key="block.title"
            class="glass-card p-6 rounded-3xl group hover:border-primary/40 transition relative overflow-hidden"
        >

          <!-- glow hover -->
          <div class="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition"></div>

          <div class="relative">

            <h3 class="text-xl font-bold mb-4">
              {{ block.title }}
            </h3>

            <div class="flex flex-wrap gap-2">
            <span
                v-for="item in block.items"
                :key="item"
                class="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-white/70"
            >
              {{ item }}
            </span>
            </div>

          </div>

        </div>

      </div>

      <!-- SOURCES -->
      <div class="mt-16 text-center">

        <h3 class="text-lg font-bold mb-4 text-white/70">
          Sources de veille
        </h3>

        <div class="flex flex-wrap justify-center gap-3">

        <span
            v-for="src in sources"
            :key="src"
            class="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-white/50"
        >
          {{ src }}
        </span>

        </div>

      </div>

    </div>
  </section>
</template>
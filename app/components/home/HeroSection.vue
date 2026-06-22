<script setup lang="ts">

</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">

    <!-- background glow -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-1/2 w-[500px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full" />
      <div class="absolute bottom-10 right-10 w-[400px] h-[400px] bg-fuchsia-500/20 blur-[120px] rounded-full" />
    </div>

    <!-- content -->
    <div class="relative z-10 text-center max-w-3xl px-6">

      <div class="inline-flex px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-white/70">
        Apprenti Développeur - BAC+4
      </div>

      <h1 class="mt-6 text-5xl md:text-7xl font-bold text-white leading-tight">
        Thomas
        <span class="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
          Gourlaouen
        </span>
      </h1>

      <p class="mt-6 text-white/60 text-lg">
        Développeur | Passionné du monde informatique et technologique
      </p>

      <div class="mt-10 flex gap-4 justify-center">
        <NuxtLink
            to="/portfolio"
            class="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 transition text-white"
        >
          Voir mes projets
        </NuxtLink>

        <NuxtLink
            to="/contact"
            class="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition text-white"
        >
          Me contacter
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<style scoped>

</style>
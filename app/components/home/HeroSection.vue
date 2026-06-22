<script setup lang="ts">

</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
    <!-- content -->
    <div class="relative z-10 text-center max-w-4xl px-6">

      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism text-sm text-primary animate-bounce-slow">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        Disponible pour de nouveaux projets
      </div>

      <h1 class="mt-8 text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">
        DESIGNER <br/>
        <span class="text-gradient">& DÉVELOPPEUR</span>
      </h1>

      <p class="mt-8 text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        Je crée des expériences numériques immersives et performantes, 
        alliant <span class="text-white font-medium">créativité</span> et <span class="text-white font-medium">technologie</span>.
      </p>

      <div class="mt-12 flex flex-wrap gap-6 justify-center">
        <NuxtLink
            to="/portfolio"
            class="px-8 py-4 rounded-full bg-primary text-white font-bold hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 transform hover:scale-105"
        >
          Découvrir mes projets
        </NuxtLink>

        <NuxtLink
            to="/contact"
            class="px-8 py-4 rounded-full glass-morphism border border-white/10 hover:bg-white/5 transition-all duration-300 font-medium"
        >
          Me contacter
        </NuxtLink>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <div class="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-bounce-slow {
  animation: bounce 3s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>
<script setup lang="ts">

</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
    <!-- Overlay graduel pour la transition basse -->
    <div class="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-bg via-bg/80 to-transparent z-20"></div>

    <!-- content -->
    <div class="relative z-10 text-center max-w-4xl px-6">

      <div class="relative inline-block animate-float-slow">
        <!-- Effet d'onde futuriste -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] aspect-square -z-10 pointer-events-none flex items-center justify-center">
          <div class="ripple"></div>
          <div class="ripple ripple-delay-1"></div>
          <div class="ripple ripple-delay-2"></div>
          <!-- Halo central discret -->
          <div class="absolute w-1/2 h-1/2 bg-primary/10 rounded-full blur-[100px]"></div>
        </div>

        <h1 class="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter relative z-10">
          DESIGNER <br/>
          <span class="text-gradient">& DÉVELOPPEUR</span>
        </h1>
      </div>

      <p class="mt-8 text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        Je crée des expériences numériques immersives et performantes, 
        alliant <span class="text-white font-medium">créativité</span> et <span class="text-white font-medium">technologie</span>.
      </p>

      <div class="mt-12 flex flex-wrap gap-6 justify-center">
        <NuxtLink
            to="/portfolio"
            class="px-8 py-4 rounded-full bg-primary text-white font-bold hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 transform hover:scale-105 animate-glow-pulse"
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

    </div>
  </section>
</template>

<style scoped>
.ripple {
  position: absolute;
  border-radius: 9999px;
  border: 1px solid rgba(139, 92, 246, 0.2);
  width: 20%;
  aspect-ratio: 1/1;
  opacity: 0;
  animation: ripple-animation 4s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.ripple-delay-1 {
  animation-delay: 1.3s;
}

.ripple-delay-2 {
  animation-delay: 2.6s;
}

@keyframes ripple-animation {
  0% {
    width: 20%;
    opacity: 0;
  }
  20% {
    opacity: 0.4;
  }
  100% {
    width: 100%;
    opacity: 0;
  }
}

.animate-float-slow {
  animation: float 8s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.animate-glow-pulse {
  animation: glow-pulse 4s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.2); }
  50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.4); }
}
</style>
<template>
  <section class="relative py-28 px-6 overflow-hidden">

    <!-- background animated blobs -->
    <div class="absolute inset-0">
      <div class="blob blob-1" />
      <div class="blob blob-2" />
    </div>

    <!-- content -->
    <div
        class="relative z-10 max-w-4xl mx-auto text-center"
        :class="{ 'opacity-100 translate-y-0': visible, 'opacity-0 translate-y-6': !visible }"
    >

      <h2 class="text-4xl md:text-5xl font-bold text-white transition-all duration-700">
        On construit quelque chose ensemble ?
      </h2>

      <p class="mt-5 text-white/60 text-lg max-w-2xl mx-auto">
        Je suis disponible pour des projets freelance ou opportunités full-stack.
        Créons une expérience web moderne et performante.
      </p>

      <!-- buttons -->
      <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

        <NuxtLink
            to="/contact"
            class="cta-button primary"
        >
          Me contacter
        </NuxtLink>

        <NuxtLink
            to="/portfolio"
            class="cta-button secondary"
        >
          Voir mes projets
        </NuxtLink>

      </div>

    </div>

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)

onMounted(() => {
  setTimeout(() => {
    visible.value = true
  }, 150)
})
</script>

<style scoped>
@reference "tailwindcss";
/* ===== CTA BUTTON BASE ===== */
.cta-button {
  @apply px-6 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden;
}

/* PRIMARY BUTTON (magenta glow) */
.primary {
  @apply bg-violet-600 text-white shadow-lg shadow-violet-600/20;
}

.primary:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 10px 40px rgba(139, 92, 246, 0.35);
}

/* SECONDARY GLASS BUTTON */
.secondary {
  @apply bg-white/5 border border-white/10 text-white backdrop-blur-md;
}

.secondary:hover {
  transform: translateY(-2px) scale(1.03);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(139, 92, 246, 0.3);
}

/* ===== BACKGROUND BLOBS ===== */
.blob {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 9999px;
  filter: blur(120px);
  opacity: 0.25;
  animation: float 10s ease-in-out infinite;
}

.blob-1 {
  top: -100px;
  left: -100px;
  background: #8b5cf6;
}

.blob-2 {
  bottom: -120px;
  right: -120px;
  background: #d946ef;
  animation-delay: 2s;
}

/* ===== ANIMATION FLOAT ===== */
@keyframes float {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -20px) scale(1.1); }
  100% { transform: translate(0, 0) scale(1); }
}

/* ===== SOFT ENTRY ===== */
section {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
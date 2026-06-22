<script setup lang="ts">
</script>
<template>
  <section class="py-24 px-6 relative">

    <div class="max-w-5xl mx-auto">

      <div class="glass-container">

        <!-- LEFT -->
        <div class="flex flex-col justify-center">

          <h2 class="text-3xl md:text-4xl font-bold text-white">
            À propos
          </h2>

          <p class="mt-6 text-white/60 leading-relaxed">
            Concepteur & développeur d'application
          </p>

          <p class="mt-4 text-white/60 leading-relaxed">
            J’aime concevoir des interfaces propres, performantes et bien structurées,
            avec une attention particulière à l’UX et à la qualité du code.
          </p>

          <p class="mt-4 text-white/60 leading-relaxed">
            Mon objectif est de construire des applications modernes, utiles et maintenables.
          </p>

          <div class="mt-8">
            <NuxtLink to="/about" class="cta-button">
              En savoir plus
            </NuxtLink>
          </div>

        </div>

        <!-- RIGHT (visual / code card) -->
        <div class="code-card">

          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>

          <pre class="text-white/70 text-sm leading-relaxed">
<code>
const developer = {
  name: "Thomas Gourlaouen",
  role: "Full Stack Developer",
  stack: ["PHP", "JAVA", "Javascript", "..."],
  focus: "Clean UI & scalable APIs",
  goal: "Build useful web apps"
}
</code>
          </pre>

        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>
@reference "tailwindcss";

.glass-container {
  @apply grid md:grid-cols-2 gap-10 p-8 rounded-2xl;
  @apply bg-white/5 border border-white/10 backdrop-blur-md;
}

.cta-button {
  @apply px-6 py-3 rounded-xl bg-violet-600 text-white;
  @apply hover:bg-violet-500 transition;
  box-shadow: 0 10px 40px rgba(139, 92, 246, 0.25);
}

.code-card {
  @apply rounded-md bg-black/40 border border-white/10 overflow-hidden;
}

.code-header {
  @apply flex gap-2 p-3 border-b border-white/10;
}

.dot {
  @apply w-3 h-3 rounded-full;
}

.red { background: #ef4444; }
.yellow { background: #f59e0b; }
.green { background: #22c55e; }

pre {
  @apply p-6;
}
</style>
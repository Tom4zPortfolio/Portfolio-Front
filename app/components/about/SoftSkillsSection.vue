<script setup lang="ts">
const softSkills = [
  {
    title: "Autonomie",
    description: "Je suis capable d’avancer efficacement sur un projet sans dépendance constante.",
    icon: "ph:user-focus-bold"
  },
  {
    title: "Esprit d’équipe",
    description: "J’aime collaborer et échanger pour construire des solutions plus solides.",
    icon: "ph:users-three-bold"
  },
  {
    title: "Résolution de problèmes",
    description: "J’analyse rapidement une situation pour trouver des solutions simples et efficaces.",
    icon: "ph:lightbulb-bold"
  },
  {
    title: "Communication",
    description: "J’explique clairement des sujets techniques, même à des non-développeurs.",
    icon: "ph:chats-teardrop-bold"
  },
  {
    title: "Curiosité",
    description: "J’aime explorer de nouvelles technologies et comprendre comment les choses fonctionnent.",
    icon: "ph:compass-bold"
  },
  {
    title: "Esprit d’analyse",
    description: "Je prends du recul sur les problèmes pour identifier les causes et proposer des solutions adaptées.",
    icon: "ph:chart-line-bold"
  },
  {
    title: "Adaptabilité",
    description: "Je m’adapte rapidement à de nouveaux contextes, outils et contraintes de projet.",
    icon: "ph:arrows-clockwise-bold"
  },
  {
    title: "Créativité",
    description: "Je cherche des solutions simples, efficaces et parfois différentes des approches classiques.",
    icon: "ph:paint-brush-bold"
  }
]
</script>

<template>
  <section class="py-32 px-6 relative overflow-hidden">

    <!-- glow -->
    <div class="absolute inset-0 flex justify-center">
      <div class="w-[500px] h-[500px] bg-primary/10 blur-[140px] rounded-full"></div>
    </div>

    <div class="max-w-5xl mx-auto relative z-10">

      <!-- HEADER -->
      <div class="text-center mb-20">
        <h2 class="text-5xl font-black">
          Soft <span class="text-gradient">Skills</span>
        </h2>

        <p class="mt-6 text-white/60 max-w-2xl mx-auto">
          Ce qui définit ma manière de travailler au-delà du code.
        </p>
      </div>

      <!-- GRID -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div
            v-for="skill in softSkills"
            :key="skill.title"
            class="glass-card p-6 rounded-3xl group hover:border-primary/40 transition relative overflow-hidden"
        >

          <!-- glow hover -->
          <div class="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition"></div>

          <div class="relative flex items-start gap-4">

            <div class="p-3 rounded-2xl bg-white/5 border border-white/10">
              <Icon :name="skill.icon" class="text-primary" size="22" />
            </div>

            <div>
              <h3 class="text-xl font-bold">
                {{ skill.title }}
              </h3>

              <p class="mt-2 text-white/60 leading-relaxed">
                {{ skill.description }}
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>
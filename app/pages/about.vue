<script setup lang="ts">
import PresentationSection from "~/components/about/PresentationSection.vue";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Thomas Gourlaouen",
  "jobTitle": "Développeur Fullstack",
  "url": "https://tom.dev/about",
  "sameAs": [
    "https://github.com/thomas",
    "https://linkedin.com/in/thomas"
  ],
  "knowsAbout": ["Web Development", "UI/UX Design", "Vue.js", "Nuxt.js", "TypeScript"]
}

useHead({
  title: 'À Propos | Tom.dev',
  meta: [
    { name: 'description', content: 'En savoir plus sur mon parcours, mes compétences en développement web et mon approche créative.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(jsonLd)
    }
  ]
})

const hardSkills = [
  { name: 'Vue.js / Nuxt', icon: 'logos:nuxt-icon', category: 'Frontend' },
  { name: 'React / Next.js', icon: 'logos:react', category: 'Frontend' },
  { name: 'TypeScript', icon: 'logos:typescript-icon', category: 'Language' },
  { name: 'Node.js', icon: 'logos:nodejs-icon', category: 'Backend' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', category: 'Design' },
  { name: 'PostgreSQL', icon: 'logos:postgresql', category: 'Database' },
  { name: 'Docker', icon: 'logos:docker-icon', category: 'DevOps' },
  { name: 'Git', icon: 'logos:git-icon', category: 'Tools' },
]

const softSkills = [
  { name: 'Autonomie', description: 'Capacité à gérer des projets de manière indépendante.', icon: 'ph:user-focus-bold' },
  { name: 'Travail en équipe', description: 'Collaboration efficace au sein de groupes multidisciplinaires.', icon: 'ph:users-three-bold' },
  { name: 'Résolution de problèmes', description: 'Approche analytique pour surmonter les défis techniques.', icon: 'ph:lightbulb-bold' },
  { name: 'Communication', description: 'Aisance à expliquer des concepts techniques complexes.', icon: 'ph:chats-teardrop-bold' },
]

const stats = [
  { label: 'Projets Terminés', value: '15+' },
  { label: 'Années d\'Expérience', value: '3' },
  { label: 'Technologies Maîtrisées', value: '12' },
]
</script>

<template>
  <div class="pt-32 pb-20 overflow-hidden">
    <!-- Hero Header -->
    <section class="container mx-auto px-6 mb-20 py-20 text-center">
      <h1 class="text-5xl md:text-7xl font-black mb-6">
        <span class="text-gradient">À PROPOS</span> DE MOI

      </h1>
      <p class="text-white/60 text-lg max-w-2xl mx-auto">
        Découvrez mon univers, mes compétences techniques et mon approche du développement web.
      </p>
    </section>

    <!-- Presentation Section -->
    <PresentationSection :stats="stats" :softSkills="softSkills "/>
    <!-- Hard Skills Section -->
    <section class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">Expertise <span class="text-primary">Technique</span></h2>
        <div class="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div 
          v-for="skill in hardSkills" 
          :key="skill.name"
          class="glass-card group p-6 rounded-2xl text-center flex flex-col items-center justify-center gap-4 hover:bg-primary/5 transition-all duration-500"
        >
          <div class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <Icon :name="skill.icon" size="36" />
          </div>
          <div>
            <div class="font-bold text-white">{{ skill.name }}</div>
            <div class="text-[10px] text-white/30 uppercase tracking-[0.2em] mt-1">{{ skill.category }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


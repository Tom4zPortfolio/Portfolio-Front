<script setup lang="ts">
import PresentationSection from "~/components/about/PresentationSection.vue";
import TechStackSection from "~/components/home/TechStackSection.vue";

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
    <TechStackSection/>
    <!-- Veille Section -->


  </div>
</template>


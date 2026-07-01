<script setup lang="ts">
import HobbySection from "~/components/about/HobbySection.vue";
import SoftSkillsSection from "~/components/about/SoftSkillsSection.vue";
import TechWatchSection from "~/components/about/TechWatchSection.vue";

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
      // children: JSON.stringify(jsonLd)
    }
  ]
})

</script>

<template>
  <div class="pt-32 overflow-hidden">

    <AboutHeroSection />
    <SoftSkillsSection />
    <HobbySection />
    <TechWatchSection />
  </div>
</template>


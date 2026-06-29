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
    <section class="container mx-auto px-6 mb-20 py-20 text-center">
      <h1 class="text-5xl md:text-7xl font-black mb-6">
        <span class="text-gradient">À PROPOS</span> DE MOI

      </h1>
      <p class="text-white/60 text-lg max-w-2xl mx-auto">
        Découvrez mon univers, mes compétences techniques et mon approche du développement web.
      </p>
    </section>
    <AboutHeroSection />
    <SoftSkillsSection />
    <HobbySection />
    <TechWatchSection />
  </div>
</template>


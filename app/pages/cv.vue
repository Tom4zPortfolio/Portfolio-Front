<script setup lang="ts">
import TimelineSection from "~/components/cv/TimelineSection.vue";

useHead({
  title: 'CV | Tom.dev',
  meta: [
    { name: 'description', content: 'Mon parcours académique et mes expériences professionnelles en tant que développeur.' }
  ]
})

const education = [
  {
    title: "Mastère - Bac+5 - Expert en Architecture & Développement Logicel",
    institution: "ENI - Quimper",
    period: "2026 - 2027",
    description: "Spécialisation en développement logiciel avancé, architecture système et gestion de projet agile.",
    skills: ["Architecture", "Management", "DevOps"]
  },
  {
    title: "Titre Pro - Bac+4 - Concepteur Développeur d'Applications",
    institution: "ENI - Quimper",
    period: "2024 - 2026",
    description: "Apprentissage approfondi des frameworks web, des bases de données et des méthodes de conception logicielle.",
    skills: ["Fullstack", "Agile", "UML", "JAVA", "Gestion de Projet", "SQL"]
  },
  {
    title: "BTS SIO - Bac+2 - Option SLAM",
    institution: "Pôle BTS Alternance - Brest",
    period: "2022 - 2024",
    description: "Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métier.",
    skills: ["C#", "SQL", "Web", "PHP", "JAVA", "PYTHON", "CyberSécurité"]
  },
  {
    title: "BAC PRO SN - Option RISC",
    institution: "Lycée La croix rouge - Brest",
    period: "2016 - 2019",
    description: "Système Numérique, option Réseaux Informatique & Système Communiquant",
    skills: ["Linux", "Windows Server", "Protocole WEB", "Hardware", "VM"]
  }
]

const experience = [
  {
    role: "Développeur Web",
    company: "Association BDE - Les Etages Unis - Brest",
    period: "2023",
    tasks: [
      "Développement du site internet",
      "Développement Backend - Gestion des évènements",
      "Inscription - Génération pdf & QR code - Validation",
      "Statistiques évènementiel"
    ],
    tech: ["PHP", "Monolith", "Docker"]
  },
  {
    role: "Alternant Développeur",
    company: "CHR GROUP - ePackPro - Brest",
    period: "2022 - 2026",
    tasks: [
      "Développement & Intégration d'APIs",
      "Développement ioT",
      "Méthodes Agiles",
    ],
    tech: ["PHP - Symfony", "Nest JS", "Docker", "Clean Architecture", "ioT"]
  },
  {
    role: "Stagiaire Technicien Informatique",
    company: "Lycée de l'Elorn - Landerneau",
    period: "2019 (1 mois)",
    tasks: [
      "Apprentissage du développement WEB",
      "Maintenance informatique corrective et évolutive",
      "Gestion du parc informatique",
      "Assistance informatique"
    ],
    tech: ["React", "WordPress", "Tailwind"]
  }
]
</script>

<template>
  <div class="pt-32 pb-20">
    <section class="container mx-auto px-6 mb-20 py-20 text-center">
      <h1 class="text-5xl md:text-7xl font-black mb-6">
        MON <span class="text-gradient">PARCOURS</span>
      </h1>
      <p class="text-white/60 text-lg max-w-2xl mx-auto">
        Une rétrospective de ma formation académique et de mes expériences dans le monde professionnel.
      </p>
    </section>

    <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
      
      <!-- ÉTUDES -->
      <div>
        <h2 class="text-3xl font-bold mb-12 flex items-center gap-4">
          <div class="p-3 rounded-2xl bg-primary/20 text-primary">
            <Icon name="ph:graduation-cap-bold" size="32" />
          </div>
          Formation Académique
        </h2>

        <div class="relative border-l-2 border-primary/20 ml-6 space-y-12">
          <TimelineSection
              v-for="(item, index) in education"
              :key="index"
              variant="education"
              icon="ph:graduation-cap-bold"
              :title="item.title"
              :subtitle="item.institution"
              :period="item.period"
              :description="item.description"
              :badges="item.skills"
          />
        </div>
      </div>

      <!-- EXPÉRIENCES -->
      <div>
        <h2 class="text-3xl font-bold mb-12 flex items-center gap-4">
          <div class="p-3 rounded-2xl bg-secondary/20 text-secondary">
            <Icon name="ph:briefcase-bold" size="32" />
          </div>
          Expériences Pro
        </h2>

        <div class="relative border-l-2 border-secondary/20 ml-6 space-y-12">
          <TimelineSection
              v-for="(item, index) in experience"
              :key="index"
              variant="experience"
              icon="ph:briefcase-bold"
              :title="item.role"
              :subtitle="item.company"
              :period="item.period"
              :list="item.tasks"
              :badges="item.tech"
          />
        </div>
      </div>

    </div>
  </div>
</template>


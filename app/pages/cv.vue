<script setup lang="ts">
useHead({
  title: 'CV | Tom.dev',
  meta: [
    { name: 'description', content: 'Mon parcours académique et mes expériences professionnelles en tant que développeur.' }
  ]
})

const education = [
  {
    title: "Master 1 - Expert en Informatique et Systèmes d'Information",
    institution: "EPSI",
    period: "2024 - 2025",
    description: "Spécialisation en développement logiciel avancé, architecture système et gestion de projet agile.",
    skills: ["Architecture", "Management", "DevOps"]
  },
  {
    title: "Bachelor - Concepteur Développeur d'Applications",
    institution: "EPSI",
    period: "2023 - 2024",
    description: "Apprentissage approfondi des frameworks web, des bases de données et des méthodes de conception logicielle.",
    skills: ["Fullstack", "Agile", "UML"]
  },
  {
    title: "BTS SIO - Option SLAM",
    institution: "Lycée Saint-Louis",
    period: "2021 - 2023",
    description: "Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métier.",
    skills: ["C#", "SQL", "Web"]
  }
]

const experience = [
  {
    role: "Développeur Fullstack (Alternance)",
    company: "Entreprise Tech",
    period: "2023 - Présent",
    tasks: [
      "Développement de nouvelles fonctionnalités sur une application SaaS",
      "Optimisation des performances front-end avec Vue.js",
      "Mise en place de tests unitaires et d'intégration"
    ],
    tech: ["Vue 3", "Node.js", "Docker"]
  },
  {
    role: "Stagiaire Développeur Web",
    company: "Agence Digitale",
    period: "2023 (4 mois)",
    tasks: [
      "Création de sites vitrines sous WordPress et React",
      "Maintenance corrective et évolutive",
      "Optimisation SEO"
    ],
    tech: ["React", "WordPress", "Tailwind"]
  }
]
</script>

<template>
  <div class="pt-32 pb-20">
    <section class="container mx-auto px-6 mb-20 text-center">
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
          <div v-for="(item, index) in education" :key="index" class="relative pl-10 group">
            <!-- Dot -->
            <div class="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-bg border-2 border-primary group-hover:bg-primary transition-colors duration-300"></div>
            
            <div class="glass-card p-6 rounded-2xl group-hover:border-primary/50 transition-all duration-500">
              <span class="text-primary font-mono text-sm font-bold">{{ item.period }}</span>
              <h3 class="text-xl font-bold mt-1">{{ item.title }}</h3>
              <div class="text-white/50 text-sm mb-4">{{ item.institution }}</div>
              <p class="text-white/70 text-sm leading-relaxed mb-4">{{ item.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="skill in item.skills" :key="skill" class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
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
          <div v-for="(item, index) in experience" :key="index" class="relative pl-10 group">
            <!-- Dot -->
            <div class="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-bg border-2 border-secondary group-hover:bg-secondary transition-colors duration-300"></div>
            
            <div class="glass-card p-6 rounded-2xl group-hover:border-secondary/50 transition-all duration-500">
              <span class="text-secondary font-mono text-sm font-bold">{{ item.period }}</span>
              <h3 class="text-xl font-bold mt-1">{{ item.role }}</h3>
              <div class="text-white/50 text-sm mb-4">{{ item.company }}</div>
              
              <ul class="space-y-2 mb-6">
                <li v-for="task in item.tasks" :key="task" class="text-white/70 text-sm flex items-start gap-2">
                  <Icon name="ph:caret-right-bold" class="text-secondary mt-1 flex-shrink-0" />
                  {{ task }}
                </li>
              </ul>

              <div class="flex flex-wrap gap-2">
                <span v-for="tech in item.tech" :key="tech" class="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] uppercase tracking-wider">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


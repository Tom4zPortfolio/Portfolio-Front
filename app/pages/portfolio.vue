<script setup lang="ts">
useHead({
  title: 'Portfolios | Tom.dev',
  meta: [
    { name: 'description', content: 'Explorez mes différents portfolios : personnel, électronique et académique.' }
  ]
})

const portfolios = [
  {
    title: "Portfolio Personnel",
    description: "Mon univers créatif et mes projets personnels les plus ambitieux.",
    link: "#",
    icon: "ph:user-bold",
    color: "from-violet-500 to-purple-600"
  },
  {
    title: "Portfolio Électronique",
    description: "Projets hardware, IoT et systèmes embarqués réalisés avec passion.",
    link: "#",
    icon: "ph:cpu-bold",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Portfolio BTS",
    description: "Travaux réalisés durant mon BTS SIO (Solutions Logicielles).",
    link: "#",
    icon: "ph:code-bold",
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Portfolio BAC+4",
    description: "Projets de conception et développement d'applications avancées.",
    link: "#",
    icon: "ph:rocket-launch-bold",
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Portfolio BAC+5",
    description: "Expertise en systèmes d'information et management de projet.",
    link: "#",
    icon: "ph:strategy-bold",
    color: "from-fuchsia-500 to-pink-600"
  }
]
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center py-20 overflow-hidden relative">

    <section class="container mx-auto px-6 text-center mb-16 relative z-10">
      <h1 class="text-5xl md:text-7xl font-black mb-6">
        MES <span class="text-gradient">PORTFOLIOS</span>
      </h1>
      <p class="text-white/60 text-lg max-w-2xl mx-auto">
        Explorez mes différentes réalisations classées par thématique et niveau d'études.
      </p>
    </section>

    <!-- Cartes Centrales -->
    <section class="container mx-auto px-6 relative z-10">
      <div class="flex flex-wrap justify-center gap-8 lg:gap-12">
        <div
            v-for="p in portfolios"
            :key="p.title"
            class="glass-card group relative w-full md:w-[350px] aspect-[4/5] rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden cursor-pointer"
        >
          <!-- Background Gradient Glow -->
          <div class="absolute -inset-1 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10" :class="p.color"></div>

          <div class="relative">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 mb-6 group-hover:scale-110 transition-transform duration-500">
              <Icon :name="p.icon" size="40" class="text-white group-hover:text-primary transition-colors" />
            </div>
            <h2 class="text-2xl font-black mb-4 leading-tight">{{ p.title }}</h2>
            <p class="text-white/50 text-sm leading-relaxed">{{ p.description }}</p>
          </div>

          <NuxtLink :to="p.link" class="inline-flex items-center gap-2 text-sm font-bold group/btn">
            VOIR LE PORTFOLIO
            <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/btn:bg-primary transition-colors">
              <Icon name="ph:arrow-right-bold" size="16" />
            </div>
          </NuxtLink>

          <!-- Decorative element -->
          <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br opacity-5 blur-2xl rounded-full" :class="p.color"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.glass-card {
  perspective: 1000px;
}
</style>
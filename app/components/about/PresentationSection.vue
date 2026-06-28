<script setup lang="ts">
  interface Stat {
    label: string
    value: string
  }
  interface SoftSkill {
    name: string
    description: string
    icon: string
  }

  defineProps<{
    stats: Stat[]
    softSkills: SoftSkill[]
  }>()
</script>

<template>
  <section class="container mx-auto px-6 mb-32">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="glass-card p-8 rounded-3xl relative overflow-hidden group">
        <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Icon name="ph:user-circle-gear" size="120" class="text-primary" />
        </div>
        <h2 class="text-3xl font-bold mb-6 flex items-center gap-3">
          <Icon name="ph:identification-card-bold" class="text-primary" />
          Qui suis-je ?
        </h2>
        <div class="space-y-4 text-white/80 leading-relaxed">
          <p>
            Passionné par le développement web depuis mon plus jeune âge, je me suis spécialisé dans la création d'interfaces modernes et performantes. Mon parcours académique et mes expériences professionnelles m'ont permis d'acquérir une solide base technique et une vision globale du cycle de vie d'un projet numérique.
          </p>
          <p>
            Actuellement en formation BAC+4, j'allie rigueur technique et créativité pour transformer des idées complexes en solutions digitales élégantes. Je suis constamment en veille technologique pour rester à la pointe des dernières innovations du web.
          </p>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-3 gap-4 mt-10">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-2xl font-black text-primary">{{ stat.value }}</div>
            <div class="text-[10px] uppercase tracking-wider text-white/40">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6">
        <div v-for="skill in softSkills" :key="skill.name" class="glass-card p-6 rounded-2xl flex items-start gap-4 hover:border-primary/50">
          <div class="p-3 rounded-xl bg-primary/10 text-primary">
            <Icon :name="skill.icon" size="24" />
          </div>
          <div>
            <h3 class="font-bold text-lg mb-1">{{ skill.name }}</h3>
            <p class="text-sm text-white/50 leading-relaxed">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
<script setup lang="ts">

import { ref, onMounted } from 'vue'

const visible = ref(false)

onMounted(() => {
  setTimeout(() => {
    visible.value = true
  }, 150)
})

const techs = [
  { name: 'HTML - CSS', role: 'UI structure & styling' },
  { name: 'PHP', role: 'Backend web (server-side rendering, API)' },
  { name: 'JavaScript', role: 'Frontend / Backend logic (Node.js)' },
  { name: 'Java', role: 'Backend / applications enterprise' },
  { name: 'Python', role: 'Backend / scripting / data / API' },
  { name: 'C', role: 'Low-level systems programming' },
  { name: 'C#', role: 'Backend / desktop / .NET ecosystem' },
  { name: 'Dart', role: 'Cross-platform mobile (Flutter)' },
]

const environnements = [
  { name: 'Linux', role: 'Development & production servers' },
  { name: 'Windows', role: 'Development environment / desktop apps' },
  { name: 'Docker', role: 'Containerization & deployment' },
  { name: 'Kubernetes', role: 'Container orchestration' },
  { name: 'CI/CD (GitHub Actions, GitLab CI)', role: 'Automated testing & deployment' },
  { name: 'Node.js runtime', role: 'JavaScript backend execution' },
]

const db = [
  { name: 'PostgreSQL', role: 'Relational database (SQL, robust & scalable)' },
  { name: 'MySQL', role: 'Relational database (web applications)' },
  { name: 'MongoDB', role: 'NoSQL document database (flexible schema)' },
  { name: 'Redis', role: 'In-memory cache / session storage' },
]

</script>

<template>
  <section class="py-28 px-6 relative">

    <!-- HEADER -->
    <div
        class="max-w-5xl mx-auto text-center transition-all duration-700"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      <h2 class="text-3xl md:text-4xl font-bold text-white">
        Stack technique
      </h2>

      <p class="mt-3 text-white/60">
        Technologies, environnements et outils que j’utilise au quotidien
      </p>
    </div>

    <!-- GRID -->
    <div class="mt-14 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

      <!-- TECH -->
      <div class="stack-card">
        <h3 class="title">Technologies</h3>

        <div class="grid gap-3 mt-6">
          <div v-for="(tech, i) in techs" :key="tech.name"
               class="item"
               :style="{ transitionDelay: (i * 30) + 'ms' }"
               :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'"
          >
            <div class="name">{{ tech.name }}</div>
            <div class="role">{{ tech.role }}</div>
          </div>
        </div>
      </div>

      <!-- ENV -->
      <div class="stack-card">
        <h3 class="title">Environnements</h3>

        <div class="grid gap-3 mt-6">
          <div v-for="(env, i) in environnements" :key="env.name"
               class="item"
               :style="{ transitionDelay: (i * 30) + 'ms' }"
               :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'"
          >
            <div class="name">{{ env.name }}</div>
            <div class="role">{{ env.role }}</div>
          </div>
        </div>
      </div>

      <!-- DB -->
      <div class="stack-card">
        <h3 class="title">Bases de données</h3>

        <div class="grid gap-3 mt-6">
          <div v-for="(d, i) in db" :key="d.name"
               class="item"
               :style="{ transitionDelay: (i * 30) + 'ms' }"
               :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'"
          >
            <div class="name">{{ d.name }}</div>
            <div class="role">{{ d.role }}</div>
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<style scoped>
@reference "tailwindcss";
.stack-card {
  @apply p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md;
  @apply hover:bg-white/10 hover:border-violet-500/30 transition;
}

.title {
  @apply text-white font-semibold text-lg;
}

.item {
  @apply p-3 rounded-md bg-white/5 border border-white/10;
  @apply transition-all duration-500;
}

.item:hover {
  transform: translateY(-2px);
  border-color: rgba(139, 92, 246, 0.4);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.15);
}

.name {
  @apply text-white font-medium;
}

.role {
  @apply text-white/50 text-sm mt-1;
}
</style>

<style scoped>

</style>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const visible = ref(false)

onMounted(() => {
  setTimeout(() => {
    visible.value = true
  }, 150)
})

const categories = [
  {
    name: 'Frontend & Langages',
    items: [
      { name: 'HTML5', icon: 'logos:html-5' },
      { name: 'CSS3', icon: 'logos:css-3' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'Vue.js', icon: 'logos:vue' },
      { name: 'Nuxt', icon: 'logos:nuxt-icon' },
      { name: 'React', icon: 'logos:react' },
      { name: 'PHP', icon: 'logos:php' },
      { name: 'Java', icon: 'logos:java' },
      { name: 'Python', icon: 'logos:python' },
    ]
  },
  {
    name: 'Backend & Data',
    items: [
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'Symfony', icon: 'logos:symfony' },
      { name: 'Laravel', icon: 'logos:laravel' },
      { name: 'PostgreSQL', icon: 'logos:postgresql' },
      { name: 'MySQL', icon: 'logos:mysql' },
      { name: 'MongoDB', icon: 'logos:mongodb-icon' },
      { name: 'Redis', icon: 'logos:redis' },
    ]
  },
  {
    name: 'Outils & Env',
    items: [
      { name: 'Docker', icon: 'logos:docker-icon' },
      { name: 'Kubernetes', icon: 'logos:kubernetes' },
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'Linux', icon: 'logos:linux-tux' },
      { name: 'Figma', icon: 'logos:figma' },
      { name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
    ]
  }
]
</script>

<template>
  <section class="py-32 px-6 relative overflow-hidden">
    <!-- Fond décoratif plus subtil et fluide -->
    <div class="absolute inset-0 -z-10 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full animate-float"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full animate-float-slow"></div>
    </div>

    <!-- Dégradés de transition pour éviter les coupures abruptes -->
    <div class="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-bg via-bg/80 to-transparent z-10"></div>
    <div class="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-bg via-bg/80 to-transparent z-10"></div>

    <div class="max-w-6xl mx-auto relative z-20">
      <div
          class="text-center transition-all duration-1000"
          :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <h2 class="text-4xl md:text-5xl font-black text-white">
          Ma <span class="text-gradient">Stack Technique</span>
        </h2>
        <p class="mt-4 text-white/50 max-w-2xl mx-auto text-lg">
          Un écosystème d'outils performants pour donner vie à vos idées les plus ambitieuses.
        </p>
      </div>

      <div class="mt-20 space-y-16">
        <div v-for="(cat, idx) in categories" :key="cat.name" 
             class="transition-all duration-1000"
             :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
             :style="{ transitionDelay: (200 + idx * 100) + 'ms' }"
        >
          <h3 class="text-white/50 text-sm font-bold uppercase tracking-[0.3em] mb-8 text-center md:text-left flex items-center gap-4">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-primary/60"></span>
            </span>
            {{ cat.name }}
            <span class="h-[1px] flex-1 bg-gradient-to-r from-primary/30 to-transparent hidden md:block"></span>
          </h3>
          
          <div class="flex flex-wrap gap-4 justify-center md:justify-start">
            <div 
              v-for="(item, itemIdx) in cat.items" 
              :key="item.name"
              class="group relative flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/40 hover:bg-primary/[0.05] transition-all duration-500 hover:-translate-y-1"
              :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
              :style="{ transitionDelay: (400 + (idx * 150) + (itemIdx * 30)) + 'ms' }"
            >
              <Icon :name="item.icon" class="w-6 h-6 transition-all duration-500 transform group-hover:scale-110" />
              <span class="text-white/70 group-hover:text-white font-medium transition-colors">
                {{ item.name }}
              </span>
              
              <!-- Glow effect on hover -->
              <div class="absolute inset-0 -z-10 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.animate-float {
  animation: float 20s ease-in-out infinite;
}

.animate-float-slow {
  animation: float 25s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}
</style>
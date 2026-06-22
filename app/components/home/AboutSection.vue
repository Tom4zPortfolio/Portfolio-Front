<script setup lang="ts">
</script>
<template>
  <section class="py-24 px-6 relative">
    <div class="max-w-6xl mx-auto">
      <div class="glass-card grid md:grid-cols-2 gap-12 p-10 rounded-[2.5rem] items-center">
        <!-- LEFT -->
        <div class="flex flex-col justify-center">
          <h2 class="text-4xl md:text-5xl font-black text-white leading-tight">
            CONCEVOIR L'AVENIR <br/>
            <span class="text-gradient">LIGNE PAR LIGNE</span>
          </h2>

          <p class="mt-8 text-white/60 leading-relaxed text-lg">
            J’aime transformer des idées complexes en interfaces fluides et intuitives.
            Mon approche combine une rigueur technique absolue avec une sensibilité design moderne.
          </p>

          <div class="mt-10">
            <NuxtLink to="/about" class="px-8 py-4 rounded-full bg-primary text-white font-bold hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300 inline-block">
              En savoir plus sur moi
            </NuxtLink>
          </div>
        </div>

        <!-- RIGHT (visual / code card) -->
        <div class="rounded-3xl bg-black/60 border border-white/10 overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
          <div class="flex gap-2 p-4 border-b border-white/10 bg-white/5">
            <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <pre class="p-8 text-sm font-mono leading-relaxed group">
<code class="text-white/80">
<span class="text-primary">const</span> <span class="text-secondary">developer</span> = {
  name: <span class="text-accent">"Thomas Gourlaouen"</span>,
  role: <span class="text-accent">"Full Stack"</span>,
  passion: [<span class="text-accent">"UI/UX"</span>, <span class="text-accent">"Performance"</span>],
  tools: [<span class="text-accent">"Nuxt"</span>, <span class="text-accent">"Tailwind"</span>],
  focus: <span class="text-accent">"Clean & Minimal"</span>
}
</code>
          </pre>
        </div>
      </div>
    </div>
  </section>
</template>
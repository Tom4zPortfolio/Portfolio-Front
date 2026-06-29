<script setup lang="ts">
</script>
<template>
  <section class="py-24 px-6 relative">
    <!-- Gradient transition top & bottom -->
    <div class="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-bg via-bg/80 to-transparent z-10 opacity-80"></div>
    <div class="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-bg via-bg/80 to-transparent z-10 opacity-80"></div>
    
    <div class="max-w-6xl mx-auto">
      <div class="glass-card grid md:grid-cols-2 gap-12 p-10 md:p-16 rounded-[3rem] items-center relative overflow-hidden">
        <!-- Decoration inside card -->
        <div class="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[80px] rounded-full"></div>
        
        <!-- LEFT -->
        <div class="flex flex-col justify-center relative z-10">
          <h2 class="text-4xl md:text-5xl font-black text-white leading-tight">
            UNE CONCEPTION <br/>
            <span class="text-gradient">LIGNE PAR LIGNE</span>
          </h2>

          <p class="mt-8 text-white/60 leading-relaxed text-lg">
            Je conçois des solutions web complètes, en combinant développement frontend, backend et souci du détail pour offrir une expérience cohérente.
          </p>

          <div class="mt-10">
            <NuxtLink to="/about" class="px-8 py-4 rounded-full bg-primary text-white font-bold hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300 inline-block">
              En savoir plus sur moi
            </NuxtLink>
          </div>
        </div>

        <!-- RIGHT (visual / code card) -->
        <div class="relative group hidden md:block">
          <div class="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

          <div class="relative rounded-3xl bg-black/60 border border-white/10 overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">

            <!-- header -->
            <div class="flex gap-2 p-4 border-b border-white/10 bg-white/5">
              <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>

            <!-- code -->
            <pre class="p-8 text-sm font-mono leading-relaxed whitespace-pre-wrap break-words text-left overflow-hidden">
<code class="text-white/80 block">
<span class="text-primary">const</span> <span class="text-secondary">developer</span> = {
  name: <span class="text-accent">"Thomas Gourlaouen"</span>,
  role: <span class="text-accent">"Full-stack developer"</span>,
  builds: <span class="text-accent">"Web apps from frontend to backend"</span>,
  focus: [<span class="text-accent">"Frontend"</span>, <span class="text-accent">"Backend"</span>, <span class="text-accent">"UX"</span>],
  tools: [<span class="text-accent">"PhpStorm"</span>, <span class="text-accent">"DevTools"</span>]
}
</code>
    </pre>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

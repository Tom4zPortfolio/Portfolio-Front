<script setup lang="ts">
</script>
<template>
  <footer class="mt-32 border-t border-white/10">
    <div class="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3">
      <!-- Description -->

      <div>
        <h3 class="mb-4 text-xl font-semibold">Pierre.</h3>

        <p class="max-w-xs text-sm text-zinc-400">
          Développeur full-stack spécialisé dans la conception d'applications modernes et
          évolutives.
        </p>
      </div>

      <!-- Navigation -->

      <div>
        <h4 class="mb-4 text-sm font-medium">Navigation</h4>

        <div class="flex flex-col gap-3">
          <NuxtLink to="/"> Accueil </NuxtLink>

          <NuxtLink to="/about"> A propos </NuxtLink>

          <NuxtLink to="/cv"> Mon cv </NuxtLink>

          <NuxtLink to="/portfolio"> Portfolios </NuxtLink>

          <NuxtLink to="/contact"> Contact </NuxtLink>
        </div>
      </div>

      <!-- Social -->

      <div>
        <h4 class="mb-4 text-sm font-medium">Réseaux</h4>

        <div class="flex flex-col gap-3">
          <a href="#"> GitHub </a>

          <a href="#"> LinkedIn </a>

          <a href="#"> Malt </a>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10 py-6 text-center text-sm text-zinc-500">
      © 2026 Pierre — Tous droits réservés.
    </div>
  </footer>
</template>

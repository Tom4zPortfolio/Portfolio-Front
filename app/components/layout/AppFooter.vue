<script setup lang="ts">
</script>

<template>
  <footer class="mt-32 border-t border-white/10">

    <div class="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-3">

      <!-- DESCRIPTION -->
      <div>
        <h3 class="text-xl font-semibold tracking-tight">
          Thomas.
        </h3>

        <p class="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
          Développeur full-stack spécialisé dans la conception d’applications modernes,
          performantes et évolutives.
        </p>
      </div>

      <!-- NAVIGATION -->
      <div>
        <h4 class="text-sm font-medium text-zinc-400">
          Navigation
        </h4>

        <div class="mt-4 flex flex-col gap-3 text-sm">
          <NuxtLink class="text-zinc-400 transition hover:text-white" to="/">
            Accueil
          </NuxtLink>

          <NuxtLink class="text-zinc-400 transition hover:text-white" to="/about">
            À propos
          </NuxtLink>

          <NuxtLink class="text-zinc-400 transition hover:text-white" to="/cv">
            CV
          </NuxtLink>

          <NuxtLink class="text-zinc-400 transition hover:text-white" to="/portfolio">
            Portfolio
          </NuxtLink>

          <NuxtLink class="text-zinc-400 transition hover:text-white" to="/contact">
            Contact
          </NuxtLink>
        </div>
      </div>

      <!-- RÉSEAUX (VERSION PREMIUM) -->
      <div>
        <h4 class="text-sm font-medium text-zinc-400">
          Réseaux
        </h4>

        <div class="mt-4 flex gap-4">

          <a
              href="#"
              class="glass flex h-11 w-11 items-center justify-center rounded-full transition hover:scale-105"
          >
            <Icon name="fa6-brands:github" class="text-lg" />
          </a>

          <a
              href="#"
              class="glass flex h-11 w-11 items-center justify-center rounded-full transition hover:scale-105"
          >
            <Icon name="fa6-brands:gitlab" class="text-lg" />
          </a>

          <a
              href="#"
              class="glass flex h-11 w-11 items-center justify-center rounded-full transition hover:scale-105"
          >
            <Icon name="fa6-brands:linkedin" class="text-lg" />
          </a>

        </div>
      </div>

    </div>

    <!-- COPYRIGHT -->
    <div class="border-t border-white/10 py-8 text-center text-xs text-zinc-500">
      © 2026 Gourlaouen Thomas — Tous droits réservés.
    </div>

  </footer>
</template>
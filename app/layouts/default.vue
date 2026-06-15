<script setup lang="ts">
import AppHeader from '../components/layout/AppHeader.vue'
import AppFooter from '../components/layout/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-[#09090B] text-white overflow-x-hidden">
    <!-- Glow Reflect -->

    <div
      class="pointer-events-none fixed left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[180px]"
    />

    <AppHeader />

    <main>
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

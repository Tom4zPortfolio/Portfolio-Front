<script setup lang="ts">
import AppHeader from '../components/layout/AppHeader.vue'
import AppFooter from '../components/layout/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-bg text-white overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
    <!-- Fond Immersif -->
    <div class="fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
      <div class="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-secondary/10 blur-[120px] rounded-full" />
      <div class="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full animate-float" />
    </div>

    <AppHeader />

    <main class="relative z-10">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

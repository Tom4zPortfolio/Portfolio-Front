<script setup lang="ts">
interface Props {
  title: string
  description: string
}
defineProps<Props>()

</script>

<template>
  <section class="container mx-auto px-6 mb-20 py-20 text-center">
    <h1 class="text-5xl md:text-7xl font-black mb-6">
      PORTFOLIO <span class="text-gradient">{{ title.toUpperCase() }}</span>

    </h1>
    <p class="text-white/60 text-lg max-w-2xl mx-auto">
      {{ description }}
    </p>
  </section>
</template>
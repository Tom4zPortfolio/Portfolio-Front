<script setup lang="ts">

</script>

<template>
  <a v-for="social in [
            {icon: 'ph:github-logo-bold', href: '#'},
            {icon: 'ph:gitlab-logo-bold', href: '#'},
            {icon: 'ph:linkedin-logo-bold', href: '#'}
          ]" :key="social.icon" :href="social.href" class="glass-morphism w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-white/10 hover:border-white/20 hover:text-accent transition-all duration-300 transform hover:-translate-y-1">
    <Icon :name="social.icon" size="24" class="" />
  </a>
</template>

<style scoped>

</style>
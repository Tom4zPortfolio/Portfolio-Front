<script setup lang="ts">
import FeaturedProjectsSection from "~/components/home/FeaturedProjectsSection.vue";
import CTASection from "~/components/home/CTASection.vue";
import AboutSection from "~/components/home/AboutSection.vue";
import HeroSection from "~/components/home/HeroSection.vue";
import TechStackSection from "~/components/home/TechStackSection.vue";
</script>

<template>
  <div class="flex flex-col">
    <HeroSection />

    <AboutSection/>

    <FeaturedProjectsSection />

    <TechStackSection />

    <CTASection />
  </div>
</template>


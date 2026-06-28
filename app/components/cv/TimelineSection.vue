<script setup lang="ts">
type ItemType = 'education' | 'experience'

interface Props {
  icon: string
  title: string
  subtitle: string
  period: string

  description?: string
  list?: string[]
  badges?: string[]

  variant: ItemType
}

defineProps<Props>()
</script>

<template>
  <div class="relative pl-10 group">

    <!-- DOT -->
    <div
        class="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-bg border-2 transition-colors duration-300"
        :class="variant === 'education' ? 'border-primary group-hover:bg-primary' : 'border-secondary group-hover:bg-secondary'"
    />

    <div
        class="glass-card p-6 rounded-2xl transition-all duration-500"
        :class="variant === 'education'
        ? 'group-hover:border-primary/50'
        : 'group-hover:border-secondary/50'"
    >

      <!-- HEADER -->
      <div class="flex items-center gap-3 mb-2">
        <Icon
            :name="icon"
            size="28"
            :class="variant === 'education' ? 'text-primary' : 'text-secondary'"
        />
        <span class="text-sm font-mono font-bold text-white/60">
          {{ period }}
        </span>
      </div>

      <h3 class="text-xl font-bold">{{ title }}</h3>
      <div class="text-white/50 text-sm mb-4">{{ subtitle }}</div>

      <!-- DESCRIPTION -->
      <p v-if="description" class="text-white/70 text-sm leading-relaxed mb-4">
        {{ description }}
      </p>

      <!-- LIST -->
      <ul v-if="list?.length" class="space-y-2 mb-4">
        <li
            v-for="item in list"
            :key="item"
            class="text-white/70 text-sm flex items-start gap-2"
        >
          <Icon
              name="ph:caret-right-bold"
              class="mt-1 flex-shrink-0"
              :class="variant === 'education' ? 'text-primary' : 'text-secondary'"
          />
          {{ item }}
        </li>
      </ul>

      <!-- BADGES -->
      <div v-if="badges?.length" class="flex flex-wrap gap-2">
        <span
            v-for="b in badges"
            :key="b"
            class="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider border"
            :class="variant === 'education'
            ? 'bg-white/5 border-white/10'
            : 'bg-secondary/10 border-secondary/20 text-secondary'"
        >
          {{ b }}
        </span>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>
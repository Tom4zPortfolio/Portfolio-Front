<script setup lang="ts">
import { computed, ref } from 'vue'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
})

const errors = ref<Record<string, string>>({})

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const isValid = computed(() => {
  return (
      form.value.firstName.trim().length >= 2 &&
      form.value.lastName.trim().length >= 2 &&
      emailRegex.test(form.value.email) &&
      form.value.message.trim().length >= 20 &&
      form.value.message.trim().length <= 500
  )
})

function validate() {
  errors.value = {}

  if (form.value.firstName.trim().length < 2) {
    errors.value.firstName = 'Prénom trop court'
  }

  if (form.value.lastName.trim().length < 2) {
    errors.value.lastName = 'Nom trop court'
  }

  if (!emailRegex.test(form.value.email)) {
    errors.value.email = 'Email invalide'
  }

  if (form.value.message.trim().length < 20) {
    errors.value.message = 'Message trop court (min 20 caractères)'
  }

  if (form.value.message.trim().length > 500) {
    errors.value.message = 'Message trop long (max 500 caractères)'
  }

  return Object.keys(errors.value).length === 0
}

function submit() {
  if (!validate()) return

  console.log('FORM SUBMIT:', form.value)

  alert('Message envoyé 🚀')
}
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 pt-32">

    <!-- HEADER -->
    <section class="container mx-auto px-6 mb-20 py-20 text-center">
      <h1 class="text-5xl md:text-7xl font-black mb-6">
        ME <span class="text-gradient">CONTACTER</span>

      </h1>
      <p class="text-white/60 text-lg max-w-2xl mx-auto">
        Une question, un projet ou une opportunité ? Envoyez-moi un message.

      </p>
    </section>

    <div class="grid gap-12 md:grid-cols-2">

      <!-- FORM -->
      <form
          @submit.prevent="submit"
          class="
    glass
    relative
    rounded-3xl
    border border-white/10
    bg-white/3
    backdrop-blur-xl
    p-5 sm:p-6 md:p-8
    space-y-6
    shadow-[0_0_40px_rgba(0,0,0,0.3)]
  "
      >

        <!-- PRÉNOM / NOM -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

          <div>
            <input
                v-model="form.firstName"
                type="text"
                placeholder="Prénom"
                class="input p-1"
            />
            <p v-if="errors.firstName" class="text-red-400 text-xs mt-1">
              {{ errors.firstName }}
            </p>
          </div>

          <div>
            <input
                v-model="form.lastName"
                type="text"
                placeholder="Nom"
                class="input p-1"
            />
            <p v-if="errors.lastName" class="text-red-400 text-xs mt-1">
              {{ errors.lastName }}
            </p>
          </div>

        </div>

        <!-- EMAIL -->
        <div>
          <input
              v-model="form.email"
              type="email"
              placeholder="Email"
              class="input p-1"
          />
          <p v-if="errors.email" class="text-red-400 text-xs mt-1">
            {{ errors.email }}
          </p>
        </div>

        <!-- PHONE -->
        <div>
          <input
              v-model="form.phone"
              type="tel"
              placeholder="Téléphone (optionnel)"
              class="input p-1"
          />
        </div>

        <!-- MESSAGE -->
        <div>
    <textarea
        v-model="form.message"
        placeholder="Votre message..."
        rows="8"
        maxlength="500"
        class="input w-full min-h-180px resize-none p-1"
    />

          <div class="flex justify-between mt-1 text-xs text-zinc-500">
            <p v-if="errors.message" class="text-red-400">
              {{ errors.message }}
            </p>

            <p class="ml-auto">
              {{ form.message.length }}/500
            </p>
          </div>
        </div>

        <!-- SUBMIT -->
        <button
            type="submit"
            :disabled="!isValid"
            class="
      w-full
      rounded-full
      py-3
      text-sm
      font-medium
      transition-all
      duration-300
      glass
    "
            :class="!isValid
      ? 'opacity-40 cursor-not-allowed'
      : 'hover:scale-[1.02] hover:bg-white/10'"
        >
          Envoyer le message
        </button>

      </form>

      <!-- INFOS -->
      <div class="space-y-6">

        <div class="glass rounded-2xl p-6">
          <h3 class="text-sm text-zinc-400 mb-4">
            Informations
          </h3>

          <div class="space-y-4 text-sm text-zinc-300">

            <div class="flex items-center gap-3">
              <Icon name="fa6-solid:location-dot" />
              Brest, France
            </div>

            <div class="flex items-center gap-3">
              <Icon name="fa6-solid:envelope" />
              contact@portfolio.dev
            </div>

            <div class="flex items-center gap-3">
              <Icon name="fa6-brands:linkedin" />
              <a target="_blank" href="https://www.linkedin.com/in/thomas-gourlaouen">LinkedIn</a>
            </div>

            <div class="flex items-center gap-3">
              <Icon name="fa6-brands:discord" />
              Tom4z
            </div>

          </div>
        </div>

        <div class="glass rounded-2xl p-6 text-sm text-zinc-400">
          Je réponds généralement sous 24 à 48h.
        </div>

      </div>

    </div>
  </div>
</template>
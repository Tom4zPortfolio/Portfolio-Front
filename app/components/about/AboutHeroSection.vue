<script setup lang="ts">

const infos = [
  {
    icon: "ph:map-pin-fill",
    text: "France"
  },
  {
    icon: "ph:graduation-cap-fill",
    text: "BAC +4"
  },
  {
    icon: "ph:briefcase-fill",
    text: "Alternance"
  },
  {
    icon: "ph:coffee-fill",
    text: "Toujours un café"
  }
]
</script>

<template>
  <section class="relative py-24 px-6 overflow-hidden">

    <!-- background glow -->

    <div
        class="absolute left-1/2 top-32 -translate-x-1/2 w-[450px] h-[450px]
        bg-primary/10 blur-[120px] rounded-full">
    </div>

    <div class="max-w-5xl mx-auto relative z-10">

      <div class="glass-card rounded-[40px] p-12 md:p-16">

        <div class="flex flex-col items-center">

          <!-- PHOTO -->

          <div class="relative">

            <div
                class="absolute inset-0 rounded-full bg-gradient-to-r
                        from-primary to-secondary blur-3xl opacity-30 scale-110">
            </div>

            <div
                class="relative w-44 h-44 rounded-full
                        border border-white/10
                        bg-white/5 overflow-hidden">

              <!-- Remplacer par ta photo -->

              <img
                  src="../../assets/images/me.png"
                  class="w-full h-full object-cover"
                  alt="Thomas Gourlaouen"
              >

            </div>

          </div>

          <!-- NAME -->

          <h1
              class="mt-10 text-5xl font-black text-center">

            Thomas

            <span class="text-gradient">
                        Gourlaouen
                    </span>

          </h1>

          <p
              class="mt-4 text-xl text-white/50">

            Développeur Alternant

          </p>

          <!-- DESCRIPTION -->

          <p
              class="mt-8 max-w-3xl text-center
                    text-lg text-white/70 leading-8">

            Je conçois et développe des applications web complètes,
            de l'interface utilisateur jusqu'au backend.
            J'accorde une importance particulière à la qualité du code,
            aux performances et à une expérience utilisateur soignée.

          </p>

          <!-- INFOS -->

          <div
              class="mt-10 flex flex-wrap justify-center gap-4">

            <div
                v-for="info in infos"
                :key="info.text"

                class="glass px-5 py-3 rounded-full
                        flex items-center gap-3">

              <Icon
                  :name="info.icon"
                  class="text-primary"
                  size="18"
              />

              <span
                  class="text-white/70">

                            {{ info.text }}

                        </span>

            </div>

          </div>

          <!-- STATS -->

          <div
              class="grid grid-cols-3 gap-8
                    mt-16 w-full max-w-2xl">

          </div>

        </div>

      </div>

    </div>

  </section>
</template>
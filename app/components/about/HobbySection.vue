<script setup lang="ts">
const hobbies = [
  { title: "Maker DIY", image: "/images/hobbies/photo.jpg", icon: "ph:wrench" },
  { title: "Gaming", image: "/images/hobbies/gaming.jpg", icon: "ph:game-controller" },
  { title: "Running", image: "/images/hobbies/hiking.jpg", icon: "ph:person-simple-run" },
  { title: "Auto - moto", image: "/images/hobbies/car.jpg", icon: "ph:car" },
  { title: "Musique", image: "/images/hobbies/music.jpg", icon: "ph:music-notes" },
  { title: "Café", image: "/images/hobbies/coffee" , icon: "ph:coffee" }
]
</script>

<template>
  <section class="py-32 px-6 relative overflow-hidden">

    <!-- glow background -->
    <div class="absolute inset-0 flex justify-center items-center">
      <div class="w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full"></div>
    </div>

    <div class="max-w-6xl mx-auto relative z-10">

      <!-- HEADER -->
      <div class="text-center">
        <h2 class="text-5xl font-black">
          Mes <span class="text-gradient">passions</span>
        </h2>

        <p class="mt-6 text-white/60 max-w-2xl mx-auto">
          En dehors du développement, j’aime explorer, créer et découvrir de nouvelles choses.
        </p>
      </div>

      <!-- HONEYCOMB -->
      <div class="honeycomb mt-24">

        <div
            v-for="(hobby, i) in hobbies"
            :key="hobby.title"
            class="hex group"
        >
          <div class="hex-inner">

            <img :src="hobby.image" class="hex-img" />

            <div class="hex-overlay"></div>

            <div class="hex-content">

              <Icon :name="hobby.icon" class="text-white/90" size="26" />

              <p class="mt-2 text-sm font-semibold">
                {{ hobby.title }}
              </p>

            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>

/* GRID */
.honeycomb {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
}

/* HEXAGON */
.hex {
  width: 160px;
  height: 185px;
  position: relative;
  transition: transform .4s ease;
}

.hex:hover {
  transform: translateY(-10px);
}

/* inner shape */
.hex-inner {
  width: 100%;
  height: 100%;
  clip-path: polygon(
      50% 0%,
      100% 25%,
      100% 75%,
      50% 100%,
      0% 75%,
      0% 25%
  );
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.08);
}

/* image */
.hex-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
  transition: transform .6s ease;
}

.hex:hover .hex-img {
  transform: scale(1.2);
}

/* overlay */
.hex-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.85), transparent);
  transition: .4s;
}

.hex:hover .hex-overlay {
  background: linear-gradient(to top, rgba(139,92,246,0.4), transparent);
}

/* content */
.hex-content {
  position: absolute;
  bottom: 18px;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  opacity: .9;
  transition: .3s;
}

.hex:hover .hex-content {
  transform: translateY(-4px);
  opacity: 1;
}

/* responsive */
@media (max-width: 768px) {
  .hex {
    width: 120px;
    height: 140px;
  }
}

</style>
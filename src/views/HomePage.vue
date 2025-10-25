<script setup lang="ts">
import streamers from '@/assets/data/streamers.json'

import PlayerHead from '../components/PlayerHead.vue'
import StyledButton from '../components/StyledButton.vue'
</script>

<template>
  <main class="sm:px-0 sm:pt-0">
    <div class="relative">
      <img src="../assets/images/bg.jpg" class="w-full max-sm:hidden" />
      <img
        src="../assets/images/title.png"
        class="mx-auto mt-4 w-[80dvw] object-contain transition-transform sm:absolute sm:top-[30%] sm:left-[50%] sm:w-[45dvw] sm:-translate-x-1/2 md:hover:scale-105"
      />
    </div>
    <div class="mt-8 flex flex-col gap-y-8 px-[8vw] lg:mt-40 xl:gap-y-24">
      <div class="flex gap-x-[8vw] max-lg:flex-col md:items-center md:justify-between">
        <div>
          <h1>Qui sommes nous?</h1>
          <p>Une team spécialisé dans la réalisation de maps mini-jeux / aventure</p>
          <StyledButton text="En savoir plus" route="/crew" class="mt-8" />
        </div>
        <img
          src="../assets/images/crew.png"
          class="object-scale-down transition-transform max-md:mt-4 md:h-100 md:hover:scale-105 lg:max-w-1/2"
        />
      </div>
      <div class="flex items-center justify-between gap-x-[8vw] max-lg:mt-4 max-lg:flex-col">
        <img
          src="../assets/images/projects.png"
          class="object-scale-down transition-transform max-lg:order-2 max-md:mt-4 md:h-100 md:hover:scale-105 lg:max-w-1/2"
        />
        <div class="max-lg:order-1">
          <h1>Nos projets</h1>
          <p>
            Nous avons déjà pu réaliser quelques projet en collaboration avec des streamers et
            espérons pouvoir continuer!
          </p>
          <StyledButton text="En savoir plus" route="/projects" class="mt-8" />
        </div>
      </div>
      <div>
        <h1>Les Streamers</h1>
        <p>Streamers avec lesquels nous avons pu collaborer pour créer un évènement</p>
        <div class="mx-auto mt-8 flex flex-wrap justify-center gap-x-3">
          <a v-for="streamer in streamers" :key="streamer.username" :href="streamer.twitch">
            <PlayerHead :username="streamer.username" />
          </a>
        </div>
      </div>
      <div>
        <h1>Une question?</h1>
        <p>Allez voir notre <RouterLink to="/faq">FAQ</RouterLink> ou contactez nous!</p>
      </div>
    </div>
  </main>
</template>

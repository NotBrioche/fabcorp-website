<script setup lang="ts">
import streamers from '@/assets/data/streamers.json'

import PlayerHead from '../components/PlayerHead.vue'
import StyledButton from '../components/StyledButton.vue'
</script>

<template>
  <main class="sm:px-0 sm:pt-0">
    <div class="relative">
      <img src="../assets/images/bg.webp" class="w-full max-sm:hidden" />
      <img
        src="../assets/images/title.png"
        class="mx-auto mt-4 w-[80dvw] object-contain sm:absolute sm:top-[30%] sm:left-[50%] sm:w-[45dvw] sm:max-w-[675px] sm:-translate-x-1/2 md:hover:scale-105"
      />
    </div>
    <div class="container min-w-full">
      <div class="mt-8 flex flex-col gap-y-8 xl:gap-y-24">
        <div class="separator">
          <div class="order-1 lg:order-0">
            <h1>Qui sommes nous?</h1>
            <p>Une team spécialisé dans la réalisation de maps mini-jeux / aventure</p>
            <StyledButton text="En savoir plus" route="/crew" class="mt-8" />
          </div>
          <img src="../assets/images/crew.webp" class="context-img order-0 lg:order-1" />
        </div>
        <div class="separator">
          <img src="../assets/images/projects.webp" class="context-img" />
          <div>
            <h1>Nos projets</h1>
            <p>
              Nous avons déjà pu réaliser quelques projets en collaboration avec des streamers et
              espérons pouvoir continuer!
            </p>
            <StyledButton text="En savoir plus" route="/projects" class="mt-8" />
          </div>
        </div>
        <div>
          <h1>Les Streamers</h1>
          <p>Streamers avec lesquels nous avons pu collaborer pour créer un événement</p>
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
    </div>
  </main>
</template>

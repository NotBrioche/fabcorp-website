<script setup lang="ts">
import streamers from '@/assets/data/streamers.json'

import PlayerHead from '../components/PlayerHead.vue'
import StyledButton from '../components/StyledButton.vue'
</script>

<template>
  <main>
    <div>
      <img
        src="../assets/images/title.png"
        class="absolute right-[50%] translate-[50%] mt-40 hover:scale-105 transition-transform"
      />
      <img src="../assets/images/bg.jpg" class="" />
    </div>
    <div class="px-40 flex flex-col gap-y-20 mt-40">
      <div class="flex justify-between gap-x-40">
        <div>
          <h1>Qui sommes nous?</h1>
          <p>Une team spécialisé dans la réalisation de maps mini-jeux / aventure</p>
          <StyledButton text="En savoir plus" route="/crew" class="mt-8" />
        </div>
        <img src="../assets/images/crew.png" class="h-100 hover:scale-105 transition-transform" />
      </div>
      <div class="flex justify-between gap-x-40">
        <img
          src="../assets/images/projects.png"
          class="h-100 hover:scale-105 transition-transform"
        />
        <div>
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
        <div class="flex gap-x-3 justify-center flex-wrap w-[60%] mx-auto mt-8">
          <a v-for="streamer in streamers" :key="streamer.username" :href="streamer.twitch">
            <PlayerHead :username="streamer.username" />
          </a>
        </div>
      </div>
      <div>
        <h1>Une Question?</h1>
        <p>Allez voir notre <RouterLink to="/faq">FAQ</RouterLink> ou contactez nous!</p>
      </div>
    </div>
  </main>
</template>

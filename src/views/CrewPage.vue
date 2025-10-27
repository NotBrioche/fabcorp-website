<script setup lang="ts">
import crew from '@/assets/data/crew.json'
import PlayerRender from '@/components/PlayerRender.vue';

const titles = ["Développeurs", "Builders", "Testeurs"];
const values = [crew.devs, crew.build, crew.test];
</script>

<template>
  <main class="flex flex-col justify-between gap-y-4 text-center">
    <div v-for="title in titles" :key="title">
      <h1>{{ title }}</h1>
      <div class="mx-auto flex flex-wrap justify-center gap-x-6">
          <PlayerRender v-for="player in values[titles.indexOf(title)]" :key="player" :username="player" />
      </div>
    </div>
    <div class="mt-4 sm:text-start">
      <h1>Nous rejoindre</h1>
      <p>
        Nous sommes à la recherche de gens pour pouvoir créer de nouveaux concepts, si vous voulez
        nous aider, n'hésitez pas a nous contacter.
      </p>
    </div>
  </main>
</template>

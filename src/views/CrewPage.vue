<script setup lang="ts">
import crew from '@/assets/data/crew.json'
import PlayerHead from '@/components/PlayerHead.vue'
</script>

<template>
  <main class="flex flex-col justify-between gap-y-4 text-center">
    <div>
      <h1>Développeurs</h1>
      <div class="mx-auto flex flex-wrap justify-center gap-x-3">
        <PlayerHead v-for="dev in crew.devs" :key="dev" :username="dev" />
      </div>
    </div>
    <div>
      <h1>Builders</h1>
      <div class="mx-auto flex flex-wrap justify-center gap-x-3">
        <PlayerHead v-for="builder in crew.build" :key="builder" :username="builder" />
      </div>
    </div>
    <div>
      <h1>Testeurs</h1>
      <div class="mx-auto flex flex-wrap justify-center gap-x-3">
        <PlayerHead v-for="tester in crew.test" :key="tester" :username="tester" />
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

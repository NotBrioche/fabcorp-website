<script setup lang="ts">
import PlayerHead from '@/components/PlayerHead.vue'
</script>

<template>
  <main class="text-center flex flex-col justify-around px-16 pt-16">
    <div>
      <h1>Développeurs</h1>
      <div class="flex gap-x-3 justify-center flex-wrap w-[60%] mx-auto">
        <PlayerHead username="NotBrioche" />
      </div>
    </div>
    <div>
      <h1>Builders</h1>
      <div class="flex gap-x-3 justify-center flex-wrap w-[60%] mx-auto">
        <PlayerHead username="pxxie" />
        <PlayerHead username="Metha_fort" />
        <PlayerHead username="Cm_Blacky" />
      </div>
    </div>
    <div>
      <h1>Testeurs</h1>
      <div class="flex gap-x-3 justify-center flex-wrap w-[60%] mx-auto">
        <PlayerHead username="Moraly" />
        <PlayerHead username="Makishimu" />
        <PlayerHead username="sacrieur" />
      </div>
    </div>
    <div class="text-start">
      <h1>Nous rejoindre</h1>
      <p>
        Nous sommes à la recherche de gens pour pouvoir créer de nouveaux concepts, si vous voulez
        nous aider, n'hésitez pas a nous contacter.
      </p>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>

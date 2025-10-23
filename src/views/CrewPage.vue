<script setup lang="ts">
import PlayerHead from '@/components/PlayerHead.vue'
</script>

<template>
  <main class="text-center flex flex-col justify-around">
    <div>
      <h1>Développeurs</h1>
      <div class="flex gap-x-3 justify-center flex-wrap w-[60%] mx-auto mt-8">
        <PlayerHead username="NotBrioche" />
      </div>
    </div>
    <div>
      <h1>Builders</h1>
      <div class="flex gap-x-3 justify-center flex-wrap w-[60%] mx-auto mt-8">
        <PlayerHead username="pxxie" />
        <PlayerHead username="Metha_fort" function="Builder" />
        <PlayerHead username="Cm_Blacky" function="Builder" />
      </div>
    </div>
    <div>
      <h1>Testeurs</h1>
      <div class="flex gap-x-3 justify-center flex-wrap w-[60%] mx-auto mt-8">
        <PlayerHead username="Moraly" function="Testeur" />
        <PlayerHead username="Makishimu" function="Testeur" />
        <PlayerHead username="sacrieur" function="Testeur" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
import PlayerHead from '../components/PlayerHead.vue'
import StyledButton from '../components/StyledButton.vue'
</script>

<template>
  <main>
    <div>
      <img src="../assets/images/title.png" class="absolute right-[50%] translate-[50%] mt-40" />
      <img src="../assets/images/bg.jpg" class="" />
    </div>
    <div class="px-40 flex flex-col gap-y-20 mt-40">
      <div class="flex justify-between gap-x-40">
        <div>
          <h1>Qui sommes nous?</h1>
          <p>Une team spécialisé dans la réalisation de maps mini-jeux / aventure</p>
          <StyledButton text="En savoir plus" route="/#" class="mt-8" />
        </div>
        <img src="../assets/images/bg.jpg" class="h-100" />
      </div>
      <div class="flex justify-between gap-x-40">
        <img src="../assets/images/bg.jpg" class="h-100" />
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
        <h1>Le Crew</h1>
        <div class="flex gap-x-3 justify-center flex-wrap w-[60%] mx-auto mt-8">
          <PlayerHead username="NotBrioche" function="Développeur" />
          <PlayerHead username="pxxie" function="Builder" />
          <PlayerHead username="Metha_fort" function="Builder" />
          <PlayerHead username="Cm_Blacky" function="Builder" />
          <PlayerHead username="Moraly" function="Concept" />
          <PlayerHead username="Makishimu" function="Testeur" />
          <PlayerHead username="sacrieur" function="Testeur" />
        </div>
      </div>
      <div>
        <h1>Les Streamers</h1>
        <div class="flex gap-x-3 justify-center flex-wrap w-[60%] mx-auto mt-8">
          <PlayerHead username="MoonO_o" />
          <PlayerHead username="shinystaar_" />
          <PlayerHead username="TTVMaon_" />
        </div>
      </div>
    </div>
  </main>
</template>

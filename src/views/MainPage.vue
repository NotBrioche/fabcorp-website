<script setup lang="ts">
import NavigationBar from '../components/partials/Navigationbar.vue'
import FooterInfo from '../components/partials/FooterInfo.vue'
import PlayerHead from '../components/PlayerHead.vue'
</script>

<template>
  <div class="flex flex-col h-full">
    <header class="p-5 bg-gray-600">
      <NavigationBar />
    </header>
    <main class="flex-1">
      <div>
        <img src="../assets/images/title.png" class="absolute right-[50%] translate-[50%] mt-40" />
        <img src="../assets/images/bg.jpg" class="" />
      </div>
      <div class="px-40 flex flex-col gap-y-20 mt-40">
        <div class="flex justify-between gap-x-40">
          <div>
            <h1>Qui sommes nous?</h1>
            <p>Une team spécialisé dans la réalisation de maps mini-jeux / aventure</p>
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
          </div>
        </div>
        <div>
          <h1>Le Crew</h1>
          <p>Toutes les personnes ayant aidé pour les projets</p>
          <div class="flex gap-x-3 justify-center flex-wrap w-[60%] mx-auto mt-8">
            <PlayerHead username="NotBrioche" />
            <PlayerHead username="pxxie" />
            <PlayerHead username="Moraly" />
            <PlayerHead username="Makishimu" />
            <PlayerHead username="MoonO_o" />
            <PlayerHead username="sacrieur" />
            <PlayerHead username="Metha_fort" />
            <PlayerHead username="shinystaar_" />
            <PlayerHead username="Cm_Blacky" />
          </div>
        </div>
      </div>
    </main>

    <footer class="mt-16 p-6 bg-gray-600">
      <FooterInfo />
    </footer>
  </div>
</template>

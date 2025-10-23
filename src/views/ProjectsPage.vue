<script setup lang="ts">
import StyledButton from '@/components/StyledButton.vue'
</script>

<template>
  <main class="flex flex-col gap-y-40 px-16 py-16">
    <div class="flex justify-center gap-x-40">
      <img src="../assets/images/temple.png" class="h-100" />
      <div class="flex-auto">
        <h1>Champions du temple</h1>
        <p>
          Une temple qui a été construit dans le but de trouver le meilleur candidat pour devenir un
          garde d'élite. Chaque étage est une épreuve pour juger la combativité et la force d'une
          personne. Beaucoup de gens y participent chaque année, seulement peu en reviennent.
        </p>
        <h2>Informations</h2>
        <p>Crew: 3</p>
        <p>Version: 1.19.x</p>
        <p>Joueurs: 16 - 99 joueurs</p>
        <p>Type: PVP</p>
        <p>Streamer: <a href="https://www.twitch.tv/mooonn_" target="_blank">Mooonn_</a></p>
        <StyledButton
          url="https://www.planetminecraft.com/project/temple-5833113/"
          text="Télécharger"
          class="mt-8"
        />
      </div>
    </div>
    <div class="flex justify-center gap-x-40">
      <div class="flex-auto">
        <h1>Bateau</h1>
        <p>
          Vous êtes emenés dans l'arène. Un seul but être la meilleure équipe en tuant le plus de
          monstres. Après avoir subis plusieurs attaques de monstres, le gens ont trouvés comment
          éfficassement les tuer. Avec le temps ceci est devenu une compétition que le monde entier
          regarde à la télé. Une seule règle, faites le plus de points!
        </p>
        <h2>Informations</h2>
        <p>Crew: 5</p>
        <p>Version: 1.19.x</p>
        <p>Joueurs: 1 - 24</p>
        <p>Type: PVE</p>
        <p>
          Streamers: <a href="https://www.twitch.tv/mooonn_" target="_blank">Mooonn_</a> /
          <a href="https://www.twitch.tv/maonnn_" target="_blank">Maon_</a> /
          <a href="https://www.twitch.tv/shinystaar_" target="_blank">shinystaar_</a> /
          <a>J'ai oublié son nom le pauvre</a>
        </p>
        <StyledButton
          url="https://www.planetminecraft.com/project/ar-ne-pve/"
          text="Télécharger"
          class="mt-8"
        />
      </div>
      <img src="../assets/images/boat.png" class="h-100" />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>

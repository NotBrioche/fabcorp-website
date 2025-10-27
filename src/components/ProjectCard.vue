<script setup lang="ts">
import streamers from '@/assets/data/streamers.json'
import PlayerHead from '@/components/PlayerHead.vue'
import StyledButton from '@/components/StyledButton.vue'
const props = defineProps(['project', 'pos'])
</script>

<template>
  <div class="items-center flex justify-center gap-x-[8vw] max-lg:flex-col">
    <img
      v-if="!props.pos"
      :src="'images/' + props.project.image"
      class="object-scale-down max-lg:order-0 md:h-100 md:transition-transform md:hover:scale-105 lg:max-w-1/2 mb-4 xs:mb-4 lg:mb-0"
    />
    <div class="flex-auto max-lg:order-1 max-md:mt-4">
      <h1>{{ props.project.title }}</h1>
      <p>
        {{ props.project.description }}
      </p>
      <h2>Informations</h2>
      <p>Crew: {{ props.project.crew }}</p>
      <p>Version: {{ props.project.version }}</p>
      <p>Joueurs: {{ props.project.players.min }} - {{ props.project.players.max }}</p>
      <p>Type: {{ props.project.type.toUpperCase() }}</p>
      <p>
        {{ props.project.streamers.length > 1 ? 'Streamers:' : 'Streamer:' }}
        <a
          v-for="streamer in props.project.streamers"
          :key="streamer"
          :href="streamers.find((s) => s.username == streamer)?.twitch"
          ><PlayerHead :username="streamer" class="inline"
        /></a>
      </p>
      <StyledButton :url="props.project.url" text="Télécharger" class="mt-8" />
    </div>
    <img
      v-if="props.pos"
      :src="'images/' + props.project.image"
      class="object-scale-down max-lg:order-0 md:h-100 md:transition-transform md:hover:scale-105 lg:max-w-1/2 mb-4 xs:mb-4 lg:mb-0"
    />
  </div>
</template>

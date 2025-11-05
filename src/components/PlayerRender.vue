<script setup lang="ts">
const props = defineProps(['username', 'function'])

const url = 'https://vzge.me/bust/128/' + props.username
</script>

<template>
  <div>
    <img
      :src="url"
      :alt="username"
      :title="props.function ? `${username} - ${props.function}` : username"
      class="peer md:hover:-translate-y-2 md:hover:scale-105"
    />
    <p class="peer-hover:visible max-md:pt-4 md:invisible">{{ username }}</p>
  </div>
</template>

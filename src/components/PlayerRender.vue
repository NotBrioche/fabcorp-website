<script setup lang="ts">
const props = defineProps(['username', 'function'])

const url = "https://vzge.me/bust/128/" + props.username;
</script>

<template>
  <div>
    <img
    :src="url"
    :alt="username"
    :title="props.function ? `${username} - ${props.function}` : username"
    class="md:transition-transform md:hover:scale-105 md:hover:-translate-y-2 peer"
    />
    <p class="peer-hover:visible invisible">{{ username }}</p>
  </div>
</template>

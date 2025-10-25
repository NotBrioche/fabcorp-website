<script setup lang="ts">
const props = defineProps(['username', 'function'])

const url = `https://api.skins.minestrator.com/3d/${props.username}?angle=-45&size=64`
</script>

<template>
  <img
    :src="url"
    :alt="username"
    :title="props.function ? `${username} - ${props.function}` : username"
    class="md:transition-transform md:hover:scale-105"
  />
</template>

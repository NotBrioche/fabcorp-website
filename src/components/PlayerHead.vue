<script setup lang="ts">
const props = defineProps(['username'])

const url = `https://api.skins.minestrator.com/3d/${props.username}?angle=-45&size=64`
</script>

<template>
  <img :src="url" :alt="username" :title="username" />
</template>

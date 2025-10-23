<script setup lang="ts">
// import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="flex justify-center items-center">
    <img src="../../assets/images/title.png" class="h-16" />
    <div class="flex-1 flex justify-evenly items-center">
      <RouterLink to="/" :class="$route.fullPath == '/' ? 'underline' : ''">Home</RouterLink>
      <RouterLink to="/crew" :class="$route.fullPath == '/crew' ? 'underline' : ''"
        >L'équipe</RouterLink
      >
      <RouterLink to="/projects" :class="$route.fullPath == '/projects' ? 'underline' : ''"
        >Projets</RouterLink
      >
      <RouterLink to="/faq" :class="$route.fullPath == '/faq' ? 'underline' : ''">FAQ</RouterLink>
    </div>
  </nav>
</template>

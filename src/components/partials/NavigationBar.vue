<script setup lang="ts"></script>

<template>
  <nav class="flex justify-center items-center">
    <RouterLink to="/">
      <img src="../../assets/images/title.png" class="h-16" />
    </RouterLink>
    <div class="flex-1 flex justify-evenly items-center">
      <RouterLink to="/" :class="$route.path == '/' ? 'underline' : ''">Home</RouterLink>
      <RouterLink to="/crew" :class="$route.path == '/crew' ? 'underline' : ''"
        >L'équipe</RouterLink
      >
      <RouterLink to="/projects" :class="$route.path == '/projects' ? 'underline' : ''"
        >Projets</RouterLink
      >
      <RouterLink to="/faq" :class="$route.path == '/faq' ? 'underline' : ''">FAQ</RouterLink>
      <RouterLink to="#contact" :class="$route.path == '/contact' ? 'underline' : ''"
        >Contact</RouterLink
      >
    </div>
  </nav>
</template>

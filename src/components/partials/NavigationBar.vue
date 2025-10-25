<script setup lang="ts"></script>

<template>
  <nav class="flex items-center justify-center">
    <RouterLink to="/">
      <img src="../../assets/images/title.png" class="h-16 max-md:hidden" />
    </RouterLink>
    <div class="max-xs:flex-col flex flex-1 items-center justify-evenly">
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

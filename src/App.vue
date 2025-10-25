<script setup lang="ts">
import NavigationBar from './components/partials/NavigationBar.vue'
import FooterInfo from './components/partials/FooterInfo.vue'
</script>

<template>
  <header class="border-b p-5">
    <NavigationBar />
  </header>
  <RouterView class="flex-auto" />
  <footer class="border-t p-6">
    <FooterInfo />
  </footer>
</template>

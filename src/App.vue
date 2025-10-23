<script setup lang="ts">
import NavigationBar from './components/partials/NavigationBar.vue'
import FooterInfo from './components/partials/FooterInfo.vue'
</script>

<template>
  <header class="p-5 border-b">
    <NavigationBar />
  </header>
  <RouterView class="flex-auto" />
  <footer class="mt-16 p-6 border-t">
    <FooterInfo />
  </footer>
</template>

<script setup lang="ts">
import projects from '@/assets/data/projects.json'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <main class="flex flex-col gap-y-12 lg:gap-y-20">
    <ProjectCard
      v-for="project in projects"
      :key="project.title"
      :project="project"
      :pos="projects.indexOf(project) % 2 == 0 ? null : true"
    />
  </main>
</template>

<style lang="scss" scoped></style>

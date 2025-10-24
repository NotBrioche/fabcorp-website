<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps(['text', 'route', 'url'])

function redirect(): void {
  if (props.route) {
    router.replace(props.route)
  }

  if (props.url) {
    window.open(props.url, '_self')
  }
}
</script>

<template>
  <button
    class="border border-black px-2 py-1 w-full focus:bg-black focus:text-white hover:opacity-60 hover:cursor-pointer"
    @click="redirect"
  >
    {{ props.text }}
  </button>
</template>

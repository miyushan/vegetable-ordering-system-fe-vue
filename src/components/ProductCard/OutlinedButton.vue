<script setup lang="ts">
const props = defineProps({
  name: String
})
</script>

<template>
  <button
    class="py-1.5 w-full text-small font-medium text-center bg-white text-green-600 rounded-lg border-green-300 focus:ring-2 focus:outline-none shadow-md hover:bg-green-50 focus:ring-green-200"
  >
    {{ props.name }}
  </button>
</template>

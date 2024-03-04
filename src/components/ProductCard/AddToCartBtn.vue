<script setup lang="ts">
const props = defineProps({
  name: String
})
</script>

<template>
  <button
    class="py-1.5 px-1.5 text-xs font-medium text-center text-white bg-green-600 rounded-lg border-green-300 focus:ring-2 focus:outline-none shadow-md hover:bg-green-700 focus:ring-green-600"
  >
    {{ props.name }}
  </button>
</template>

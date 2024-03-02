<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: 'test'
    }
  }
}
</script>

<template>
  <button
    class="py-1.5 w-full text-small font-medium text-center text-green-600 rounded-lg border border-green-300 focus:ring-2 focus:outline-none shadow-md hover:bg-green-100 focus:ring-green-200"
  >
    {{ name }}
  </button>
</template>

<script setup type="ts">

 const props = defineProps({
  id: String,
  placeholder: String,
  type: String
})
const model = defineModel()
</script>

<template>
  <input
    v-model="model"
    class="mb-2 border text-sm rounded-lg block w-full p-2.5 bg-gray-100 border-gray-300 placeholder-gray-500 text-grey-800 focus:ring-4 focus:outline-none focus:ring-green-100 focus:border-green-400"
    :id="id"
    :placeholder="props.placeholder"
    :type="props.type"
  />
</template>

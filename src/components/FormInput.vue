<script lang="ts">
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: () => ''
    },
    id: String,
    placeholder: String,
    type: String
  },
  emits: ['update:modelValue']
}
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="mb-2 border text-sm rounded-lg block w-full p-2.5 bg-gray-100 border-gray-300 placeholder-gray-500 text-grey-800 focus:ring-4 focus:outline-none focus:ring-green-100 focus:border-green-400"
    :id="id"
    :placeholder="placeholder"
    :type="type"
  />
</template>

<style>
.vd-input {
  border: none;
  border-radius: 12px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  padding: 10px 12px;
  width: 264px;
  margin-bottom: 8px;
}
</style>

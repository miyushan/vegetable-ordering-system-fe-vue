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
    className="vd-input"
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

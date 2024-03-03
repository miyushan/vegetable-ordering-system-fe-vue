<script setup lang="ts">
import type { PropType } from 'vue/dist/vue.js'
import OutlinedButton from './OutlinedButton.vue'
import type { Product } from '@/models/product'

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col p-3 w-52 bg-white bg-opacity-90 rounded-md">
    <img src="/images/product/ginger.png" class="drop-shadow-lg" :alt="props.product.name" />
    <h6 class="text-base font-semibold mt-2">{{ props.product.name }}</h6>
    <div class="flex justify-between mb-2">
      <p class="text-sm">{{ props.product.weight }} kg</p>
      <p class="text-sm">Rs.{{ props.product.price }}</p>
    </div>
    <OutlinedButton name="Add to Cart" />
  </div>
</template>

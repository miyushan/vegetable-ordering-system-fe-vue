<script setup lang="ts">
import type { PropType } from 'vue/dist/vue.js'
import AddToCartBtn from './AddToCartBtn.vue'
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
    <img :src="props.product.img" class="drop-shadow-lg" :alt="props.product.name" />
    <h6 class="text-base font-semibold mt-2">{{ props.product.name }}</h6>
    <div class="flex justify-between mb-1">
      <p class="text-sm">{{ props.product.weight }} kg</p>
    </div>
    <div class="flex justify-between">
      <p class="text-base">Rs.{{ props.product.price }}</p>
      <AddToCartBtn name="Add to Cart" />
    </div>
  </div>
</template>

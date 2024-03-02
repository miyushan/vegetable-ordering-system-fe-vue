<script lang="ts">
import ProductCard from './ProductCard.vue'
import type { Product } from '@/models/product'

export default {
  components: { ProductCard },
  data() {
    return {
      popularProducts: [
        {
          id: 1,
          name: 'Carrot',
          weight: 1,
          price: 250.5
        },
        {
          id: 2,
          name: 'Cabbage',
          weight: 1,
          price: 154.0
        },
        {
          id: 3,
          name: 'Cabbage',
          weight: 1,
          price: 154.0
        },
        {
          id: 4,
          name: 'Cabbage',
          weight: 1,
          price: 154.0
        }
      ] as Product[]
    }
  }
}
</script>

<template>
  <div class=" my-24 grid content-center justify-center">
    <div class="flex flex-col bg-red-600 p-8">
      <h2 class="text-center text-white text-lg font-semibold mb-6">Popular Items</h2>
      <div class="grid grid-cols-4 gap-4">
        <div v-for="product in popularProducts" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

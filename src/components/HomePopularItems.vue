<script setup lang="ts">
import ProductCard from './ProductCard/ProductCard.vue'
import type { Product } from '@/models/product'

const popularProducts: Product[] = [
  {
    id: 1,
    name: 'Carrot',
    weight: 1,
    price: 154.0,
    img: '/images/product/1_carrot.png'
  },
  {
    id: 5,
    name: 'Potatoes',
    weight: 1,
    price: 154.0,
    img: '/images/product/1_potatoes.png'
  },
  {
    id: 7,
    name: 'Red Onions',
    weight: 1,
    price: 154.0,
    img: '/images/product/1_Red Onions.png'
  },
  {
    id: 10,
    name: 'Green Chilies',
    weight: 1,
    price: 154.0,
    img: '/images/product/1_Green Chilies.png'
  }
]
</script>

<template>
  <div class="my-24 grid content-center justify-center">
    <div class="flex flex-col bg-red-600 p-8">
      <h2 class="text-center text-white text-3xl font-semibold mb-6">Popular Items</h2>
      <div class="grid grid-cols-4 gap-4">
        <div v-for="product in popularProducts" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

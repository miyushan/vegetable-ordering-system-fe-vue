<script setup lang="ts">
import ProductCard from './ProductCard/ProductCard.vue'
import type { Product } from '@/models/product'

const products: Product[] = [
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
  },
  {
    id: 5,
    name: 'Cabbage',
    weight: 1,
    price: 154.0
  },
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
  },
  {
    id: 5,
    name: 'Cabbage',
    weight: 1,
    price: 154.0
  },
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
  },
  {
    id: 5,
    name: 'Cabbage',
    weight: 1,
    price: 154.0
  },
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
  },
  {
    id: 5,
    name: 'Cabbage',
    weight: 1,
    price: 154.0
  }
]
</script>

<template>
  <h2 class="text-center text-green-500 text-3xl font-semibold mb-6">Our Products</h2>
  <div
    class="bg-all-products-img bg-black/[.55] bg-cover bg-no-repeat bg-center bg-blend-overlay py-16"
  >
    <div class="max-w-screen-xl mx-auto grid grid-cols-5 gap-6">
      <div v-for="product in products" :key="product.id" class="justify-self-center">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

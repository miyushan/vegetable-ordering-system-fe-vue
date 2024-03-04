<script setup lang="ts">
import ProductCard from './ProductCard/ProductCard.vue'
import type { Product } from '@/models/product'

const products: Product[] = [
  {
    id: 1,
    name: 'Carrot',
    weight: 1,
    price: 154.0,
    img: '/images/product/1_carrot.png'
  },
  {
    id: 2,
    name: 'Big Onions',
    weight: 1,
    price: 154.0,
    img: '/images/product/1_Big_Onions.png'
  },
  {
    id: 3,
    name: 'Tomatoes',
    weight: 1,
    price: 154.0,
    img: '/images/product/1_tomatoes.png'
  },
  {
    id: 4,
    name: 'Pumpkin',
    weight: 1,
    price: 154.0,
    img: '/images/product/1_pumpkin.png'
  },
  {
    id: 5,
    name: 'Potatoes',
    weight: 1,
    price: 154.0,
    img: '/images/product/1_potatoes.png'
  },
  {
    id: 6,
    name: 'Leeks',
    weight: 1,
    price: 154.0,
    img: '/images/product/1_Leeks.png'
  },
  {
    id: 7,
    name: 'Red Onions',
    weight: 1,
    price: 154.0,
    img: '/images/product/1_Red Onions.png'
  },
  {
    id: 8,
    name: 'Cabbage',
    weight: 1,
    price: 154.0,
    img: '/images/product/1_Cabbage.png'
  },
  {
    id: 9,
    name: 'Brinjals',
    weight: 1,
    price: 154.0,
    img: '/images/product/1_Brinjals.png'
  },
  {
    id: 10,
    name: 'Green Chilies',
    weight: 1,
    price: 154.0,
    img: '/images/product/1_Green Chilies.png'
  },
  {
    id: 11,
    name: 'Garlic',
    weight: 1,
    price: 154.0,
    img: '/images/product/garlic.png'
  },
  {
    id: 12,
    name: 'Manioc',
    weight: 1,
    price: 154.0,
    img: '/images/product/Manioc.png'
  },
  {
    id: 13,
    name: 'Luffa',
    weight: 1,
    price: 154.0,
    img: '/images/product/Luffa.png'
  },
  {
    id: 14,
    name: 'Sweet Potato',
    weight: 1,
    price: 154.0,
    img: '/images/product/Sweet Potato.png'
  },
  {
    id: 15,
    name: 'Ladies Fingers',
    weight: 1,
    price: 154.0,
    img: '/images/product/Ladies Fingers.png'
  },
  {
    id: 16,
    name: 'Capsicum',
    weight: 1,
    price: 154.0,
    img: '/images/product/Capsicum.png'
  },
  {
    id: 17,
    name: 'Beet',
    weight: 1,
    price: 154.0,
    img: '/images/product/Beet.png'
  },
  {
    id: 18,
    name: 'Bitter Gourd',
    weight: 1,
    price: 154.0,
    img: '/images/product/Bitter Gourd.png'
  },
  {
    id: 19,
    name: 'Lime',
    weight: 1,
    price: 154.0,
    img: '/images/product/Lime.png'
  },
  {
    id: 20,
    name: 'Melon Kekiri',
    weight: 1,
    price: 154.0,
    img: '/images/product/Melon_Kekiri.png'
  },
  {
    id: 21,
    name: 'Broccoli',
    weight: 1,
    price: 154.0,
    img: '/images/product/Broccoli.png'
  },
  {
    id: 22,
    name: 'Green Cucumber',
    weight: 1,
    price: 154.0,
    img: '/images/product/Green Cucumber.png'
  },
  {
    id: 23,
    name: 'Brinjal',
    weight: 1,
    price: 154.0,
    img: '/images/product/brinjal.png'
  },
  {
    id: 24,
    name: 'Bell Pepper Green',
    weight: 1,
    price: 154.0,
    img: '/images/product/Bell Pepper Green.png'
  },
  {
    id: 25,
    name: 'Bell Pepper Yellow',
    weight: 1,
    price: 154.0,
    img: '/images/product/Bell Pepper Yellow.png'
  },
  {
    id: 26,
    name: 'Thumba Karawila',
    weight: 1,
    price: 154.0,
    img: '/images/product/Thumba Karawila.png'
  },
  {
    id: 27,
    name: 'Onion Leaves',
    weight: 1,
    price: 154.0,
    img: '/images/product/Onion Leaves.png'
  },
  {
    id: 28,
    name: 'Cauliflower',
    weight: 1,
    price: 154.0,
    img: '/images/product/Cauliflower.png'
  },
  {
    id: 29,
    name: 'Ginger',
    weight: 1,
    price: 154.0,
    img: '/images/product/ginger.png'
  },
  {
    id: 30,
    name: 'Winged Bean Dambala',
    weight: 1,
    price: 154.0,
    img: '/images/product/Winged bean-dambala.png'
  }
]
</script>

<template>
  <div
    class="bg-fixed bg-img-all-products bg-black/[.55] bg-cover bg-no-repeat bg-center bg-blend-overlay py-16"
  >
    <div class="max-w-screen-xl mx-auto grid grid-cols-5 gap-6">
      <div v-for="product in products" :key="product.id" class="justify-self-center">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
</script>

<template>
  <div class="min-h-svh flex flex-col ">
    <AppHeader />
    <div class="flex-1 mt-28">
      <h2 class="text-center text-gray-500 text-3xl font-semibold mb-6">Shopping Cart</h2>
      <div class="flex justify-center mb-14">
        <ShoppingCart />
      </div>
    </div>
    <div class="flex-none">
      <AppFooter />
    </div>
  </div>
</template>

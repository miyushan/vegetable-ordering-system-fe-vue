<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue'
import AllProducts from '../components/AllProducts.vue'
import AppFooter from '../components/AppFooter.vue'
</script>

<template>
  <div class="overflow-hidden">
    <AppHeader />
    <div class="mt-14">
      <AllProducts />
    </div>
    <AppFooter />
  </div>
</template>

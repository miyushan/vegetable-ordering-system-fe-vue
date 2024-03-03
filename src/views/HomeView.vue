<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue'
import HomeCover from '../components/HomeCover.vue'
import HomePopularItems from '../components/HomePopularItems.vue'
import AboutUs from '../components/AboutUs.vue'
import HomeAllProducts from '../components/HomeAllProducts.vue'
import AppFooter from '../components/AppFooter.vue'
</script>

<template>
  <main>
    <div class="min-h-svh flex flex-col">
      <AppHeader />
      <HomeCover />
    </div>
    <HomePopularItems />
    <HomeAllProducts />
    <AboutUs />
    <div class="grid place-content-center my-48">
      <img src="/images/organicFoods.png" alt="Organic Foods" class="max-w-96" />
    </div>
    <AppFooter />
  </main>
</template>

<script lang="ts">
import AppHeader from '../components/AppHeader.vue'
import HomeCover from '../components/HomeCover.vue'
import HomePopularItems from '../components/HomePopularItems.vue'
import AboutUs from '../components/AboutUs.vue'
import HomeAllProducts from '../components/HomeAllProducts.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  components: { AppHeader, HomeCover, HomePopularItems, AboutUs, HomeAllProducts, AppFooter }
}
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
    <AppFooter />
  </main>
</template>

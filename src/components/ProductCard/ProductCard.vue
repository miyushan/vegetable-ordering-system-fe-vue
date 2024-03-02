<script lang="ts">
import type { PropType } from 'vue/dist/vue.js'
import OutlinedButton from './OutlinedButton.vue'
import type { Product } from '@/models/product'

export default {
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  },
  components: { OutlinedButton }
}
</script>

<template>
  <div class="flex flex-col p-3 w-52 bg-white bg-opacity-90 rounded-md">
    <img src="/images/product/ginger.png" class="drop-shadow-lg" />
    <h6 class="text-base font-semibold mt-2">{{ product.name }}</h6>
    <div class="flex justify-between mb-2">
      <p class="text-sm">{{ product.weight }} kg</p>
      <p class="text-sm">Rs.{{ product.price }}</p>
    </div>
    <OutlinedButton name="Add to Cart" />
  </div>
</template>

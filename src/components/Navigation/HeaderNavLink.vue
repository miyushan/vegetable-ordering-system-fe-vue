<script lang="ts">
import type { PropType } from 'vue'

type NavLinkProps = {
  name: String
  url: String
}

export default {
  props: {
    page: {
      type: Object as PropType<NavLinkProps>,
      required: true
    }
  }
}
</script>
<template>
  <li>
    <router-link
      :to="`/${page.url}`"
      class="block py-2 px-3 text-gray-600 rounded bg-transparent font-medium"
      active-class="sm:text-green-600 font-semibold"
      :aria-current="page"
      >{{ page.name }}</router-link
    >
  </li>
</template>

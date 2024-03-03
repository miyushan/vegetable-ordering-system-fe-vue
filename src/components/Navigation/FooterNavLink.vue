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
      class="block py-2  text-gray-400 rounded bg-transparent font-medium"
      active-class="text-gray-200 font-semibold"
      :aria-current="page"
      >{{ page.name }}</router-link
    >
  </li>
</template>

<script lang="ts">
import NavLink from './NavLink.vue'
export default {
  components: { NavLink },
  data() {
    return {
      navLinks: [
        {
          name: 'Home',
          url: 'home'
        },
        {
          name: 'Products',
          url: 'products'
        },
        {
          name: 'Cart',
          url: 'cart'
        }
      ]
    }
  }
}
</script>

<template>
  <nav class="flex-none bg-gray-100 box-shadow-xl fixed top-0 left-0 right-0 z-10 shadow-lg">
    <div class="max-w-screen-xl h-14 flex flex-wrap items-center justify-between mx-auto">
      <a
        href="/home"
        class="flex items-center space-x-3 rtl:space-x-reverse text-gray-600 text-2xl font-bold whitespace-nowrap"
      >
        VegiDeals
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button
          class="px-3 py-1.5 text-small font-small text-center w-full text-white rounded-lg focus:ring-4 focus:outline-none bg-green-600 hover:bg-green-700 focus:ring-green-800"
          type="submit"
        >
          Get Free Credits
        </button>
        <button
          data-collapse-toggle="navbar-cta"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-cta"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-cta"
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
        >
          <NavLink
            v-for="(page, index) in navLinks"
            class="nav-item"
            :key="index"
            :page="page"
            :index="index"
          />
        </ul>
      </div>
    </div>
  </nav>
</template>

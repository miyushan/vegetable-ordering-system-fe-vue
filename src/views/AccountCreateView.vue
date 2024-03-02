<script lang="ts">
import type { Branch } from '@/models/user'
import AuthLeft from '../components/AuthLeft.vue'
import FormInput from '../components/FormInput.vue'
import Data from '../data/Data'

export default {
  data() {
    return {
      userName: '',
      mobile: '',
      branch: '',
      pw: ''
    }
  },
  components: { AuthLeft, FormInput },
  methods: {
    onClickLogin() {
      this.$router.push({ path: '/login' })
    },
    async onClickCreateAccount() {
      if (this.isProperSubmission()) {
        try {
          await this.submitAndRedirect()
        } catch (error) {
          console.log(error)
        }
      }
    },
    isProperSubmission() {
      const errors = {
        userName: '',
        mobile: '',
        branch: '',
        pw: ''
      }
      let errorExist = false

      if (!this.userName.trim()) {
        errors.userName = 'User name is required'
        errorExist = true
      }

      const mobileRegex = /^\d{10}$/
      if (!this.mobile.match(mobileRegex)) {
        errors.mobile = 'Mobile number must be 10 digits'
        errorExist = true
      }

      if (!this.branch.trim()) {
        errors.branch = 'Branch is required'
        errorExist = true
      }

      if (this.pw.length < 8) {
        errors.pw = 'Password must be at least 8 characters'
        errorExist = true
      }

      if (errorExist) {
        console.log(errors)
        return false
      }
      return true
    },
    async submitAndRedirect() {
      try {
        const user = {
          userName: this.userName,
          mobile: this.mobile,
          branch: this.branch as unknown as Branch,
          pw: this.pw
        }
        await Data.addUser(user)
        await this.$router.push({ path: '/login' })
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  }
}
</script>

<template>
  <div class="min-h-screen overflow-hidden grid grid-cols-2">
    <div class="bg-auth-img bg-no-repeat bg-center bg-cover grid place-content-center">
      <AuthLeft />
    </div>
    <div class="grid place-content-center bg-white">
      <div>
        <h3 class="text-gray-700 text-2xl font-bold">Welcome to VegiDeals</h3>
        <div class="text-gray-600 text-lg mb-3">We make you smart</div>
        <form class="form" @submit.prevent="onClickCreateAccount">
          <FormInput v-model="userName" placeholder="User Name" id="userName" type="text" />

          <FormInput v-model="mobile" placeholder="Mobile" id="mobile" type="tel" number />

          <FormInput v-model="branch" placeholder="Branch" id="branch" type="text" />

          <FormInput v-model="pw" placeholder="Password" id="password" type="password" />

          <button
            class="px-3 py-2 text-medium font-medium text-center w-full text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            type="submit"
          >
            Create Account
          </button>
        </form>
      </div>

      <button
        @click.prevent="onClickLogin"
        class="absolute bottom-6 right-6 px-3 py-2 text-medium font-medium text-center text-green-600 rounded-lg focus:ring-2 focus:outline-none bg-green-50 hover:bg-green-100 focus:ring-green-200"
      >
        Log In
      </button>
    </div>
  </div>
</template>

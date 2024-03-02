<script setup type="ts">
import Data from '@/data/Data'
import {useRouter } from 'vue-router'
import AuthLeft from '../components/AuthLeft.vue'
import FormInput from '../components/FormInput.vue'
import { ref } from 'vue'

const router = useRouter()

const mobile = ref('')
const pw = ref('')

const onClickLogin = async () => {
  if (isProperSubmission()) {
    try {
      await submitAndRedirect()
    } catch (error) {
      console.log(error)
    }
  }
}
const onClickCreateAccount = () => {
  router.push({ path: '/create-account' })
}
const isProperSubmission = () => {
  const errors = {
    mobile: '',
    pw: ''
  }
  let errorExist = false

  console.log(mobile.value, pw.value)

  const mobileRegex = /^\d{10}$/
  if (!mobile.value.match(mobileRegex)) {
    errors.mobile = 'Mobile number must be 10 digits'
    errorExist = true
  }

  if (pw.value.length < 8) {
    errors.pw = 'Password must be at least 8 characters'
    errorExist = true
  }

  if (errorExist) {
    console.log(errors)
    return false
  }
  return true
}
const submitAndRedirect = async () => {
  try {
    const user = await Data.getSingleUser(mobile.value, pw.value)
    if (user) {
      await router.push({ path: '/home' })
    } else {
      console.log('Invalid mobile number or password.')
    }
  } catch (error) {
    console.log(error)
    throw error
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
        <form class="form" @submit.prevent="onClickLogin" method="post">
          <FormInput v-model="mobile" placeholder="Mobile" id="mobile" type="tel" />
          <FormInput v-model="pw" placeholder="Password" id="password" type="password" />
          <button
            class="px-3 py-2 text-medium font-medium text-center w-full text-white rounded-lg focus:ring-4 focus:outline-none bg-green-600 hover:bg-green-700 focus:ring-green-800"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>

      <button
        @click.prevent="onClickCreateAccount"
        class="absolute bottom-6 right-6 px-3 py-2 text-small font-small text-center text-green-600 rounded-lg focus:ring-2 focus:outline-none bg-green-50 hover:bg-green-100 focus:ring-green-200"
      >
        Create Account
      </button>
    </div>
  </div>
</template>

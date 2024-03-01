<script lang="ts">
import Data from '@/data/Data'
import AuthLeft from '../components/AuthLeft.vue'
import FormInput from '../components/FormInput.vue'

export default {
  data() {
    return {
      mobile: '',
      pw: ''
    }
  },
  components: { AuthLeft, FormInput },
  methods: {
    async onClickLogin() {
      if (this.isProperSubmission()) {
        try {
          await this.submitAndRedirect()
        } catch (error) {
          console.log(error)
        }
      }
    },

    onClickCreateAccount() {
      this.$router.push({ path: '/create-account' })
    },

    isProperSubmission() {
      const errors = {
        mobile: '',
        pw: ''
      }
      let errorExist = false

      const mobileRegex = /^\d{10}$/
      if (!this.mobile.match(mobileRegex)) {
        errors.mobile = 'Mobile number must be 10 digits'
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
        const user = await Data.getSingleUser(this.mobile, this.pw)
        if (user) {
          await this.$router.push({ path: '/home' })
        } else {
          console.log('Invalid mobile number or password.')
        }
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
    <div
      class="bg-[url('/images/marisol-benitez-QvkAQTNj4zk-unsplash.jpg')] bg-no-repeat bg-center bg-cover grid place-content-center"
    >
      <AuthLeft />
    </div>
    <div class="grid place-content-center bg-[#554c4c]">
      <div>
        <div className="title title1">Welcome to VegiDeals</div>
        <div className="title title2">We make you smart</div>
        <form className="form" @submit.prevent="onClickLogin" method="post">
          <div>
            <FormInput v-model="mobile" placeholder="Mobile" id="mobile" type="tel" number />
          </div>
          <div>
            <FormInput v-model="pw" placeholder="Password" id="password" type="password" />
          </div>
          <button className="btn submit-btn vd-hover-pointer" type="submit" variant="success">
            LOG IN
          </button>
        </form>
      </div>

      <button
        @click.prevent="onClickCreateAccount"
        className="btn create-new-btn vd-hover-pointer"
        variant="success"
      >
        Create Account
      </button>
    </div>
  </div>
</template>

<style scoped>
.form {
  width: 290px;
}

.title {
  color: #fff;
}

.title1 {
  font-weight: 900;
  margin-bottom: 4px;
  font-size: 25px;
}
.title2 {
  font-size: 21px;
  margin-bottom: 12px;
}

.btn {
  padding: 0px 24px;
  border-radius: 12px;
  color: #ffffff;
  height: 35px;
  background-color: rgb(5, 199, 5);
  border: none;
}
.btn:hover {
  background-color: rgb(8, 155, 8);
}

.submit-btn {
  width: 100%;
}

.create-new-btn {
  position: absolute;
  bottom: 24px;
  right: 24px;
}
</style>

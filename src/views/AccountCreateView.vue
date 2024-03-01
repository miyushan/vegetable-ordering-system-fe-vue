<script lang="ts">
import type { Branch } from '@/models/user'
import AuthLeft from '../components/AuthLeft.vue'
import FormInput from '../components/FormInput.vue'
import Data from '../data/Data'

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
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
        firstName: '',
        lastName: '',
        mobile: '',
        branch: '',
        pw: ''
      }
      let errorExist = false

      if (!this.firstName.trim()) {
        errors.firstName = 'First name is required'
        errorExist = true
      }

      if (!this.lastName.trim()) {
        errors.lastName = 'Last name is required'
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
          firstName: this.firstName,
          lastName: this.lastName,
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
  <div class="vd-row">
    <div class="vd-col vd-col-left">
      <AuthLeft />
    </div>
    <div class="vd-col vd-col-right">
      <div>
        <div className="title title1">Welcome to VegiDeals</div>
        <div className="title title2">We make you smart</div>
        <form className="form" @submit.prevent="onClickCreateAccount">
          <div>
            <FormInput v-model="firstName" placeholder="First Name" id="firstName" type="text" />
          </div>
          <div>
            <FormInput v-model="lastName" placeholder="Last Name" id="lastName" type="text" />
          </div>
          <div>
            <FormInput v-model="mobile" placeholder="Mobile" id="mobile" type="tel" number />
          </div>
          <div>
            <FormInput v-model="branch" placeholder="Branch" id="branch" type="text" />
          </div>
          <div>
            <FormInput v-model="pw" placeholder="Password" id="password" type="password" />
          </div>

          <button className="btn submit-btn vd-hover-pointer" type="submit">Create Account</button>
        </form>
      </div>

      <button @click.prevent="onClickLogin" className="btn create-new-btn vd-hover-pointer">
        Log In
      </button>
    </div>
  </div>
</template>

<style scoped>
.vd-row {
  display: flex;
}
.vd-col {
  width: 50%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vd-col-left {
  background-image: url('images/marisol-benitez-QvkAQTNj4zk-unsplash.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  mix-blend-mode: darken;
  height: 50vh;
  overflow: hidden;
}
.vd-col-right {
  background-color: #554c4c;
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
../data/Data

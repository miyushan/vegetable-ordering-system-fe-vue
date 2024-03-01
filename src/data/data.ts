import type { User } from '@/models/user'

const usersKey = 'users'
const profileKey = 'profile'

const userJson = localStorage.getItem(usersKey)
const userStore = JSON.parse(userJson || '[]')
const profileJson = localStorage.getItem(profileKey)
const profile = JSON.parse(profileJson || '[]')

const saveUsers = () => {
  localStorage.setItem(usersKey, JSON.stringify(userStore))
}

const saveProfile = () => {
  localStorage.setItem(profileKey, JSON.stringify(profile))
}

export default {
  addUser(user: Omit<User, 'id'>) {
    return new Promise<void>((resolve) => {
      const id = userStore.length > 0 ? userStore[userStore.length - 1].id + 1 : 1
      userStore.push({ ...user, id })
      setTimeout(() => {
        saveUsers()
        resolve()
      }, 3000)
    })
  },

  getAllUsers() {
    return userStore
  },

  getSingleUser(mobile: string, pw: string): Promise<User | null> {
    return new Promise<User | null>((resolve) => {
      setTimeout(() => {
        const user = userStore.find((user: User) => user.mobile === mobile)
        if (user && user.pw === pw) {
          resolve(user)
        } else {
          resolve(null)
        }
      }, 3000)
    })
  },

  editUser(id: number, user: User) {
    const index = userStore.findIndex((u: User) => u.id === id)
    if (index !== -1) {
      userStore[index] = user
      saveUsers()
    }
  },

  deleteUser(id: number) {
    const index = userStore.findIndex((u: User) => u.id === id)
    if (index !== -1) {
      userStore.splice(index, 1)
      saveUsers()
    }
  },

  ////browser level
  getProfileInfo(): Promise<User | null> {
    return new Promise<User | null>((resolve) => {
      setTimeout(() => {
        const user = profile
        resolve(user)
        saveProfile()
      }, 3000)
    })
  }
}

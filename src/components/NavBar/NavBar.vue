<template>
  <div class="navbar">
    <h2>LOGO</h2>
    <div class="navbar-nav">
      <p @click="goToHome" class="nav-button">Home</p>
      <p @click="goToMovie" class="nav-button">Movie</p>
      <p @click="goToUsers" class="nav-button">Users</p>
      <p @click="goToPage" class="nav-button">Page</p>
      <p @click="goToCounter" class="nav-button">Counter</p>
    </div>
  </div>
</template>

<script>
//vue
import { useRouter } from 'vue-router'

export default {
    name: "NavBar",

    setup() {
        
        const router = useRouter()

        const goToHome = () => router.push('/', () => {})

        const goToMovie = () => router.push('/movie', () => {})

        const goToUsers = () => router.push('/users', () => {})
        
        const goToPage = () => router.push('/page', () => {})

        const goToCounter = () => router.push('/counter', () => {})

        return {
            goToHome,
            goToPage,
            goToMovie,
            goToUsers,
            goToCounter
        }
        
    },
    
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 100%;
  height: 70px;
  background-color: rgb(68, 67, 67);
  color: white;
}

.navbar-nav {
  display: flex;
  justify-content: space-around;
  margin-left: 10px;
  max-width: 300px;
}

.nav-button {
  margin-left: 10px;
  cursor: pointer;
  user-select: none;
}
</style>
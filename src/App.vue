<template>
    <NavBar/>
    <router-view></router-view>
</template>

<script>
//components
import NavBar from './components/NavBar/NavBar'

export default {
  name: "App",
  components: {
    NavBar,
  }
}
</script>

<style>
* {
  margin: 0 0;
  padding: 0 0;
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
</style>

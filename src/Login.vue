<template>
  <div id="Login">
    <Login/>
  </div>
</template>

<script>
import Login from './components/Login'

export default {
  name: 'Login',
  components: {
    Login
  }
}
</script>

<style>
#Login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

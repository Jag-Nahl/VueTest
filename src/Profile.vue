<template>
  <div id="Profile">
    <ProfileDetails/>
  </div>
</template>

<script>
import ProfileDetails from './components/ProfileDetails'
import Axios from 'axios'

export default {
  name: 'ProfilePage',
  components: {
    ProfileDetails
  }
}
</script>

<style>
#Profile {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

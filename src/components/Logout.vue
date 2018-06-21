<template>
<div>
   <button v-on:click="logout">Logout</button>
  <button v-on:click="logout">Login</button>
</div>
</template>

<script>
import Axios from 'axios'

export default {
  name: "LogoutInput",
  data() {
  return {}
  },
  methods: {
    logout: function() {
      localStorage.setItem('token', '');
      alert("You have logged out");
      location.reload();
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

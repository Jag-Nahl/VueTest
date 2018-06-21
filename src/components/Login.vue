<template>
  <div class="hello">
   <h2>Login.</h2>
   <hr>
    <input type="email" placeholder="Username" v-model="username"/>
        <input type="password" v-model="password" />
<button v-on:click="Submit()" />
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    Submit: function() {
      console.log(this.username + this.password);
    }
  },
  mounted: function() {
  
  }
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

<template>
  <div class="hello">
   <h2>Login.</h2>
   <hr>
    <input type="email" placeholder="Username" v-model="username"/>
        <input type="password" v-model="password" />
<button v-on:click="Submit()">Login Here</button>
    
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: "LoginInput",
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    Submit: function() {
      var self = this;
      console.log(this.username + this.password);
      var credentials = {
              userName: this.username,
        password: this.password
      };
      $.ajax({
    type: "POST",
    url: "https://jags-app.azurewebsites.net/api/auth/login",
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify(credentials),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data){
      console.log(data);
      console.log("SUCCESS");
      localStorage.setItem('token', data.auth_token);
      localStorage.setItem('id', data.id);

      self.$router.push('/profile')

      },
    error: function() {
    console.log("FAIL");

    }
});
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

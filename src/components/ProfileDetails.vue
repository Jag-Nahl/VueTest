<template>
  <div class="hello">
   <h2>Profile Details.</h2>
   <Logout/>
   <hr>
    <h5>WELCOME TO YOUR PROFILE</h5>
    <h2>{{list}}</h2>
  </div>
</template>


<script>
import Axios from 'axios'
import $ from 'jquery'
import Logout from './Logout'

function getToken() {
  var x = localStorage.getItem('token');
  if(x == null || x == "") {
    return "Bearer ";
  }
  else {
    return "Bearer " + x;
  }
}
export default {
  name: "ProfileDetails",
  components: {
    Logout
  },
  data() {
    return {
      list: [],
    };
  },
  mounted: function() {
    var self = this;
     $.ajax({
    type: "POST",
    url: "https://jags-app.azurewebsites.net/api/profile/login",
    // The key needs to match your method's input parameter (case-sensitive).
    dataType: "json",
     beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', getToken());
  },
    success: function(data){
      console.log(data);
      self.list = data;
      },
    error: function(errMsg) {
      self.$router.push('/login')
    }
});
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

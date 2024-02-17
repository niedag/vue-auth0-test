<template>
    <div>
      <h2>User Profile</h2>
      <button @click="login">Log in</button>
      <pre>
        <code>{{ user }}</code>
      </pre>
    </div>
  </template>
  
  <script>
    export default {
      data: function () {
        return {
          user: this.$auth0.user
        };
      },
      methods: {
        login() {
          this.$auth0.loginWithRedirect();
        }
      }
    };
  </script>
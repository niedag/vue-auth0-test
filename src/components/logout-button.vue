<!-- Redirects user to Auth0 to ensure session ended with Auth0 -->
<!-- After logged out, user is redirected to a specified returnTo param -->

<!-- To log the user out of your application but not from Auth0, use logout({ localOnly: true }) -->

<template>
    <div>
      <button @click="logout">Log out</button>
    </div>
  </template>
  
  <script>
    export default {
      methods: {
        logout() {
          this.$auth0.logout({ logoutParams: { returnTo: window.location.origin } });
        }
      }
    };
  </script>

    <!-- Uses logout() globally from $auth0 with this accessor -->
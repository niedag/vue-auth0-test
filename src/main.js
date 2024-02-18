import { createApp } from 'vue'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue'; //name of a module from @auth0

// Global components
import login_button from './components/login-button.vue';
import logout_button from './components/logout-button.vue';

const app = createApp(App); // replaces the need to use 

// Globally register the components to the application
app.component('login-button', login_button);
app.component('logout-button', logout_button);

app.use(
    createAuth0({
        domain: "dev-y5agcwlppf7dyjjb.us.auth0.com",
        clientId: "Hha3WGDqamPQ50ULrtEIntjEr84TaaGW",
        authorizationParams: {
            redirect_uri:  window.location.origin
        }
    })
);

app.mount('#app'); // mounts Vue app to a specific DOM element - with id '#app'
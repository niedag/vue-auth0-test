import { createApp } from 'vue'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue-test';

const app = createApp(App);

app.use(
    createAuth0({
        domain: "dev-y5agcwlppf7dyjjb.us.auth0.com",
        clientId: "Hha3WGDqamPQ50ULrtEIntjEr84TaaGW",
        authorizationParams: {
            redirect_uri:  window.location.origin
        }
    })
);


app.mount('#app');
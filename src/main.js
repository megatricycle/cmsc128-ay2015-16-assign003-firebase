import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import LandingPage from './components/LandingPage.vue';
import Home from './components/Home.vue';
import Dashboard from './components/Dashboard.vue';

Vue.use(VueRouter)

const router = new VueRouter({
    // history: true
});

router.map({
    '/': {
        component: LandingPage
    },
    '/home': {
        component: Home,
        subRoutes: {
            '/': {
                component: Dashboard
            } 
        }
    }
});

router.start(App, '#app');

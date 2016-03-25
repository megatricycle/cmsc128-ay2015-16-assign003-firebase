import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import LandingPage from './components/LandingPage.vue';
import Home from './components/Home.vue';
import Dashboard from './components/Dashboard.vue';
import RecipePage from './components/RecipePage.vue';
import EditRecipe from './components/EditRecipe.vue';

Vue.use(VueRouter);
Vue.config.debug = true;

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
            },
            '/recipe/:recipeId': {
                component: RecipePage
            },
            '/recipe/:recipeId/edit': {
                component: EditRecipe
            }
        }
    }
});

router.start(App, '#app');
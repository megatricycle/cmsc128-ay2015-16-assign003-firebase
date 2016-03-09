import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import LandingPage from './components/LandingPage.vue';
import Home from './components/Home.vue';
import Dashboard from './components/Dashboard.vue';
import RecipePage from './components/RecipePage.vue';
import EditRecipe from './components/EditRecipe.vue';

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

// var myDataRef = new Firebase('https://recipe-master.firebaseio-demo.com/');

// myDataRef.on('child_added', function(snapshot) {
//     console.log(snapshot.val());
// });
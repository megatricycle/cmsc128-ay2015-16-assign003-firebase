<template>
    <div class="navbar-fixed hide-on-large-only">
        <nav class="blue darken-4 fixed">
            <div class="row">
                <div class="col s12 nav-wrapper logo">
                    <a id="hamburger" v-link="''" v-on:click="openSideNav($event)" data-activates="admin-sidenav" class="button-collapse hide-on-large-only"><i class="mdi-navigation-menu"></i></a>
                    <a v-link="{ path: '/home' }" class="brand-logo waves-effect waves-light">Recipe Master</a>
                </div>
            </div>
        </nav>
    </div>

    <ul id="admin-sidenav" class="side-nav fixed blue-grey darken-4">
        <li class="blue darken-4 side-nav-logo">
            <a v-link="{ path: '/home' }" v-on:click="mobileHide">Recipe Master</a>
        </li>
        <li class="blue-grey darken-4 side-nav-your-recipes">Your recipes</li>
        <li class="blue-grey darken-4 side-nav-recipe" v-for="recipe in sharedData.recipes">
            <a v-link="{ path: '/home/recipe/' + recipe.id }" v-on:click="mobileHide">{{recipe.name}}</a>
        </li>
    </ul>
</template>

<script>
import store from '../data.js';

export default {
    attached() {
        $('#hamburger').sideNav();
    },
    data () {
        return {
            sharedData: store
        }
    },
    methods: {
        mobileHide() {
            let windowsize = $(window).width();
            
            if (windowsize < 992) {
                $('#hamburger').sideNav('hide');
            }
        }
    }
}
</script>

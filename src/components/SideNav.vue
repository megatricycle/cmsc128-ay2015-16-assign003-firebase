<template>
    <div class="navbar-fixed hide-on-large-only">
        <nav class="blue darken-4 fixed">
            <div class="row">
                <div class="col s12 nav-wrapper logo">
                    <a id="hamburger" v-on:click="openSideNav($event)" data-activates="admin-sidenav" class="button-collapse hide-on-large-only"><i class="mdi-navigation-menu"></i></a>
                    <a href="/" class="brand-logo waves-effect waves-light">Recipe Master</a>
                </div>
            </div>
        </nav>
    </div>

    <ul id="admin-sidenav" class="side-nav fixed blue-grey darken-4">
        <li class="blue darken-4 side-nav-logo">Recipe Master</li>
        <li class="blue-grey darken-4 side-nav-your-recipes">Your recipes</li>
        <li class="blue-grey darken-4 side-nav-recipe"><a v-link="{ path: '/' }">Baked Potato</a></li>
        <li class="blue-grey darken-4 side-nav-recipe"><a v-link="{ path: '/' }">Chicken Ala King</a></li>
    </ul>
</template>

<script>
    $('[data-activates=admin-sidenav]').sideNav({
        closeOnClick: false
    });
</script>

<script>
export default {
    data () {
        return {
            
        }
    },
    methods: {
        openSideNav(e) {
            
        }
    }
}
</script>

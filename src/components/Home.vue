<template>
    <loading-page v-if="sharedData.recipeLoading"></loading-page>

    <div class="" v-else>
        <side-nav></side-nav>
        
        <div class="content">
            <upper-settings class="hide-on-med-and-down"></upper-settings>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import SideNav from './SideNav.vue';
import UpperSettings from './UpperSettings.vue';
import LoadingPage from './LoadingPage.vue';

import store from '../data';

export default {
    components: {
        SideNav,
        UpperSettings,
        LoadingPage
    },
    data () {
        return {
            sharedData: store
        }
    }
}
</script>

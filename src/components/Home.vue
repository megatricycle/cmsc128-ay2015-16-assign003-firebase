<template>
    <div class="">
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

export default {
    components: {
        SideNav,
        UpperSettings
    },
    data () {
        return {
        }
    }
}
</script>

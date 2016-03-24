<template>
    <div class="loading-page blue darken-3">
        <loading-spinner message="Hang on, we're loading your awesome recipes."></loading-spinner>
    </div>
</template>

<script>
import LoadingSpinner from './LoadingSpinner.vue';

export default {
    components: {
        LoadingSpinner
    },
    data () {
        return {
        }
    }
}
</script>

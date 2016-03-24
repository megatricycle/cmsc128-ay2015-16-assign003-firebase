<template>
    <div class="content-padding">
        <div class="row">
            <div class="col s12">
                <h5>Recipes</h5>    
            </div>
        </div>
        
        <div class="row">
            <div class="col s6 m6 l3" v-for="recipe in sharedData.recipes">
                <recipe-card :recipe="recipe"></recipe-card>
            </div>
        </div>
        
        <div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
            <a v-link="{ path: '/home/recipe/testrecipeid/edit' }" class="btn-floating btn-large waves-effect waves-light pink accent-3"><i class="mdi-content-add"></i></a>
        </div>
    </div>
</template>

<script>
import RecipeCard from './RecipeCard.vue';
import LoadingSpinner from './LoadingSpinner.vue';
import store from '../data';

export default {
    components: {
        RecipeCard
    },
    data () {
        return {
            sharedData: store
        };
    }
}
</script>

<template>
    <div class="content-padding">
        <div class="row">
            <div class="col s12">
                <h5>Recipes</h5>    
            </div>
        </div>
        
        <div class="row">
            <div class="col s12 m12 l3" v-for="recipe in sharedData.recipes">
                <recipe-card v-if="recipe" :recipe="recipe"></recipe-card>
            </div>
        </div>
        
        <div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
            <a href="#" class="btn-floating btn-large waves-effect waves-light pink accent-3" v-on:click="addRecipe"><i class="mdi-content-add"></i></a>
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
    },
    methods: {
        addRecipe(e) {
            e.preventDefault();
            
            let insertedId = this.sharedData.addRecipe({
                name: 'Untitled-recipe',
                tags: [],
                text: ''
            });
            
            this.$route.router.go('/home/recipe/' + insertedId + '/edit?created=1');
        }
    }
}
</script>

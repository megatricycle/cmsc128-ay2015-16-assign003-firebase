<template>
    <div class="dashboard">
        <h5>Recipes</h5>
        
        <div class="row">
            <div class="col s6 m6 l3">
                <recipe-card></recipe-card>
            </div>
        </div>
        
        <div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
            <a class="btn-floating btn-large waves-effect waves-light red"><i class="mdi-content-add"></i></a>
        </div>
    </div>
</template>

<script>
import RecipeCard from './RecipeCard.vue';

export default {
    components: {
        RecipeCard
    },
    data () {
        return {
        };
    }
}
</script>
